"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  return (
    <div className="pb-48 pt-24 bg-black text-white p-1 w-full">
    <div className="max-w-5xl mx-auto bg-gray-900 shadow-lg rounded-2xl p-6 sm:p-12">
      {/* Judul dan Deskripsi */}
      <h1 className="text-3xl font-bold text-white mb-4 text-center">
        Open Tenant - Ngabuburit Takjil 2025
      </h1>
      <p className="text-gray-300 text-center">
        Bergabunglah dalam event spesial Ramadan di <strong>Technomart-Galuhmas</strong>.  
        Acara ini berlangsung dari <strong>15 - 28</strong>, menghadirkan berbagai aktivitas seru  
        dan peluang bisnis yang menarik bagi para tenant.
      </p>

      <div className="mt-6">
        
        <div className="grid grid-cols-1 gap-4 mt-4">
          <img src="/headline/IMG-20250308-WA0011.jpg" alt="Design Open Tenant 1" className="rounded-lg shadow-md" />
          <div className="grid grid-cols-2 gap-2 mt-4">
          <img src="/headline/IMG-20250306-WA0020.jpg" alt="Design Open Tenant 2" className="rounded-lg shadow-md" />
          <img src="/headline/IMG-20250306-WA0022.jpg" alt="Design Open Tenant 3" className="rounded-lg shadow-md" />
          </div>
          
         
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-7 text-center">
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition" onClick={()=>router.push("https://wa.me/6281294963287")} >
          Daftar Sekarang
        </button>
      </div>


      {/* Artikel tentang Open Tenant */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-200">Tentang Open Tenant</h2>
        <p className="text-gray-400 mt-2">
          Open Tenant adalah kesempatan bagi para pelaku bisnis untuk mendapatkan stand  
          di event <strong>Ngabuburit Takjil</strong>. Event ini menjadi pusat kegiatan ngabuburit  
          dengan ribuan pengunjung setiap harinya, menghadirkan berbagai produk kuliner,  
          fashion, dan hiburan yang menarik.
        </p>
      </div>


      <div className="mt-6">
        <div className="grid grid-cols-1 rounded-md  gap-4">
          <img src="/headline/IMG-20250308-WA0008.jpg"  alt="" className="rounded-lg shadow-md " />
          <div className="grid grid-cols-2 gap-4">
            <img src="/headline/IMG-20250308-WA0014.jpg" alt="" className="rounded-lg shadow-md" />
            <img src="/headline/IMG-20250308-WA0015.jpg" alt="" className="rounded-lg shadow-md" />

          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-200">Event Highlights:</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2">
          <li>🍽️ <strong>Bazaar Kuliner</strong> – Sajikan makanan & takjil favorit.</li>
          <li>🎭 <strong>Cosplayer Performance</strong> – Karakter anime & tokusatsu.</li>
          <li>🎵 <strong>Live Music</strong> – Penampilan musisi lokal.</li>
          <li>💃 <strong>Traditional Dance Competition</strong> – Bakat tari daerah.</li>
          <li>🛍️ <strong>Clothing Market</strong> – Fashion bertema Ramadan.</li>
        </ul>
      </div>


      <div className="mt-6">
        
        <div className="grid grid-cols-1 gap-4 mt-4">
          <img src="/headline/IMG-20250308-WA0012.jpg" alt="Design Open Tenant 1" className="rounded-lg shadow-md" />
          {/* <div className="grid grid-cols-2 gap-2 mt-4">
          <img src="/headline/IMG-20250306-WA0020.jpg" alt="Design Open Tenant 2" className="rounded-lg shadow-md" />
          <img src="/headline/IMG-20250306-WA0022.jpg" alt="Design Open Tenant 3" className="rounded-lg shadow-md" />
          </div>
           */}
         
        </div>
      </div>

      {/* Dokumentasi Design Open Tenant */}
      
      
    </div>
  </div>
  )
}

export default page
