import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export let mealsContext  = createContext();

export default function MealsContextProvider(props)
{
  
  const [meals, setMeals] = useState(null)
  const [mealDetails, setMealDetails] = useState(null)
  const [categories, setCategories] = useState(null)
  const [categoryMeals, setCategoryMeals] = useState(null)
  const [area, setArea] = useState(null)
  const [areaMeals, setAreaMeals] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [ingredientMeals, setIngredientsMeals] = useState(null)
  const [searchMeals , setSearchMeals] = useState(null)  
  const [rondomMeal , setRondomMeal] = useState(null)  

  
   



     function getMeals()
    {
       axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`).then((response)=>
       setMeals(response.data.meals)
       ).catch((error)=>toast.error(error.message))
     

    }
 
   
    function getMealDetails(id)
    {
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response)=>
  {
    setMealDetails(response.data.meals[0])
 
  }
      ).catch((error)=>toast.error(error.message))
    }

    function getCategories()
    {
      axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((response)=>setCategories(response.data.categories)).catch((error)=>toast.error(error.message))
    }
    
    function getCategoryMeals(category)
    {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((response)=>setCategoryMeals(response.data.meals)).catch((error)=>toast.error(error.message))

    }
    function getArea()
    {
      axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`).then((response)=>setArea(response.data.meals)).catch((error)=>toast.error(error.message))
    }

     function getAreaMeals(area)
     {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then((response)=> setAreaMeals(response.data.meals)).catch((error)=>toast.error(error.message))
     }
     function getIngredients()
     {
      axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`).then((response)=>setIngredients(response.data.meals)).catch((error)=>toast.error(error.message))
     }
     function getIngredientMeals(ingredient)
     {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`).then((response)=>setIngredientsMeals(response.data.meals)).catch((error)=>toast(error.message))
     }
     function serachMeal(meal)
     {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`).then((response)=>setSearchMeals(response.data.meals)).catch(((error)=>toast.error(error.message)))
     }

     function getRondomMeal()
     {
      axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then((response)=>setRondomMeal(response.data.meals[0])).catch((error)=>toast.error(error.message))
     }
     
useEffect(()=>{
  getMeals();
  getCategories();
  getArea();
  getIngredients();
},[])

    return <mealsContext.Provider value={{getMeals,meals,getMealDetails,mealDetails,categories,getCategoryMeals,categoryMeals , area ,getAreaMeals ,areaMeals ,ingredients , getIngredientMeals , ingredientMeals,searchMeals , serachMeal,getRondomMeal,rondomMeal}}>

{props.children}
    </mealsContext.Provider>

}