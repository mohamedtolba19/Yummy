import React, { useContext,useRef,useEffect } from 'react'
import { mealsContext } from '../../Context/mealsContext'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function Area() {
 

 let {area}  =  useContext(mealsContext)
  return <>
     <Helmet>
               
               <title>Area</title>
              
           </Helmet>
  {area?<div className='row'>
{area.map((area , i)=><div key={i} className='col-sm-6 col-md-4 col-lg-3 col-xl-3 animate__animated animate__backInUp'>
 <Link to={`/areaMeals/${area.strArea}`}>
 <div className='area text-center mb-5 '>
  <i className="fa-solid fa-globe global-icon"></i>
  <h4 className='h5'>{area.strArea}</h4>
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
