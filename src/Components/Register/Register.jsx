import { Formik, useFormik, yupToFormErrors } from 'formik'
import React, { useContext, useState } from 'react'
import * as Yup from "yup";
import { authContext } from '../../Context/authcontext';
import { useNavigate } from 'react-router-dom';
import toast  from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Register() {
    const [errorList, setErrorList] = useState(null);
    const [isLoading, setIsloading] = useState(false);
   let navigate =  useNavigate();
 let {sendUserData} = useContext(authContext)
    let validationSchema = Yup.object({
       first_name:Yup.string().required("first_name is required").min(3 , "first_name minLength is 3").max(10, "first_name maxLength is 10") ,
       last_name:Yup.string().required("last_name is required").min(3 , "last_name minLength is 3").max(10, "last_name maxLength is 10") ,
       email:Yup.string().email().required("email is required"),
       age:Yup.number().required("age is required").min(16, "min age is 16").max(80, "max age is 80"),
       password:Yup.string().required("password is required").min(6 , "password minlwngth is 6").max(20, "password maxLength is 20 ")
    })
     
    async function handleRegister(values)
    {
        setIsloading(true)
       let response =  await sendUserData(values);
     if(response.data)
     {
        setIsloading(false)
        if(response.data.message == "success")
        {
            toast.success("signed up successfully")
          
            setErrorList(null)
            navigate("/login")

        }
        else
        {
            if(response.data.errorList)
            {
                setErrorList(response.data.errorList)
              

                
            }
            else
            {
                toast.error(response.data.message)
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
            first_name : "" ,
            last_name : "" ,
            email : "" ,
            age : "",
            password :"" 
        },
        validationSchema,
        onSubmit:handleRegister

    })

  return <>
   <Helmet>
               
               <title>Register</title>
              
           </Helmet>
  <div className="row  ">
    <div className="col-md-4 py-lg-5 py-md-4 py-sm-3 py-2  ">
    <div>
    <h1>Sign Up Now </h1>
    <p>Get all information about meals and descriptipon of how to do it and all instruction  sign up Now  </p>
</div>
    </div>
    <div className="col-md-8  ">
    <form  className='w-100' onSubmit={formik.handleSubmit} onBlur={formik.handleBlur} >
    <label className='mt-3' htmlFor="first_name">First Name : </label>
    <input className='form-control ' onChange={formik.handleChange} value={formik.values.first_name} type="text"  name='first_name' id='first_name'/>
    {formik.errors.first_name&& formik.touched.first_name?<div className='alert '>{formik.errors.first_name}</div>:null}
    {errorList?errorList.map((error)=>error.includes("first_name")?<div>{error}</div>:null ):null}

    <label className='mt-3' htmlFor="last_name">Last Name : </label>
    <input className='form-control ' onChange={formik.handleChange} value={formik.values.last_name} type="text"  name='last_name' id='last_name'/>
    {formik.errors.last_name&& formik.touched.last_name?<div className='alert '>{formik.errors.last_name}</div>:null}
    {errorList?errorList.map((error)=>error.includes("last_name")?<div>{error}</div>:null ):null}
    <label className='mt-3' htmlFor="email">Email : </label>
    <input className='form-control ' onChange={formik.handleChange} value={formik.values.email} type="email"  name='email' id='email'/>
    {formik.errors.email&& formik.touched.email?<div className='alert '>{formik.errors.email}</div>:null}
    {errorList?errorList.map((error)=>error.includes("email")?<div>{error}</div>:null ):null}
    <label className='mt-3' htmlFor="age">Age : </label>
    <input className='form-control ' onChange={formik.handleChange} value={formik.values.age} type="number"  name='age' id='age'/>
    {formik.errors.age&& formik.touched.age?<div className='alert '>{formik.errors.age}</div>:null}
    {errorList?errorList.map((error)=>error.includes("age")?<div>{error}</div>:null ):null}
    <label className='mt-3' htmlFor="password">Password : </label>
    <input className='form-control ' onChange={formik.handleChange} value={formik.values.password} type="password"  name='password' id='password'/>
    {formik.errors.password&& formik.touched.password?<div className='alert '>{formik.errors.password}</div>:null}
    {errorList?errorList.map((error)=>error.includes("password")?<div>{error}</div>:null ):null}
{isLoading?<button className='btn btn-submit my-3 fw-bold btn-sm'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled ={!formik.isValid || !formik.dirty} type='submit' className='btn btn-submit my-3 fw-bold btn-sm'>Sign Up</button>}

</form>
    </div>
  </div>
  
  
  </>
}
