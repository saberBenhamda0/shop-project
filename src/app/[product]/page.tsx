"use client"
import React from 'react'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'

const ProductId = () => {
    const [counter, setCounter] = useState<number>(1);
  return (
    <div className='h-full w-screen grid place-content-center'>
        <div className='     flex flex-col justify-start items-start w-[90vw] h-full '>
            <div className=' gap-2 flex flex-row my-8 justify-start items-center'>
                <h4>Account</h4>
                <h4>/ </h4>
                <h3>Gaming</h3>
                <h4>/</h4>
                <h3>
                    havic mangeet bla
                </h3>
            </div>
            <div className='flex flex-row justify-between items-start w-full h-screen'>
                <div className=' w-2/12 h-full flex flex-col justify-between items-center '>
                    <div className=' h-[22%] w-full bg-[#F5F5F5] '>
                        <Image alt='product-image' src='/imgs/placeholder.png' className='w-full h-full' sizes='100vw' width={0} height={0} /> 
                    </div>
                    <div className=' h-[22%] w-full bg-[#F5F5F5] '>
                        <Image alt='product-image' src='/imgs/placeholder.png' className='w-full h-full' sizes='100vw' width={0} height={0} /> 
                    </div>
                    <div className=' h-[22%] w-full bg-[#F5F5F5] '>
                        <Image alt='product-image' src='/imgs/placeholder.png' className='w-full h-full' sizes='100vw' width={0} height={0} /> 
                    </div>
                    <div className=' h-[22%] w-full bg-[#F5F5F5] '>
                        <Image alt='product-image' src='/imgs/placeholder.png' className='w-full h-full' sizes='100vw' width={0} height={0} /> 
                    </div>
                </div>
                <div className='w-5/12 h-full bg-[#F5F5F5] '>
                    <Image alt='product-image' src='/imgs/placeholder.png' className='w-full h-full' sizes='100vw' width={0} height={0} /> 
                </div>
                <div className='w-4/12 gap-4 flex flex-col justify-start items-start h-full'>
                    <h1 className=' font-bold text-2xl'>Havic HV G-92 Gamepad</h1>
                    <div className=' flex gap-2 flex-row items-center justify-start'>
                        <h2>######</h2>
                        <p>(150 reviews)</p>
                        <p>|</p>
                        <p>In Stock</p>
                    </div>
                    <h1 className=' text-2xl'>
                        $192.00
                    </h1>
                    <p>
                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                    </p>

                    <div className=' w-full h-[1px] mt-6 bg-black opacity-50'>
                    </div>

                    <div className=' flex my-10 flex-row items-center justify-between w-full '>
                        <div className='flex flex-row items-center justify-start'>
                            <button onClick={()=>setCounter(Math.max(0 ,counter - 1))} className='w-6 h-6 border-[1px] border-solid border-black border-opacity-50'>-</button>
                                <div className='h-6 w-12 border-x-0 border-[1px] text-center border-solid border-black border-opacity-50'>{counter}</div>
                            <button onClick={()=>setCounter(counter + 1)} className='w-6 bg-[#DB4444] text-white h-6 border-[1px] border-solid border-black border-opacity-50'>+</button>
                        </div>
                        <button className='w-5/12 h-12 text-white bg-[#DB4444]'>Buy Now</button>
                        <button className=' w-8 h-8 border-solid border-[1px] border-primary_border'>@</button>
                    </div>
                    <div className='w-full flex flex-col items-center justify-start'>
                        <div className='w-full flex flex-row items-center justify-start h-20 rounded-t-md border-2 border-solid border-black '>
                            <div className='w-12 mx-4 h-12'>
                                <Image alt='Delivery-logo' src='/icons/cart.svg' height={0} width={0} sizes='100vw' className='w-full h-full' />
                            </div>
                            <div>
                                <h2>
                                Free Delivery
                                </h2>
                                <h2>
                                Enter your postal code for Delivery Availability
                                </h2>
                            </div>
                        </div>
                        <div className='w-full flex flex-row items-center justify-start h-20 rounded-b-md border-t-0 border-2 border-solid border-black '>
                            <div className='w-12 mx-4 h-12'>
                                <Image alt='Delivery-logo' src='/icons/cart.svg' height={0} width={0} sizes='100vw' className='w-full h-full' />
                            </div>
                            <div >
                                <h2>
                                Return Delivery
                                </h2>
                                <h2>
                                Free 30 Days Delivery Returns. Details
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-10 flex flex-row item-start justify-between w-full h-28">
            <div className=' flex flex-row items-center justify-start'>
                <div className="w-10 h-14 bg-red-500 rounded"></div>
                <h2 className="  ml-3 text-center font-bold text-red-500">Related Item</h2>
            </div>
        </div>
        <div  className=' flex flex-row w-full'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
        </div>
        </div>
    </div>
  )
}

export default ProductId