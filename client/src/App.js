import { useEffect } from "react";
import "./assets/css/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch} from "react-redux"
import {auth} from "./firebase"
import Router from './router/router'


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
        <Router />
  );
};

export default App;
