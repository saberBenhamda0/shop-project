import React from 'react'
import QualitieCard from '../QualitieCard'

const InfoSection = () => {
    const iconArray :string[] = ["/icons/truck-icon-white.svg", "/icons/secure-icon-white.svg", "/icons/headphone-icon-white.svg"]

  return (

    <div className=" w-[90vw] h-full my-10 flex flex-row justify-around items-center">
      {iconArray.map((iconArray:string) => {
        return (
          <QualitieCard src={iconArray} />      
        )
      })}    
    </div>  )
}

export default InfoSection