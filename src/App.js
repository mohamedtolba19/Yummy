import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Register from "./Components/Register/Register"
import { Offline, Online } from "react-detect-offline";
import Categories from "./Components/Categories/Categories"
import Ingredients from "./Components/Ingredients/Ingredients"
import Area from "./Components/Area/Area"
import Login from './Components/Login/Login'
import AuthContextProvider from './Context/authcontext'
import  { Toaster, toast } from 'react-hot-toast';
import ProtextedRoute from './Components/ProtectedRoute/ProtectedRoute';
import MealsContextProvider from './Context/mealsContext'
import MealDetails from './Components/MealDetails/MealDetails'
import CategoryMeals from './Components/CategoryMeals/CategoryMeals'
import AreaMeals from './Components/AreaMeals/AreaMeals'
import IngredientMeals from './Components/IngredientMeals/IngredientMeals'
import Search from './Components/Serach/Search'
import RondomMeal from './Components/RondomMeal/RondomMeal'



export default function App() {

  let routers =    createHashRouter([
      {path:"" , element : <Layout/> , children:[
        {index:true , element : <ProtextedRoute><Home/></ProtextedRoute>},
        {path:"register" , element : <Register/>},
        {path:"login" , element : <Login/>},
        {path:"categories" , element :  <ProtextedRoute><Categories/></ProtextedRoute>},
        {path:"ingredients" , element :  <ProtextedRoute><Ingredients/></ProtextedRoute>},
        {path:"Area" , element : <ProtextedRoute><Area/></ProtextedRoute>},
        {path:"mealdetails/:id" , element : <ProtextedRoute><MealDetails/></ProtextedRoute>},
        {path:"categoryMeals/:category" , element : <ProtextedRoute><CategoryMeals/></ProtextedRoute>},
        {path:"areaMeals/:area" , element : <ProtextedRoute><AreaMeals/></ProtextedRoute>},
        {path:"ingredientmeals/:ingredient" , element : <ProtextedRoute><IngredientMeals/></ProtextedRoute>},
        {path:"search/:mealname" , element : <ProtextedRoute><Search/></ProtextedRoute>},
        {path:"rondommeal" , element : <ProtextedRoute><RondomMeal/></ProtextedRoute>},
      ]}
     ])
   

   return <AuthContextProvider>
    <Toaster/>
    <MealsContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    </MealsContextProvider>

   </AuthContextProvider> 

   

  
 
}