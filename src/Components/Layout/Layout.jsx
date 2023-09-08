import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout() {
  return <>
<div className='vh-100'>
<Navbar/>
 <div className="container-fluid p-lg-5 p-md-4 p-sm-3 p-3git  ">
 <Outlet></Outlet>

 </div>
 <Footer/>

</div>




  
  </>
}
