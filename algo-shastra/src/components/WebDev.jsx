import React from 'react'
import { Link } from 'react-router-dom'
const products = [
  {
    id: 1,
    name: 'Html',
    href: '/test-course',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLBWyEV75SBEIkRXhQf2RbupVBafLrfFxgQ&s',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Frontend',
  },
  {
    id: 2,
    name: 'CSS',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkMYb955fj7IRiw-8g6gmn5GoZzKni1Kv8g&s',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Frontend',
    },
    {
      id: 3,
      name: 'Javascript',
      href: '#',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Frontend',
      },
      {
        id: 4,
        name: 'React Js',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5G8eECOD1PyiahPpMfAccK5bsb-iT5ozbw&s',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Frontend',
        },
        {
          id: 5,
          name: 'Node Js',
          href: '#',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-kEqMC76yTtKxyenYYk1fVcCHiT3hxDWVg&s',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Backend',
        },
        {
          id: 6,
          name: 'Express Js',
          href: '#',
          imageSrc: 'https://ih1.redbubble.net/image.438908244.6144/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Backend',
        },
      /*
  */
  // More products...
]

export default function WebDev() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} 
            className="group border border-black-2 p-3 shadow-lg relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

