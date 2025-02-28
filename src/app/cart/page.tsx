import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
const Cart = () => {

    const WishListProduct = () => {
        return (
            <div className=' flex shadow-sm h-24 border-[1px] border-solid border-primary_border w-full flex-row item-center justify-between'>
            <div className=' flex w-1/4 flex-row items-center justify-center'>
                <div className=' h-14 w-14 mr-4'>
                    <Image src="/imgs/placeholder.png" height={0} width={0} sizes="100vw" className=" w-full h-full" alt="product-image" />
                </div>
                <h5>LCD Monitor</h5>
            </div>
            <div className='  w-1/4 flex flex-row items-center justify-center'>
                <h4 >
                    800$
                </h4>
            </div>
            <div  className='  w-1/4 flex flex-row items-center justify-center'>
                <input className='border-primary_border border-solid border-2  outline-none' defaultValue="1" type='number' min="1" max="100"  />
            </div>
            <div className=' w-1/4 flex flex-row items-center justify-center'>
                <h4 >
                    800$
                </h4>
            </div>

        </div>
        )
    }
    
    const Button  = () =>{
        return (
            <button className='  px-6 w-1/6 text-black  rounded h-12 border-solid border-[1px] border-black border-opacity-50 '>
                return to Shop
            </button>
        )
    }


  return (
    <div className=' w-[90vw] h-fulll  m-auto flex flex-row items-center justify-center'>
        <div className=' flex flex-col justify-start items-start w-full  h-full '>
            <div className=' gap-2 flex flex-row my-8 justify-start items-center'>
                <h4>Home</h4>
                <h4>/ </h4>
                <h3>Cart</h3>
            </div>
            <div className=' mb-20 flex gap-5 flex-col justify-start items-center w-[90%] m-auto h-full'>
                <div className=' w-full flex h-16 border-solid border-[1px] border-primary_border shadow-sm flex-row justify-between items-center '>
                    <h5 className=' w-1/4 ml-4 text-center'>Product</h5>
                    <h5 className='w-1/4 text-center'>Price</h5>
                    <h5 className='w-1/4 text-center'>Quantite</h5>
                    <h5 className='w-1/4 text-center mr-4'>SubTotal</h5>
                </div>
                <WishListProduct />
                <WishListProduct />
                <div className=' w-full flex flex-row items-center justify-between h-16'>
                    <Button />
                    <Button />
                </div>
                <div className=' w-1/3 h-1/2 gap-4 border-solid border-[1px] border-black ml-auto flex flex-col justify-start items-center'>
                    <h2 className=' text-start w-10/12 font-bold my-3'>Cart total</h2>
                    <div className='flex w-10/12 flex-row justify-between items-center border-solid border-b-[1px] '>
                        <h5>sub total</h5>
                        <h5>1200$</h5>
                    </div>
                    <div className='flex w-10/12 flex-row justify-between items-center border-solid border-b-[1px] '>
                        <h5>sub total</h5>
                        <h5>1200$</h5>
                    </div>
                    <div className='flex w-10/12 flex-row justify-between items-center '>
                        <h5>sub total</h5>
                        <h5>1200$</h5>
                    </div>
                    <button className=' w-8/12 h-12 my-4 rounded text-white bg-[#DB4444] '>proccess to checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Cart