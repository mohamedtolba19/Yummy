import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export let authContext =  createContext();
export default function AuthContextProvider(props)
{
   

    const [userData, setUserData] = useState(null)
    const [isLogin, setIsLogin] = useState(false)

    async function sendUserData(values)
    {
     return axios.post(`https://smart-app-c1zm.onrender.com/signup`,values).then((response)=>response).catch((error)=>error);
    
    }
    async function loginUser(values)
    {
     return axios.post(`https://smart-app-c1zm.onrender.com/signin`,values).then((response)=>response).catch((error)=>error);
    
    }
     
    function getUserData()
    {
        let encodedToken = localStorage.getItem("userToken");
        let decodedToken = jwtDecode(encodedToken);
        setUserData(decodedToken);
      

    }

     function logOut()
     {
        setUserData(null);
        localStorage.removeItem("userToken");
       window.location.reload("/login")
     }
     useLayoutEffect(()=>{
        if(localStorage.getItem("userToken"))
        {
            getUserData();
        }
       },[])

       function checkLogin()
       {
        if(isLogin)
  {
    toast.success(`welcome ${userData.first_name} ${userData.last_name}`)
    setIsLogin(false);
  }
       }

       

    return <authContext.Provider value={{sendUserData,loginUser,getUserData,userData , setUserData,isLogin, setIsLogin ,checkLogin}}>
{props.children}
    </authContext.Provider>
}