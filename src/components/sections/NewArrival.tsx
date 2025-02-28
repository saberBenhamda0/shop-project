import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ImageWithInfo = () => {
    return (
    <>
      <Image alt="product-page" src="/imgs/placeholder.png" width={0} height={0} sizes="100vw"
        className="w-full h-full" />
      <div className=" absolute left-[5%] bottom-0 w-full">
        <h1 className=" font-bold mb-[1%] text-white">PlayStations 22</h1>
        <p className=" w-1/2 mb-[1%] text-white">Black and White version of the PS5 coming out on sale.</p>
        <Link className=" underline text-white" href="/"> Shop now</Link>
      </div>
    </>
    )
    }

const NewArrival = () => {
  return (

    <div className="w-[90vw] h-full mb-10 flex flex-col justify-start items-start">
      <div className=" flex flex-row item-start justify-start w-full h-28">
        <div className="w-10 h-14 bg-red-500 rounded"></div>
        <h2 className=" mt-4 ml-3 font-bold text-red-500">Today's</h2>
      </div>
      <h1 className=" mb-10 font-bold text-black text-3xl ">Browse By Category</h1>
      <div className=" w-full flex flex-row items-start justify-between h-full">
        <div className="relative w-[48%] h-[90vh]">
          <ImageWithInfo />
        </div>
        <div className="  w-[48%] h-[90vh]">
          <div className=" relative w-full h-1/2">
            <ImageWithInfo />
          </div>

          <div className="w-full flex flex-row  h-1/2">
            <div className=" relative mt-4 mr-4 w-[48%]">
              <ImageWithInfo />
            </div>
            <div className= " relative ml-4 mt-4 w-[48%]">
              <ImageWithInfo />
            </div>
          </div>
        </div>
      </div>

    </div>  )
}

export default NewArrival