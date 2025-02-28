"use client"

import React, { useEffect, useRef, RefObject } from 'react'
import ProductCard from '@/components/ProductCard'


const page = () => {


      

  return (
    <div className=' w-10/12 m-auto  h-full'>
        <div className='mt-10'>
            <div className=' flex flex-row justify-between items-center'>
                <div className=' flex flex-row'>
                    <h4>wishlist</h4>
                    <h4>(04)</h4>
                </div>
                <button className=' w-2/12 rounded h-12 border-solid border-black border-2 text-black'>
                    Move all to bag
                </button>
            </div>

            <div  className=' flex flex-row  overflow-auto w-full'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> 
            </div>
        <div className=" mt-10 flex flex-row item-start justify-between w-full h-28">
            <div className=' flex flex-row items-center justify-start'>
                <div className="w-10 h-14 bg-red-500 rounded"></div>
                <h2 className="  ml-3 text-center font-bold text-black">Just For You</h2>
            </div>
            <button className='border-solid my-auto border-black border-2 w-[10%] h-12 rounded px-2 py-2 '>See All</button>
        </div>
        <div  className=' flex flex-row  overflow-auto w-full'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> 
        </div>
        </div>
    </div>
  )
}

export default page