import React, { useContext, useEffect, useRef } from 'react'
import { authContext } from '../../Context/authcontext'
import { mealsContext } from '../../Context/mealsContext'
import Atropos from 'atropos/react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Home() {
 let {checkLogin} = useContext(authContext)
 let {meals} = useContext(mealsContext);

 useEffect(()=>{

  checkLogin();



 },[])



  return <>
   <Helmet>
               
               <title>Yummy</title>
              
           </Helmet>
  {meals?<>
  
    <section>
    <div className='text-center py-3 animate__animated animate__backInUp'>
      <h1>Welcome to Yummy </h1>
      <p>get all inforamation about meals and how to make it with all instructions and rules ,
        <br/>and according to your area you will find meals that you want and search about ,<br/>there is diffrent categories and ingredients</p>
       <Link to={"/rondommeal"}>
       <button className='btn rondom'>Get Your Meal Today</button>
       </Link>
    </div>
    <div className='d-flex align-items-center  '>
    <i className="fa-solid fa-burger  me-2 fs-3 icon"></i>
    <h4 className='mt-2'>Latest Meals</h4>
    </div>
    <div className="row  gy-4 mt-1 justify-content-center align-items-center">
{meals.map((meal)=><div key={meal.idMeal} className='col-sm-6 col-md-4 col-lg-3 col-xl-3 '>

 <Link  to={`/mealdetails/${meal.idMeal}`}>
 <div className='meal animate__animated animate__backInUp'>
  <Atropos className="my-atropos">
  <img className='w-100 img' src={meal.strMealThumb} alt="" />
    </Atropos>
    <h4 className='text-center mt-3 h5'>{meal.strMeal}</h4>
  </div>
 </Link>
</div>)}
    </div>
   </section>
  
  </>:<div className='vh-100 loading-screen '>
  <div>
  <div className="spinner">
  <div className="double-bounce1"></div>
  <div className="double-bounce2"></div>
</div>
  </div>
  </div>}

  
  
  </>
}
