import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidateData} from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        //Validate the form data
       
        console.log(email.current.value) 
        console.log(password )
        const message = checkValidateData(email.current.value, password.current.value, name.current.value)
        console.log(message)
        setErrorMessage(message)

        //Sign / Sign Up
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='' />
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
                {!isSignInForm &&(<input type='text' ref={name} placeholder='Full Name' className='p-4 my-4 w-full  bg-gray-700' />)}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full  bg-gray-700' />     
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'  />
                <p className='text-red-500 font-bold text-lg py-2' >{errorMessage}</p>
                <button  className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
                <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now" }</p>
                
            </form>
        </div>
    )
}

export default Login
