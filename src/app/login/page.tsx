import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className=' w-screen grid place-content-center h-screen'>
        <div className='w-screen flex flex-row items-center justify-between h-[90vh]'>
            <div className='w-5/12 h-10/12'>
                <Image alt='login-image' width={0} height={0} sizes='100vw' className=' w-full h-full' src="/imgs/login-side-img.png" />
            </div>
            <div className=' w-5/12 h-10/12 flex flex-col justify-start items-centers'>
                <h1 className=' mb-4 text-3xl'>Log in to Exclusive</h1>
                <h3 className='mb-10 text-xl'>Enter your details below</h3>
                <input className=' w-1/2 outline-none mb-4 border-solid border-b-2 border-primary_border  p-2' placeholder='Email or phone number' />
                <input className=' w-1/2 outline-none mb-4 border-solid border-b-2 border-primary_border p-2' placeholder='password'  />
                <div className='flex flex-row justify-between items-center w-1/2'>
                    <button className=' w-5/12 text-white h-12 bg-[#DB4444] rounded  '>Login</button>
                    <Link className=' text-[#DB4444] ' href="/">Forget password ? </Link>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default page