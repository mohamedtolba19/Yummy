import React, { useContext, useState } from 'react'
import logo from "../../download.png"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { authContext } from '../../Context/authcontext'
import $ from "jquery"
export default function Navbar() {
   let {setUserData,userData, serachMeal}  = useContext(authContext)
   const [mealName , setMealName] = useState(null)
   let params = useParams()
let navigate = useNavigate();

$(".navigate").click(function (e){
    $(e.target).addClass("active-link");
    $(e.target).parent().siblings().children().removeClass("active-link")
})

function logOut()
{
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login")

}

  return <>
  <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid px-4">
        <div className="navbar-brand ">
      
           <div className='logo d-flex align-items-center justify-content-center'>
           <img  src={logo} alt="" />
          <span>Yummy</span>
          
           </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
         {userData?   <ul className="navbar-nav me-auto mb-3 mb-lg-0 ">
         <li className="nav-item me-3">
                    <Link className="nav-link text-center navigate active-link text-white" to='/'>Home</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link text-center navigate text-white" to='categories'>Categories</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link text-center navigate text-white" to='area'>Area</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link text-center navigate text-white" to='ingredients'>Ingredients</Link>
                </li>
               
           
              
            </ul>:null}

          {userData?<div className='w-100 mx-2 position-relative'>
               
               <input onChange={(e)=>setMealName(e.target.value)} type="text" className='form-control ' placeholder='search by name' />
             
           {mealName?<Link to={`search/${mealName}`}>
          <i className="fa-solid fa-magnifying-glass"></i>
          </Link>:null}
          </div>:null}
            <ul className="navbar-nav ms-auto  mt-2 mt-lg-0">
           {userData?   <li className="nav-item d-flex justify-content-center align-items-center ">
                    <span onClick={logOut} className="nav-span text-center auth w-100 nav-link" >Logout</span>
                </li>:<> <li className="nav-item">
                    <Link className=" auth text-center nav-link mb-2 mb-lg-0 mb-sm-2" to='login'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="auth text-center nav-link " to='register'>Register</Link>
                </li></>}
               
             
              
            </ul>
          
        </div>
    </div>
  </nav>
  
  </>
}
