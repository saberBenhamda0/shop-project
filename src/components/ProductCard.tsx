"use client"
import React from 'react'
import Image from 'next/image'
import {useRef, useState, useEffect} from 'react'

const ProductCard = () => {

    const cardRef = useRef< HTMLDivElement | null>(null);
    const [isHover, setIsHover] = useState<boolean>(false);



    useEffect(() => {
        let card = cardRef.current;

        const handleHover = () => {
            if(!card)
                return;
            setIsHover(true)
        }
    
        const handleNotHover = () => {
            if(!card)
                return;
            setIsHover(false)
        }

    
        card?.addEventListener("mouseenter", handleHover);
        card?.addEventListener("mouseleave", handleNotHover);    
      return () => {
        card?.removeEventListener("mouseenter", handleHover);
        card?.removeEventListener("mouseleave", handleNotHover);
          }
    }, [isHover])
    
    

  return (
    <div ref={cardRef} className="  cursor-pointer w-[300px] m-4 h-full ">
    <div className=" relative w-[280px] h-[250px]  grid place-content-center bg-[#F5F5F5]">
        <Image alt="product-placeholder" className=" w-full h-full" width={0} sizes="80vw" height={0} src="/icons/placeholder.png" />
        <div style={{ opacity: isHover ? 1 :0}} className='absolute transition-opacity duration-200 flex flex-col items-center justify-center h-14 bottom-0  w-full bg-black'>
            <h1 className=' text-white text-xl w-full h-full font-bold'>Add to Card</h1>
        </div>

        <div></div>
        <div className=" w-10 right-3 top-3 h-10 absolute  grid place-content-center rounded-full bg-primary_border">
            <Image src="/icons/heart.svg" className=" w-full h-full" alt="heart-icon" height={0} sizes="100vw" width={0} />
        </div>
        <div className=" absolute right-3 top-16 w-10 h-10 rounded-full grid place-content-center bg-primary_border">
            <Image src="/icons/eye.svg" className=" w-full h-full " alt="eye-icon" height={0} sizes="100vw" width={0} />
        </div>
    </div>
    <div>
        <h3 className=" text-xl">HAVIT HV-G92 Gamepad</h3>
        <div className=" flex flex-row justify-start items-center">
            <strong className=" text-red-500 mr-4 ">$120</strong>
            <span className=" text-[#7D8184]">$160</span>
        </div>
        <div className=" flex flex-row justify-start items-center">
            <select>
                <option></option>
            </select>
            <p className=" text-[#7D8184]">(88)</p>
        </div>
    </div>
</div>  )
}

export default ProductCard