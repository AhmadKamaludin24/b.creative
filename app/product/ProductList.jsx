"use client";
import React, { Suspense } from "react";
import Navbar from '@/app/components/ui/Navbar'
import { useEffect, useState } from 'react'
import { Dialog } from "@headlessui/react";

const ProductList = ({category}) => {
    const [products, setProducts] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleClick = (product) => {
        if (category === 'comercial-video' && product.videoUrl) {
            window.location.href = product.videoUrl;
            setSelectedImage(null);
            return;
        }
        setSelectedImage(product.thumbnail);
    }

    useEffect(() => {
      const allProducts = [
        {
            category: '3d-architectural',
            title: '3D Architectural',
            data: [
                {
                    id: 1,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972493/bughats-assets/img/service/3darsitektur/clfoq9ustpv8hkqvbdmo.png",
                },
                {
                    id: 2,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972469/bughats-assets/img/service/3darsitektur/mtajkr4wgwrhuber0jss.jpg",
                },
                {
                    id: 3,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972466/bughats-assets/img/service/3darsitektur/m2ok7o34uacvgpzwmgjs.jpg",
                },
                {
                    id: 4,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972466/bughats-assets/img/service/3darsitektur/oledpjikbtzwvjlotpe2.jpg",
                },
                {
                    id: 5,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972464/bughats-assets/img/service/3darsitektur/einokfmax1oa0up0prxx.jpg",
                },
                {
                    id: 6,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972463/bughats-assets/img/service/3darsitektur/pceglxlmprnxfc86dwo4.jpg",
                },
                {
                    id: 7,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972463/bughats-assets/img/service/3darsitektur/rlkzx6pp1munfbddguzq.jpg",
                },
                {
                    id: 8,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735972462/bughats-assets/img/service/3darsitektur/wbvmsio3sjk1q5q4bnwk.jpg",
                },
                {
                    id: 9,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735998217/bughats-assets/img/service/3darsitektur/t4yhkauieya9uyblxznd.jpg",
                },
                {
                    id: 10,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735998216/bughats-assets/img/service/3darsitektur/v4peaofozt9oyubt4t28.jpg",
                },
                {
                    id: 11,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735998216/bughats-assets/img/service/3darsitektur/pbipyjntzfngr1nspxrx.jpg",
                },
                {
                    id: 12,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735998215/bughats-assets/img/service/3darsitektur/ifcj7mv0fphwymzzaje7.jpg",
                },
                {
                    id: 13,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736004413/bughats-assets/img/service/3darsitektur/ooiq4s5zqdvhiysxplz6.jpg",
                },
                {
                    id: 14,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736004413/bughats-assets/img/service/3darsitektur/bmdmzbckxus3aq6tnlk2.jpg",
                },
                {
                    id: 15,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736004415/bughats-assets/img/service/3darsitektur/tadjaoik8fsftatmlefv.jpg",
                },
                {
                    id: 16,
                    title: "3D Architectural",
                    className: "md:col-span-2",
                    thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736005065/bughats-assets/img/service/3darsitektur/sldk0szjpjqzhl8psu2p.jpg",
                },
                
            ]
        },
        {
          category: 'social-media',
          title: 'Social Media Handling & Digital Marketing',
          data: [
              {
                  id: 1,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973253/bughats-assets/img/service/socialmedia/zwzmpghyhlqgyvbkjgtu.jpg",
              },
              {
                  id: 2,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973248/bughats-assets/img/service/socialmedia/islh52dqvxpvwgz49vrp.jpg",
              },
              {
                  id: 3,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973247/bughats-assets/img/service/socialmedia/yldizj86kespwbes1a8n.jpg",
              },
              {
                  id: 4,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973247/bughats-assets/img/service/socialmedia/cwjejaslik4t2gls6ih3.jpg",
              },
              {
                  id: 5,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/v8fkfubvhme6o5pgsvag.jpg",
              },
              {
                  id: 6,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/ehzqsg6tcmlmhqsjx52d.jpg",
              },
              {
                  id: 7,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973246/bughats-assets/img/service/socialmedia/npsofrei92ptnyzho82i.jpg",
              },
              {
                  id: 8,
                  title: "Social Media Handling",
                  className: "md:col-span-2",
                  thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973244/bughats-assets/img/service/socialmedia/i8i32mqjjwgky4sm12d9.jpg",
              },
          ]
      },
      {
        category: '3d-product',
        title: '3D Product & Art',
        data: [
            {
                id: 1,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973875/bughats-assets/img/service/3dproduct/kcviwiv4izwwfqpjrwhz.jpg",
            },
            {
                id: 2,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735973869/bughats-assets/img/service/3dproduct/trbsxrupmiobrg7j1lti.jpg",
            },
            {
                id: 3,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974704/bughats-assets/img/service/3dproduct/lrmwvqglwefaha2suut7.jpg",
            },
            {
                id: 4,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974654/bughats-assets/img/service/3dproduct/agaqvybg3krazroei4yg.jpg",
            },
            {
                id: 5,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974653/bughats-assets/img/service/3dproduct/agthkj8eaefuh7vjipqs.jpg",
            },
            {
                id: 6,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974646/bughats-assets/img/service/3dproduct/qnnvovvkydwdlyfvnaob.jpg",
            },
            {
                id: 7,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735974638/bughats-assets/img/service/3dproduct/ox9f6fiv8e0q15vkvthy.jpg",
            },
            {
                id: 8,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975028/bughats-assets/img/service/3dproduct/uwzc5fgc3pbo0xdbapss.jpg",
            },
            {
                id: 9,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975413/bughats-assets/img/service/3dproduct/ueyktmg44amyqmsxfbyo.png",
            },
            {
                id: 10,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975410/bughats-assets/img/service/3dproduct/rcwgmx9sqrrawbuautci.png",
            },
            {
                id: 11,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975409/bughats-assets/img/service/3dproduct/uqfgsjgrcfbho18marxi.png",
            },
            {
                id: 12,
                title: "3D Product & Art",
                className: "md:col-span-2",
                thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735975409/bughats-assets/img/service/3dproduct/l10iyt9vbrcqdqjmmn7j.png",
            },
        ]
    },
    {
      category: 'event',
      title: 'Event',
      data: [
          {
              id: 1,
              title: "Event",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976168/bughats-assets/img/service/event/w4odogxqfmgysfowvw6p.jpg",
          },
          {
              id: 2,
              title: "Event 2",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976168/bughats-assets/img/service/event/vpgpiav4jtpolgtikpe7.jpg",
          },
          {
              id: 3,
              title: "Event 3",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976167/bughats-assets/img/service/event/lwrnnw2btgjlyje5t8hz.jpg",
          },
          {
              id: 4,
              title: "Event 4",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976166/bughats-assets/img/service/event/jat5lw4qjw0kxounbmu6.jpg",
          },
          {
              id: 5,
              title: "Event 5",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976166/bughats-assets/img/service/event/rvzrdmayadzecilwmjxy.jpg",
          },
          {
              id: 6,
              title: "Event 6",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976165/bughats-assets/img/service/event/ycqxfd5y2xicsgqmehh2.jpg",
          },
          {
              id: 7,
              title: "Event 7",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976165/bughats-assets/img/service/event/ctgwoiztyfqhaoergf6w.jpg",
          },
          {
              id: 8,
              title: "Event 8",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976164/bughats-assets/img/service/event/iplnzr3yxxaq6yitpdee.jpg",
          },
          {
              id: 9,
              title: "Event 9",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976164/bughats-assets/img/service/event/ezq02srskphtiaymjjrx.jpg",
          },
          {
              id: 10,
              title: "Event 10",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/omcrgcnoanzj9kutwdey.jpg",
          },
          {
              id: 11,
              title: "Event 11",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/pnhqzz3p1zsbcgkdzuec.jpg",
          },
          {
              id: 12,
              title: "Event 12",
              className: "md:col-span-2",
              thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1735976162/bughats-assets/img/service/event/txabeqqookhf4bx1s41o.jpg",
          },
      ]
  },
  {
    category: 'comercial-video',
    title: 'Commercial Video & Company Profile',
    data: [
        {
            id: 1,
            title: "Commercial Video & Company Profile",
            className: "md:col-span-2",
            thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736002017/bughats-assets/img/service/videocomercil/njkao7tcdyyhaggdcljg.jpg",
            videoUrl: "https://youtu.be/7ckxwbSfM1o",
        },
        {
            id: 2,
            title: "Commercial Video & Company Profile",    
            className: "md:col-span-2",
            thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736002017/bughats-assets/img/service/videocomercil/rczdz36rkqgowei2vv4g.jpg",
            videoUrl: "https://youtu.be/yHYMcVVhFFI",
        },
        {
            id: 3,
            title: "Commercial Video & Company Profile",
            className: "md:col-span-2",
            thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736002064/bughats-assets/img/service/videocomercil/mwjteelzd28porln9lse.jpg",
            videoUrl: "https://youtu.be/vmKe2l5uq80?si=G76NTGEpW9XIeVzm",
        },
        {
            id: 4,
            title: "Commercial Video & Company Profile",
            className: "md:col-span-2",
            thumbnail: "https://res.cloudinary.com/dkfaedt7r/image/upload/v1736002777/bughats-assets/img/service/videocomercil/j7citqnevsgssrturnao.jpg",
            videoUrl: "https://youtu.be/Q9ocEkmlZ8Y",
        },
    ]
  }
    ];
    
        const filteredCategory = allProducts.find((item) => item.category === category);
        setProducts(filteredCategory ? filteredCategory.data : []);
        console.log(filteredCategory);
    }, [category])
    
    
  return (
    <>
   
    <h1 className="text-center pt-32 text-4xl font-bold text-white">{products.length > 0 ? products[0].title : "No Products Available"}</h1>
    <div className="mt-24 p-3 grid grid-cols-1 grid-rows-6 lg:grid-cols-6 lg:grid-rows-3 gap-5 ">
      
    {products.length > 0 ? (
      products.map((product) => (
        <div key={product.id} className={`relative overflow-hidden rounded-2xl col-span-1 row-span-1 p-2 lg:p-1 ${product.className}`}>
          <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
                  onClick={() => handleClick(product)}
                >
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"/>
                  </svg>

                </button>
              </div>
        </div>
      ))
    ) : (
      <p>Tidak ada produk tersedia untuk kategori ini.</p>
    )}
  </div>
  {/* Modal untuk menampilkan gambar full-size */}
  {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-[100]"
          onClick={() => setSelectedImage(null)} // Tutup saat klik di luar gambar
        >
          <div className="relative p-7" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full Image" className="max-w-full max-h-screen rounded-xl py-9" />
          </div>
        </div>
      )}
  
    
  </>
  )
}

export default ProductList
