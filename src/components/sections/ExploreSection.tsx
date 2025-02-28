"use client"
import React, { useRef } from 'react'
import Button from '../Button'
import ProductCard from '../ProductCard'
import Image from 'next/image'
import { handleClick } from '@/app/functions/handleClick'
import { SCROLL_AMOUNT_PER_DEVICES } from '@/constants/frontendConstants'

const ExploreSection = () => {
    const ExploreOurProjectsRef = useRef<HTMLDivElement| null>(null);

  return (
    <div className=" flex flex-col justify-start items-center w-11/12 overflow-hidden mb-20 ml-2/12 h-full">
        <div className=" flex flex-row item-start justify-start w-full h-28">
            <div className="w-10 h-14 bg-red-500 rounded"></div>
            <h2 className=" mt-4 ml-3 font-bold text-red-500">Our Products</h2>
        </div>
        <div className=" w-full h-24 flex flex-row items-center justify-between">
            <h1 className=" font-bold text-3xl ">Explore Our Products</h1>
            { /*<Button color="#DB4444" placeholder="View All products" /> */ }
            <div className=" flex flex-row items-center justify-end">
                <div onClick={() =>handleClick(SCROLL_AMOUNT_PER_DEVICES, "left", ExploreOurProjectsRef)} className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image alt="left-icon" width={24} height={24} src="/icons/arrow-left.svg" className="" />
                </div>
                <div onClick={() =>handleClick(SCROLL_AMOUNT_PER_DEVICES, "right", ExploreOurProjectsRef)} className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image  alt="right-icon" width={24} height={24} src="/icons/arrow-right.svg" className="" />
                </div>
            </div>
        </div>
        <div ref={ExploreOurProjectsRef}  className=" w-full flex items-center justify-start  overflow-hidden h-full">
          <div className=" w-full h-full shrink-0 flex flex-wrap items-center justify-start">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className=" w-full shrink-0 h-full flex flex-wrap items-center justify-start">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

        </div>
        <div className=" my-10">
          <Button color="#DB4444" placeholder="View All products" />
        </div>

    </div>  )
}

export default ExploreSection