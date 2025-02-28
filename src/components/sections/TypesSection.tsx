import React, { ReactNode } from 'react'
import Image from 'next/image'
import { handleDate } from '@/app/functions/handleDate'
import Button from '../Button'

const TypesSection = () => {

    interface CircleCountDownComponent {
        label:string,
        date:ReactNode
      }

      let date =handleDate();
      
      const CircleCountDownComponent : React.FC<CircleCountDownComponent>= ({label, date}) => {
        return (
          <div className=" mx-3 flex flex-col justify-start items-center w-[70px] h-[70px] bg-white rounded-full">
            <strong className=" mt-3 text-black">{label}</strong>
            <p className=" text-sm -mt-1 text-black">{date}</p>
        </div>
        )
      }

      
  return (
    <div className=" w-[80vw] mb-20 h-[75vh] relative">
      <Image alt="product-image" sizes="100vw" src="/imgs/placeholder.png" width={0} height={0} className="w-full h-full" />
        <div className=" absolute flex flex-row items-center justify-start  left-10 text-white top-[55%]">

        <CircleCountDownComponent label="Houres" date={date?.getDay()} />
        <CircleCountDownComponent label="Minutes" date={date?.getHours()} />
        <CircleCountDownComponent label="Seconds" date={date?.getSeconds()} />

        </div>
        <div className=" left-10 bottom-14 absolute">
          <Button color="#00FF66"  placeholder="buy now" />
        </div>
    </div>  )
}

export default TypesSection