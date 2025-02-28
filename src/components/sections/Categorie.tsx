import React from 'react'
import CategorieCard from '../CategorieCard'
import Image from 'next/image'

const Categorie = () => {
  return (
    <div className=" flex flex-col justify-start items-center w-10/12 overflow-hidden mb-20 ml-2/12 h-full">
        <div className=" flex flex-row item-start justify-start w-full h-28">
            <div className="w-10 h-14 bg-red-500 rounded"></div>
            <h2 className=" mt-4 ml-3 font-bold text-red-500">Categories</h2>
        </div>
        <div className=" w-full h-24 flex flex-row items-center justify-between">
            <h1 className=" font-bold text-3xl ">Browse By Category</h1>
            <div className=" flex flex-row items-center justify-end">
                <div className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image alt="left-icon" width={24} height={24} src="/icons/arrow-left.svg" className="" />
                </div>
                <div className=" mx-2 cursor-pointer w-10 h-10 rounded-full bg-primary_border grid place-content-center">
                    <Image alt="right-icon" width={24} height={24} src="/icons/arrow-right.svg" className="" />
                </div>
            </div>
        </div>
        <div className=" w-full flex flex-row items-center justify-start h-96">
            <CategorieCard />
            <CategorieCard />
        </div>
    </div>  )
}

export default Categorie