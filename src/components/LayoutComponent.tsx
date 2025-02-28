"use client"
import React from 'react'
import Image from 'next/image'

const LayoutComponent = () => {
    let accessToken = localStorage.getItem("accessToken")
    let refreshToken = localStorage.getItem("refreshToken")

  return (
    <div className=" flex flex-row justify-between items-center w-1/3">
    <input className=" px-4 py-2 bg-[#F5F5F5] " width={150} placeholder="What are you looking for ? " />
    <Image src="/icons/searsh.svg" alt="searsh-icon" height={32} width={32} />
    <Image src="/icons/cart.svg" alt="cart-icon" height={32} width={32} />
    <Image src="/icons/Wishlist.svg" alt="Wishlist-icon" height={32} width={32} />
    {accessToken && 
      <Image src="/icons/user.svg" alt="user-icon" height={32} width={32} />
    }
  </div>  )
}

export default LayoutComponent