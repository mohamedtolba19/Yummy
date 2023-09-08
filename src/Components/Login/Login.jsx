import { Formik, useFormik, yupToFormErrors } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from "yup";
import { authContext } from '../../Context/authcontext';
import { useNavigate } from 'react-router-dom';
import toast  from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Login() {
   
    
    const [errorList, setErrorList] = useState(null);
    const [isLoading, setIsloading] = useState(false);
   let navigate =  useNavigate();
 let {loginUser , getUserData , userData,setIsLogin} = useContext(authContext)
    let validationSchema = Yup.object({
     
       email:Yup.string().email().required("email is required"),
       password:Yup.string().required("password is required").min(6 , "password minlwngth is 6").max(20, "password maxLength is 20 ")
    })
   

    async function handleLogin(values)
    {
        setIsloading(true)
       let response =  await loginUser(values);
     if(response.data)
     {
        setIsloading(false)
        if(response.data.message == "success")
        {
            localStorage.setItem("userToken" , response.data.token)
           await getUserData()
            setErrorList(null)
             setIsLogin(true)
              navigate("/")

        }
        else
        {
            if(response.data.errorList)
            {
                setErrorList(response.data.errorList)

                
            }
            else
            {
              toast.error("incorrect email or password")
              setErrorList(null)
               
            }

        }

     }
     else
     {
        setIsloading(false)
       toast.error(response.message)
     }
    }
   let formik =  useFormik({
        initialValues:{
      
            email : "" ,
            password :"" 
        },
        validationSchema,
        onSubmit:handleLogin

    })

  return <>
    <Helmet>
               
               <title>Login</title>
              
           </Helmet>
  <div className="row">

    <div className="col-md-4 py-lg-5 py-md-4 py-sm-3 py-2 ">
<div>
    <h1>Login Now </h1>
    <p>Get all information about meals and descriptipon of how to do it and all instruction  sign up Now  </p>
</div>
    </div>
    <div className="col-md-8 ">
<form  className='w-100' onSubmit={formik.handleSubmit} onBlur={formik.handleBlur} >
    <label className='mt-3' htmlFor="email">Email : </label>
    <input className='form-control' onChange={formik.handleChange} value={formik.values.email} type="email"  name='email' id='email'/>
    {formik.errors.email&& formik.touched.email?<div className='alert '>{formik.errors.email}</div>:null}
    
    {errorList&&!formik.errors.email?errorList.map((error)=>error.includes("email")?<div>{error}</div>:null ):null}
    <label className='mt-3' htmlFor="password">Password : </label>
    <input className='form-control' onChange={formik.handleChange} value={formik.values.password} type="password"  name='password' id='password'/>
    {formik.errors.password&& formik.touched.password?<div className='alert '>{formik.errors.password}</div>:null}
    
    {errorList&&!formik.errors.password?errorList.map((error)=>error.includes("password")?<div>{error}</div>:null ):null}
{isLoading?<button className='btn btn-submit my-3 fw-bold btn-sm'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled ={!formik.isValid || !formik.dirty} type='submit' className='btn btn-submit my-3 fw-bold btn-sm'>Log in</button>}

</form>
    </div>
  </div>
  

  
  
  </>
}
