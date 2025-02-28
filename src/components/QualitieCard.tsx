import Image from "next/image"

interface QualitiesCardProps {
    src:string
  }
  
  const QualitieCard : React.FC<QualitiesCardProps> = ({src})  => {
    return (
      <div className=" w-1/4 h-52 flex flex-col justify-start items-center">
  
      <div className=" w-16 h-16 flex flex-row items-center justify-center rounded-full bg-[#9fa1a3]">
          <div className=" w-12 h-12  flex flex-row items-center justify-center rounded-full bg-black">
            <Image alt="icon" height={0} width={0} sizes="100vw" className=" w-10/12 h-10/12" src={src} />
          </div>
      </div>
      <strong className=" mt-6 mb-2" >
        FREE AND FAST DELIVERY
      </strong>
      <p>
        Free delivery for all orders over $140
      </p>
  
    </div>
    )  
  }

  export default QualitieCard