"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import DateComponent from '@/components/DateComponent'
import ProductCard from '@/components/ProductCard'
import { SCROLL_AMOUNT_PER_DEVICES } from "@/constants/frontendConstants";
import { handleClick } from '@/app/functions/handleClick'
import { handleDate } from '@/app/functions/handleDate'
import Button from '../Button'

const ProductSection = () => {

    const productsSlideRef = useRef<HTMLDivElement | null>(null);
    let date = handleDate();

  return (
    <div className=" flex flex-col justify-start items-center w-10/12 overflow-hidden mb-20 ml-2/12 h-full">
        <div className=" flex flex-row item-start justify-start w-full h-28">
            <div className="w-10 h-14 bg-red-500 rounded"></div>
            <h2 className=" mt-4 ml-3 font-bold text-red-500">Today's</h2>
        </div>
        <div className=" w-full h-24 flex flex-row items-center justify-between">
            <h1 className=" font-bold text-3xl ">Flash Sales</h1>
            <div className=" flex flex-row justify-start items-center w-1/2 h-full">
                <DateComponent type="Year" value={date?.getFullYear()} />
                <DateComponent type="Month" value={date?.getMonth()} />
                <DateComponent type="Minute" value={date?.getMinutes()} />
                <DateComponent type="Second" value={date?.getSeconds()} />
            </div>
            <div className=" flex flex-row items-center justify-end">
                <div onClick={() =>handleClick(SCROLL_AMOUNT_PER_DEVICES, "left", productsSlideRef)} className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image alt="left-icon" width={24} height={24} src="/icons/arrow-left.svg" className="" />
                </div>
                <div onClick={() =>handleClick(SCROLL_AMOUNT_PER_DEVICES, "right", productsSlideRef)} className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image  alt="right-icon" width={24} height={24} src="/icons/arrow-right.svg" className="" />
                </div>
            </div>
        </div>
        <div ref={productsSlideRef} className=" w-full flex overflow-hidden flex-row items-center justify-start h-96">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </div>

        <Button color="#DB4444" placeholder="View All products" />

    </div>  )
}

export default ProductSection