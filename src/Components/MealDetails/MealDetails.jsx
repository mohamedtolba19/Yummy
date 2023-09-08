import React, { useContext, useEffect, useLayoutEffect, useState,useRef } from 'react'
import { useParams } from 'react-router-dom'
import { mealsContext } from '../../Context/mealsContext';
import Atropos from 'atropos/react';
import { Helmet } from 'react-helmet';


export default function MealDetails() {
  

let {getMealDetails , mealDetails , vedio} = useContext(mealsContext)

let params = useParams();
useEffect(()=>{
    
    getMealDetails(params.id)
    
    },[])

    useLayoutEffect(()=>{
      document.documentElement.scrollTop = 0;
    },[])
  return <>
     <Helmet>
               
               <title>Meal Details</title>
              
           </Helmet>
  {mealDetails?<>

    <div className='row meal '>

<div className="col-sm-6 col-md-4 col-lg-3 animate__animated animate__backInLeft mb-4">
 <div className="meal-cover">
 <Atropos className="my-atropos">
 <img className='w-100' src={mealDetails.strMealThumb} alt="" />
  </Atropos>

 </div>
</div>
<div className="col-sm-6 col-md-8 col-lg-9 animate__animated animate__backInLeft">
  <div className="meal-info">
    <h3>{`${mealDetails.strMeal} ${mealDetails.strTags}`}</h3>
  
    
    <div className='d-flex align-items-center p-2 '>
  <i className="fa-solid fa-newspaper   me-2 fs-3 icon p-2"></i>
  <h4>Instructions</h4>
  </div>
    <p className='p-2'>{mealDetails.strInstructions}</p>
    <div>
    <div className='d-flex align-items-center p-2 mb-3'>
  <i className="fa-solid fa-weight-scale me-2 fs-3 icon p-2"></i>
  <h4>Ingredients</h4>
  </div>
  <div className='ingredients'>
      {mealDetails.strIngredient1!=""?<span >{mealDetails.strMeasure1+"  "+mealDetails.strIngredient1}</span>:""}
     {mealDetails.strIngredient2!=""?<span>{mealDetails.strMeasure2+"  "+mealDetails.strIngredient2}</span>:""}
     {mealDetails.strIngredient3!=""?<span>{mealDetails.strMeasure3+"  "+mealDetails.strIngredient3}</span>:""}
     {mealDetails.strIngredient4!=""?<span>{mealDetails.strMeasure4+"  "+mealDetails.strIngredient4}</span>:""}
     {mealDetails.strIngredient5!=""?<span>{mealDetails.strMeasure5+"  "+mealDetails.strIngredient5}</span>:""}
     {mealDetails.strIngredient6!=""?<span>{mealDetails.strMeasure6+"  "+mealDetails.strIngredient6}</span>:""}
     {mealDetails.strIngredient7!=""?<span>{mealDetails.strMeasure7+"  "+mealDetails.strIngredient7}</span>:""}
     {mealDetails.strIngredient8!=""?<span>{mealDetails.strMeasure8+"  "+mealDetails.strIngredient8}</span>:""}
     {mealDetails.strIngredient9!=""?<span>{mealDetails.strMeasure9+"  "+mealDetails.strIngredient9}</span>:""}
     {mealDetails.strIngredient10!=""?<span>{mealDetails.strMeasure10+"  "+mealDetails.strIngredient10}</span>:""}
     {mealDetails.strIngredient11!=""?<span>{mealDetails.strMeasure11+"  "+mealDetails.strIngredient11}</span>:""}
     {mealDetails.strIngredient12!=""?<span>{mealDetails.strMeasure12+"  "+mealDetails.strIngredient12}</span>:""}
     {mealDetails.strIngredient13!=""?<span>{mealDetails.strMeasure13+"  "+mealDetails.strIngredient13}</span>:""}
     {mealDetails.strIngredient14!=""?<span>{mealDetails.strMeasure14+"  "+mealDetails.strIngredient14}</span>:""}
     {mealDetails.strIngredient15!=""?<span>{mealDetails.strMeasure15+"  "+mealDetails.strIngredient15}</span>:""}
     {mealDetails.strIngredient16!=""?<span>{mealDetails.strMeasure16+"  "+mealDetails.strIngredient16}</span>:""}
     {mealDetails.strIngredient17!=""?<span>{mealDetails.strMeasure17+"  "+mealDetails.strIngredient17}</span>:""}
     {mealDetails.strIngredient18!=""?<span>{mealDetails.strMeasure18+"  "+mealDetails.strIngredient18}</span>:""}
     {mealDetails.strIngredient19!=""?<span>{mealDetails.strMeasure19+"  "+mealDetails.strIngredient19}</span>:""}
     {mealDetails.strIngredient20!=""?<span>{mealDetails.strMeasure20+"  "+mealDetails.strIngredient20}</span>:""}
    </div>
    </div>
    <ul className='mt-2'>
   
      <li className='d-flex align-items-center p-2'>
      <i className="fa-solid fa-object-group me-2 fs-3 icon p-2"></i>
        <span className='fs-5 d-block'>Category : {mealDetails.strCategory}</span></li>
   <li className='d-flex align-items-center p-2'> 
   <i className="fa-solid fa-chart-area me-2 fs-3 icon p-2"></i>
     <span className='fs-5 d-block'>Area : {mealDetails.strArea}</span>
     </li>
   <li className='d-flex align-items-center p-2'> 

   <i className="fa-brands fa-youtube me-2 fs-3 icon p-2"></i>
  <a target='_blank' className='youtube-link' href={mealDetails.strYoutube}>Youtube vedio</a>
     </li>
   <li className='d-flex align-items-center p-2'> 
   <i className="fa-solid fa-file me-2 fs-3 icon p-2"></i>
  <a target='_blank' className='youtube-link' href={mealDetails.strSource}>Source</a>
     </li>
    </ul>

  
  </div>
</div>


</div>
  
  <div>

  <div>

 
  </div>
  </div>
  </>:<div className='vh-100 loading-screen '>
  <div>
  <div class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>
  </div>
  </div>}
  
  </>
}
