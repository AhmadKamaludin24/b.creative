"use client";
import React from "react";
import { useRouter } from "next/navigation";

export const LayoutGrid = ({ cards, height = "h-auto" }) => {
  console.log("LayoutGrid Cards Data:", cards);
  const router = useRouter();

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 ${height}`}>
      {cards.slice(0, 5).map((card, index) => {
        let gridClass = "col-span-1 row-span-1";

        if (index === 0) gridClass = "md:col-span-2 md:row-span-2";
        else if (index === 1) gridClass = "md:col-span-2 md:row-span-1";
        else if (index === 2) gridClass = "md:col-span-1 md:row-span-2";
        else gridClass = "md:col-span-1 md:row-span-1";

        return (
          <div key={card.id} className={`relative overflow-hidden rounded-2xl shadow-lg ${gridClass}`}>
            {/* Gambar */}
            <img src={card.thumbnail} alt={card.title || "Thumbnail"} className="w-full h-full object-cover rounded-xl" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold text-center px-3">{card.title || "No Title"}</h3>
              <button 
                className="mt-3 px-5 py-2 bg-white text-black rounded-lg shadow-md hover:bg-gray-300 text-base" 
                onClick={() => router.push(`/product?category=${card.category}`)}
              >
                Show More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
