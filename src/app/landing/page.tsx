"use client";

import React, { useRef, useState, useEffect, ReactNode, RefObject } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import CategorieCard from "@/components/CategorieCard";
import Button from "@/components/Button";
import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import DateComponent from "@/components/DateComponent"
import { SCROLL_AMOUNT_PER_DEVICES } from "@/constants/frontendConstants";
import { handleClick } from "../functions/handleClick";
import { handleDate } from "../functions/handleDate";
import ProductSection from "@/components/sections/ProductSection";
import ExploreSection from "@/components/sections/ExploreSection";
import InfoSection from "@/components/sections/InfoSection";
import BestSellingProduct from "@/components/sections/BestSellingProduct";
import Categorie from "@/components/sections/Categorie";
import TypesSection from "@/components/sections/TypesSection";
import Line from "@/components/Line";
import NewArrival from "@/components/sections/NewArrival";






const Landing = () => {


const [xDragPosition, setXDragPosition] = useState(0); // Stores the final image position
const productsSlideRef = useRef<HTMLDivElement | null>(null);


  let date = handleDate();






  /* setInterval(()=>{
  setXDragPosition((prev) => prev - 1000)
  console.log(xDragPosition)
  }, 3000) */

  return (
  <div className="flex w-screen flex-col justify-center items-center">

    <HeroSection key="HeroSection" />

    <ProductSection key="productSection" />

    <Line />

    <Categorie />

    <Line />

    <BestSellingProduct />

    <Line />

    {/* big pictures with product section with countdown */ }

    <TypesSection />


    <ExploreSection />

    {/* New Arrival */}

    <NewArrival />

    <InfoSection />

    {/* footer part */}

    <footer className=" w-full h-60 bg-black">

    </footer>

  </div>
  );
  };

  export default Landing;