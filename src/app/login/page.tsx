"use client"

import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { API_URL } from '@/constants/backendConstants'
import { useRouter } from 'next/navigation'

interface formDataProps {
    username:string,
    email:string,
    password:string
}


const page = () => {

    const [formData, setFormData] = useState<formDataProps>({
        username:"",
        email:"",
        password:""
    })

    const router = useRouter();

    const [error, setError] = useState("")


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:value
        }))
    }

    const handleSubmit = async () => {
        const response = await fetch( API_URL + "/auth/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(formData)

        }
            
        );
        const data = await response.json();

        if(response.status == 200) {
            localStorage.setItem("accessToken", data.accessToken)
            localStorage.setItem("refreshToken", data.refreshToken)
            
            router.push("/landing")
        }
        else {
            setError(data.response)
        }

    }


  return (
    <div className=' w-screen grid place-content-center h-screen'>
        <div className='w-screen flex flex-row items-center justify-between h-[90vh]'>
            <div className='w-5/12 h-10/12'>
                <Image alt='login-image' width={0} height={0} sizes='100vw' className=' w-full h-full' src="/imgs/login-side-img.png" />
            </div>
            <div className=' w-5/12 h-10/12 flex flex-col justify-start items-centers'>
                <h1 className=' mb-4 text-3xl'>Log in to Exclusive</h1>
                <h3 className='mb-10 text-xl'>Enter your details below</h3>
                <input onChange={handleChange} className=' w-1/2 outline-none mb-4 border-solid border-b-2 border-primary_border  p-2' name='username' placeholder='username' />
                <input onChange={handleChange} className=' w-1/2 outline-none mb-4 border-solid border-b-2 border-primary_border  p-2' name='email' placeholder='Email or phone number' />
                <input onChange={handleChange} className=' w-1/2 outline-none mb-4 border-solid border-b-2 border-primary_border p-2' name='password' placeholder='password'  />
                <div className='flex flex-row justify-between items-center w-1/2'>
                    <button onClick={handleSubmit} className=' w-5/12 text-white h-12 bg-[#DB4444] rounded  '>Login</button>
                    <Link className=' text-[#DB4444] ' href="/">Forget password ? </Link>
                </div>
                {error && <span className='text-red-500'>
                        {error}
                        </span>
                    }
            </div>
        </div>
    </div>  
    )
}

export default page