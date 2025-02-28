import { RefObject } from "react"

export const handleClick  = (amountToScroll:number, direction:string, divReference:RefObject<HTMLDivElement | null>) => {

    if(divReference?.current){
      if(direction === "left"){
        divReference?.current.scrollBy({
          behavior:"smooth",
          left:-amountToScroll
        })
      }
      if(direction === "right"){
        divReference?.current.scrollBy({
          behavior:"smooth",
          left:amountToScroll
        })
      }

    }
  }