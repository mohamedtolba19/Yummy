import React, { useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { mealsContext } from '../../Context/mealsContext'
import Atropos from 'atropos/react';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Search() {
  
  

  let {searchMeals , serachMeal} = useContext(mealsContext)
  let params = useParams()
  useEffect(()=>{
   
  
    serachMeal(params.mealname)
  },[params.mealname])
 
  return <>
     <Helmet>
               
               <title>Search Meal</title>
              
           </Helmet>
 {searchMeals?<div className='row justify-content-center'>
  {searchMeals.map((meal)=><div key={meal.idMeal} className='col-md-3 '>

<Link  to={`/mealdetails/${meal.idMeal}`}>
<div className='meal animate__animated animate__backInUp'>
 <Atropos className="my-atropos">
 <img className='w-100 img' src={meal.strMealThumb} alt="" />
   </Atropos>
   <h4 className='text-center mt-3 h6'>{meal.strMeal}</h4>
 </div>
</Link>
</div>)}
 </div>:<div className='vh-100 loading-screen '>
  <div>
  <div class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>
  </div>
  </div>}
  </>
}
