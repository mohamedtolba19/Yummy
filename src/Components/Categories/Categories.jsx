import React, { useContext ,useRef,useEffect} from 'react'
import { mealsContext } from '../../Context/mealsContext'
import Atropos from 'atropos/react';

import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
export default function Categories() {
  

 let {categories} =  useContext(mealsContext)
  return <>
   <Helmet>
               
                <title>Categories</title>
               
            </Helmet>
  {categories?<div className='row justify-content-center'>
    {categories.map((category,i)=><div key={i} className='col-sm-6 col-md-4 col-lg-3 col-xl-3'>
    <Link to = {`/categoryMeals/${category.strCategory}`}>
    <div className='category animate__animated animate__backInUp'>
      <Atropos className="my-atropos ">
      <img className='w-100 img' src={category.strCategoryThumb} alt="" />
    </Atropos>
        <h4 className='text-center mt-2  h6'>{category.strCategory}</h4>
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
