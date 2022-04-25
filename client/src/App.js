import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/tailwind.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Header from "./components/nav/Header";
import Footer from "./components/nav/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux"
import {auth} from "./firebase"
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const dispatch = useDispatch();

  //Checking firebase authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( async (user)=>{
      if(user){
        const userToken = await user.getIdTokenResult()
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            name: user.displayName,
            email: user.email,
            token: userToken.token
          }
        })
      }
    })
    //Cleanup
    return () => unsubscribe()
  })

  return (
    <div className="bg-white">
      <Header />
      <Routes>
        <Route name="home" path="/" element={<Home />} />
        <Route name="shop" path="/shop" element={<Shop />} />
        <Route name="product-detail" path="/product" element={<ProductDetail />} />
        <Route name="login" path="/login" element={<Login />} />
        <Route name="register" path="/register" element={<Register />} />
        <Route name="registerComplete" path="/register/complete" element={<RegisterComplete />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;