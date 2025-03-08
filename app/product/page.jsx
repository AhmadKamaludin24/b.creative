"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/app/components/ui/Navbar";
import Spotlight from "@/app/components/ui/spotlight-new";
import Footer from "@/app/components/Footer";

const ProductList = dynamic(() => import("./ProductList"), { suspense: true });

const PageContent = () => {
  const params = useSearchParams();
  const router = useRouter();
  const category = params.get("category");

  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (!category) {
      setIsRedirecting(true);
      router.replace("/"); // Redirect ke homepage jika category tidak ada
    }
  }, [category, router]);

  if (isRedirecting) {
    return <p className="text-white text-center mt-10">Redirecting...</p>;
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

const Page = () => {
  return (
    <Suspense fallback={<p className="text-white text-center mt-10">Loading...</p>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
