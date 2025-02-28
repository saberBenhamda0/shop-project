import React, { useRef, useEffect, useState} from 'react'
import Image from 'next/image'

const CategorieCard = () => {

    const CategorieCardRef = useRef<HTMLDivElement | null >(null);
    const [isHover, setIsHover] = useState<boolean>(false);
    const [svgColor, setSvgColor] = useState<string>("black");


    type categorieCardChildProps = {
        color:string
    }


    /* I THINK THE BEST APPROACH IS TO SAVE TWO VERSION OF THE SVG AND SERVE THE URL FROM THE BACKEND */ 
    const PhoneIcon : React.FC<categorieCardChildProps> = ({color}) => {
        return (
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_827_868)">
            <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M25.6667 7H31.1354" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M28 44.0052V44.0305" stroke={color} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke={color} stroke-width="2"/>
            </g>
            <defs>
            <clipPath id="clip0_827_868">
            <rect width="56" height="56" fill={color}/>
            </clipPath>
            </defs>
            </svg>

        )
    }

    useEffect(() => {
      let CategorieCard = CategorieCardRef.current;

        const handleHover = () => {
            if(!CategorieCard)
                return;
            setIsHover(true);
            setSvgColor("white")
        }

        const handleNotHover = () => {
            if(!CategorieCard)
                return;
            setIsHover(false);
            setSvgColor("black")
        }

        CategorieCard?.addEventListener("mouseenter", handleHover);
        CategorieCard?.addEventListener("mouseleave", handleNotHover);

      return () => {
        CategorieCard?.removeEventListener("mouseenter", handleHover);
        CategorieCard?.removeEventListener("mouseleave", handleNotHover);
      }
    }, [isHover])
    

  return (
    <div style={{backgroundColor: isHover ? "#DB4444" : "white" }} ref={CategorieCardRef} className=' transition-colors duration-100 flex flex-col items-center justify-start w-36 h-40 m-4 border-solid border-2 border-primary_border '>
        <div className=' w-2/6 mt-[25%] '>
            <PhoneIcon color={svgColor} />
        </div>
        <p style={{color: isHover ? "white" : "black" }} className=' mt-3'>
            Phones
        </p>
    </div>
  )
}

export default CategorieCard