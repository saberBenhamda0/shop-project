import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="w-[90vw] h-full flex flex-row justify-between items-center">
    {/* Sidebar */}
    <div className="w-2/12 h-screen border-solid border-primary_border border-r-[1px]">
      <ul>
        <li className="m-4">Woman’s Fashion</li>
        <li className="m-4">Men’s Fashion</li>
        <li className="m-4">Accessories</li>
        <li className="m-4">Shoes</li>
        <li className="m-4">Bags</li>
      </ul>
    </div>

    {/* Image Slider */}
    <div className="w-9/12 h-screen flex flex-row justify-center items-start mt-20">
      <div
        id="slider"
        className=" w-full h-full overflow-hidden relative "
      >
        <Image
          alt="banner"
          width={2000}
          height={1000}
          src="/imgs/placeholder.png"
          className="absolute transition-transform  duration-300"
 
        />
      </div>
    </div>
  </div>  )
}

export default HeroSection