"use client";

import React, { Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/app/components/ui/Navbar";
import Spotlight from "@/app/components/ui/spotlight-new";
import Footer from "@/app/components/Footer";

const ProductList = dynamic(() => import("./ProductList"), { suspense: true });

const Page = () => {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category");

  useEffect(() => {
    if (!category) {
      router.replace("/"); // Redirect ke homepage atau halaman lain
    }
  }, [category, router]);

  if (!category) {
    return null; // Hindari render halaman sebelum redirect
  }

  return (
    <div className="bg-black mx-auto relative px-5 sm:px-10 flex justify-center items-center flex-col overflow-hidden">
      <div className="max-w-7xl w-full relative min-h-screen">
        <Navbar />
        <Spotlight />
        <Suspense fallback={<p className="text-white">Loading products...</p>}>
          <ProductList category={category} className="py-9" />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
