import React, { ReactNode } from 'react'


interface ProductCardInterface {
    type:string,
    value:ReactNode
  }

const ProductCardWithHoverAnimation: React.FC<ProductCardInterface> = ({type, value}) => {

        return (
            <div className=" flex flex-row items-center justify-between">
            <div className=" flex flex-col items-start justify-center">
                <h5 className=" text-2xl"> {type}</h5>
                <h1 className=" text-3xl font-bold">{value}</h1>
            </div>
            <h1 className=" text-red-500 font-bold text-4xl mx-5"> : </h1>
        </div>
        )
      }  


export default ProductCardWithHoverAnimation