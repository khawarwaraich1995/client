import { Routes, Route } from 'react-router-dom';
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import ProductDetail from "../pages/ProductDetail"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import RegisterComplete from "../pages/auth/RegisterComplete"
import { ToastContainer } from 'react-toastify';

const FrontLayout = () => {

    return (
        <>
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
        </>
    )
}

export default FrontLayout;