import React from 'react'
import ProductCard from '../ProductCard'
import Button from '../Button'

const BestSellingProduct = () => {
  return (
    <div className=" flex flex-col justify-start items-center w-10/12 overflow-hidden mb-20 ml-2/12 h-full">
    <div className=" flex flex-row item-start justify-start w-full h-28">
        <div className="w-10 h-14 bg-red-500 rounded"></div>
        <h2 className=" mt-4 ml-3 font-bold text-red-500">This Month</h2>
    </div>
    <div className=" w-full h-24 flex flex-row items-center justify-between">
        <h1 className=" font-bold text-3xl ">Best Selling Products</h1>
        <Button color="#DB4444" placeholder="view all" />
    </div>
    <div className=" w-full flex overflow-hidden flex-row items-center justify-start h-96">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
</div>  )
}

export default BestSellingProduct