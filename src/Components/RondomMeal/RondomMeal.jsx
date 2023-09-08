import React, { useContext, useEffect,useRef } from 'react'
import { mealsContext } from '../../Context/mealsContext'

import Atropos from 'atropos/react';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function RondomMeal() {
  


 let {getRondomMeal,rondomMeal} =  useContext(mealsContext)

async function getYourMeal()
 {
 await getRondomMeal()
 if(rondomMeal)
 {
  toast.success(`Your Meal Today is ${rondomMeal.strMeal}`)
 }
 }
useEffect(()=>{
  getYourMeal()
},[])


return <>
   <Helmet>
               
               <title>Rondom Meal</title>
              
           </Helmet>
{rondomMeal?<>

  <div className='row meal '>

<div className="col-sm-6 col-md-4 col-lg-3 mb-4 animate__animated animate__backInLeft">
<div className="meal-cover">
<Atropos className="my-atropos">
<img className='w-100' src={rondomMeal.strMealThumb} alt="" />
</Atropos>

</div>
</div>
<div className="col-sm-6 col-md-8 col-lg-9 animate__animated animate__backInLeft">
<div className="meal-info">
  <h3>{`${rondomMeal.strMeal} ${rondomMeal.strTags}`}</h3>

  
  <div className='d-flex align-items-center p-2 '>
<i className="fa-solid fa-newspaper   me-2 fs-3 icon p-2"></i>
<h4>Instructions</h4>
</div>
  <p className='p-2'>{rondomMeal.strInstructions}</p>
  <div>
  <div className='d-flex align-items-center p-2 mb-3'>
<i className="fa-solid fa-weight-scale me-2 fs-3 icon p-2"></i>
<h4>Ingredients</h4>
</div>
<div className='ingredients'>
    {rondomMeal.strIngredient1!=""?<span >{rondomMeal.strMeasure1+"  "+rondomMeal.strIngredient1}</span>:""}
   {rondomMeal.strIngredient2!=""?<span>{rondomMeal.strMeasure2+"  "+rondomMeal.strIngredient2}</span>:""}
   {rondomMeal.strIngredient3!=""?<span>{rondomMeal.strMeasure3+"  "+rondomMeal.strIngredient3}</span>:""}
   {rondomMeal.strIngredient4!=""?<span>{rondomMeal.strMeasure4+"  "+rondomMeal.strIngredient4}</span>:""}
   {rondomMeal.strIngredient5!=""?<span>{rondomMeal.strMeasure5+"  "+rondomMeal.strIngredient5}</span>:""}
   {rondomMeal.strIngredient6!=""?<span>{rondomMeal.strMeasure6+"  "+rondomMeal.strIngredient6}</span>:""}
   {rondomMeal.strIngredient7!=""?<span>{rondomMeal.strMeasure7+"  "+rondomMeal.strIngredient7}</span>:""}
   {rondomMeal.strIngredient8!=""?<span>{rondomMeal.strMeasure8+"  "+rondomMeal.strIngredient8}</span>:""}
   {rondomMeal.strIngredient9!=""?<span>{rondomMeal.strMeasure9+"  "+rondomMeal.strIngredient9}</span>:""}
   {rondomMeal.strIngredient10!=""?<span>{rondomMeal.strMeasure10+"  "+rondomMeal.strIngredient10}</span>:""}
   {rondomMeal.strIngredient11!=""?<span>{rondomMeal.strMeasure11+"  "+rondomMeal.strIngredient11}</span>:""}
   {rondomMeal.strIngredient12!=""?<span>{rondomMeal.strMeasure12+"  "+rondomMeal.strIngredient12}</span>:""}
   {rondomMeal.strIngredient13!=""?<span>{rondomMeal.strMeasure13+"  "+rondomMeal.strIngredient13}</span>:""}
   {rondomMeal.strIngredient14!=""?<span>{rondomMeal.strMeasure14+"  "+rondomMeal.strIngredient14}</span>:""}
   {rondomMeal.strIngredient15!=""?<span>{rondomMeal.strMeasure15+"  "+rondomMeal.strIngredient15}</span>:""}
   {rondomMeal.strIngredient16!=""?<span>{rondomMeal.strMeasure16+"  "+rondomMeal.strIngredient16}</span>:""}
   {rondomMeal.strIngredient17!=""?<span>{rondomMeal.strMeasure17+"  "+rondomMeal.strIngredient17}</span>:""}
   {rondomMeal.strIngredient18!=""?<span>{rondomMeal.strMeasure18+"  "+rondomMeal.strIngredient18}</span>:""}
   {rondomMeal.strIngredient19!=""?<span>{rondomMeal.strMeasure19+"  "+rondomMeal.strIngredient19}</span>:""}
   {rondomMeal.strIngredient20!=""?<span>{rondomMeal.strMeasure20+"  "+rondomMeal.strIngredient20}</span>:""}
  </div>
  </div>
  <ul className='mt-2'>
 
    <li className='d-flex align-items-center p-2'>
    <i className="fa-solid fa-object-group me-2 fs-3 icon p-2"></i>
      <span className='fs-4 d-block'>Category : {rondomMeal.strCategory}</span></li>
 <li className='d-flex align-items-center p-2'> 
 <i className="fa-solid fa-chart-area me-2 fs-3 icon p-2"></i>
   <span className='fs-4 d-block'>Area : {rondomMeal.strArea}</span>
   </li>
 <li className='d-flex align-items-center p-2'> 

 <i className="fa-brands fa-youtube me-2 fs-3 icon p-2"></i>
<a target='_blank' className='youtube-link' href={rondomMeal.strYoutube}>Youtube vedio</a>
   </li>
 <li className='d-flex align-items-center p-2'> 
 <i className="fa-solid fa-file me-2 fs-3 icon p-2"></i>
<a target='_blank' className='youtube-link' href={rondomMeal.strSource}>Source</a>
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
