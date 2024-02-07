import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { id: 1, slug: 'steel', name: 'Steel', image: '/images/products/steel-product.jpg' },
  { id: 2, slug: 'copper', name: 'Copper', image: '/images/products/copper-product.jpg' },
  { id: 3, slug: 'pv-solar',  name: 'PV Solar', image: '/images/products/solar-product.jpg' },
  { id: 4, slug: 'aluminum', name: 'Aluminum', image: '/images/albgg.png' },
  { id: 5, slug: 'hvac', name: 'Hvacr', image: '/images/products/hvac-product.jpg' },
  { id: 6, slug: 'engineering',  name: 'Engineering', image: '/images/enginbgg.png' },
  
];

export default function Products() {

  return (
    <>
      <ul className=' gap-8 grid md:grid-cols-2 grid-col-1 '>
          {products.map((product) => (
            <li
              key={product.id}
              className='group cursor-pointer rounded-lg overflow-hidden transition-transform relative'
            >
              <Link className="flex relative h-[300px] w-full" href={`/products/${product.slug}`}>
                <Image
                    src={product.image}
                    alt={product.name}
                    className='absolute top-0 left-0 w-full object-cover h-full transition-transform hover:scale-105 group-hover:grayscale-0'
                    width={400}
                    height={100}
                  />
                  {product.id >= 1 && product.id <= 3 && (
                    <div className='absolute bottom-1 pl-8 pb-4 text-white font-bold text-[30px] bg-transparent'>
                      <span className='font-bold uppercase'>{product.name}</span>
                    </div>
                  )}
                  <div className='absolute bg-black w-full h-full center flex justify-center items-center top-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:bg-opacity-50 transition-opacity duration-300'>
                    <span className='text-white text-lg font-bold text-center'>
                      Click for more...
                    </span>
                  </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};