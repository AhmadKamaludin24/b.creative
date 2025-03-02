"use client";
import React from "react";
import Navbar from '@/app/components/ui/Navbar'
import { useEffect, useState } from 'react'
import { useParams } from "next/navigation";
import { use } from "react";
import ProductList from "./ProductList";
import Spotlight from "@/app/components/ui/spotlight-new";

const page = () => {
    const params = useParams(); // Mengambil params dari URL
    const category = params.category; // Menggunakan use() untuk unwrap Promise
   
    
  return (
    <div className='bg-black mx-auto relative px-5 sm:px-10 flex justify-center items-center flex-col overflow-hidden'>
        
        <div className="max-w-7xl w-full relative min-h-screen">
          <Spotlight/>
            <ProductList category={category} className="py-9"/>
            <Navbar/>
        </div>
   
    </div>
  )
}

export default page
