import React, { useContext ,useRef,useEffect} from 'react'
import { mealsContext } from '../../Context/mealsContext'

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default function Ingredients() {

 let {ingredients} = useContext(mealsContext)
  return <>
     <Helmet>
               
               <title>Ingredients</title>
              
           </Helmet>
  {ingredients?<div className='row'>
{ingredients.map((ingredient,i)=> <div key={i} className='col-sm-6 col-md-4 col-lg-3 col-xl-3 animate__animated animate__backInUp'>
<Link to={`/ingredientmeals/${ingredient.strIngredient}`}>
<div className='ingredient text-center mb-5'>
<i className="fa-solid fa-bacon global-icon"></i>
<h4 className=' text-center h5 mt-3'>{ingredient.strIngredient}</h4>
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
