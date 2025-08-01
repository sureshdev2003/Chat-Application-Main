import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {

  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  
  const onSubmitHandler=(event)=>{
     event.preventDefault();

     if(currState === 'Sign up' && !isDataSubmitted){
      setIsDataSubmitted(true)
      return;
     }
  }
  return (
    <div className='min-h-screen bg--cover bg-cover bg-center flex items-center justify-center
    gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* left */}
      <img src={assets.logo_big} className='w-[min(30vw,250px)]' alt="" />
      {/* right */}
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
        <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          {isDataSubmitted && <img onClick={()=>setIsDataSubmitted(false)} src={assets.arrow_icon} className='w-5 cursor-pointer' />}
          
        </h2>
{currState === "Sign up" && !isDataSubmitted && (
<input
  onChange={(e) => setFullName(e.target.value)}
  value={fullName}
  type="text"
  className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400'
  placeholder='Full Name'
  required
/>

)}

        {!isDataSubmitted && (
          <>
            <input onChange={(e) => setEmail(e.target.value)} value={email}
              type='email' placeholder='Email Address' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
            <input onChange={(e) => setPassword(e.target.value)} value={password}
              type='password' placeholder='Your Password' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required />
          </>
        )}
        {
          currState === "Sign up" && isDataSubmitted && (
            <textarea rows={4} onChange={(e) => setBio(e.target.value)} value={bio} row={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500
          ' placeholder='Provide Your Short Bio...' required>

            </textarea>
          )
        }
        <button type='submit' className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white
       rounded-md cursor-pointer'>
          {currState === "Sign up" ? "Create Account" : "Sign Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-500'>
          <input type='checkbox' />
          <p>Agree To The Terms Of Use & Privacy Poilcy</p>
        </div>
        <div className='flex flex-col gap-2'>
          {currState === "Sign up" ? (<p className='text-sm text-gray-600'>Already havean account?<span onClick={() => { setCurrState("Login"); setIsDataSubmitted(false) }} className='font-medium text-violet-500 cursor-pointer'>Login Here</span></p>
          ) : (<p className='text-sm text-gray-600'>Create an account <span onClick={() => { setCurrState("Sign up") }} className='font-medium text-violet-500 cursor-pointer'>Click Here</span></p>)}
        </div>
      </form>
    </div>
  )
}

export default LoginPage