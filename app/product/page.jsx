"use client";
import React from "react";
import Navbar from '@/app/components/ui/Navbar'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from "next/navigation";
import { use } from "react";
import ProductList from "./ProductList";
import Spotlight from "@/app/components/ui/spotlight-new";
import Footer from "@/app/components/Footer";

const page = () => {
    const params = useSearchParams(); // Mengambil params dari URL
    const category = params.get('category'); // Mengambil nilai category dari params
    console.log(category);
   
    
  return (
    <div className='bg-black mx-auto relative px-5 sm:px-10 flex justify-center items-center flex-col overflow-hidden'>
        
        <div className="max-w-7xl w-full relative min-h-screen">
          <Spotlight/>
            <ProductList category={category} className="py-9"/>
            <Navbar/>
            <Footer/>
        </div>
   
    </div>
  )
}

export default page
