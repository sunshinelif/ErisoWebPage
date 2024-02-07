"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

export default function ProductLayout({ children }) {

  const paths = usePathname()
  const pathNames = paths.split('/').filter( path => path )
  const slug = pathNames.slice(-1)[0];
  const products = [
    { id: 1, slug: 'steel', name: 'Steel' },
    { id: 2, slug: 'copper', name: 'Copper' },
    { id: 3, slug: 'pv-solar', name: 'PV Solar' },
    { id: 4, slug: 'aluminum', name: 'Aluminum' },
    { id: 5, slug: 'hvac', name: 'HVAC' },
    { id: 6, slug: 'engineering', name: 'Engineering' },
  ];

  const getCurrentProductIndex = () => {
    return products.findIndex((product) => product.slug == slug);
  };


  const getNextProduct = () => {
    const currentIndex = getCurrentProductIndex();
    const nextIndex = (currentIndex + 1) % products.length;
    return products[nextIndex];
  };

  const getPreviousProduct = () => {
    const currentIndex = getCurrentProductIndex();
    const previousIndex = (currentIndex - 1 + products.length) % products.length;
    return products[previousIndex];
  }
  const currentProduct = products.find((product) => product.slug === slug);
  const isFirstProduct = getCurrentProductIndex() === 0;
  const isLastProduct = getCurrentProductIndex() === products.length - 1;

  return (
    <>
      <header className='pt-28'>
        <div className=' bg-secondary-150 py-8'>
        <div className='w-full max-container relative justify-center flex items-center'>
          {
            pathNames.length > 1 && (
              <Link href='/products' className="absolute left-4 flex items-center gap-x-3">
                 <HiArrowLongLeft className="text-4xl text-white"/>
                <span className="text-white text-xl font-medium uppercase hidden sm:block">Products</span>
              </Link>
            )
          }
          <h2 className='text-white text-2xl sm:text-3xl uppercase font-medium'>{currentProduct ? currentProduct.name : "Products"}</h2>
        </div>
      </div>
      </header>
      <section className="py-12">
        <div className="max-container">
        {children}
        </div>
      </section>
      {
        pathNames.length > 1 &&(
          <nav className=" bg-slate-300 h-28">
            <div className="w-full h-full max-container flex items-center">
              <div className="w-full flex justify-start"> 
                {isFirstProduct != true && (
                  <Link className="flex text-gray-900 gap-x-4 text-xl sm:text-2xl md:text-3xl " href={getPreviousProduct().slug}>
                    <HiArrowLongLeft className="text-xl sm:text-3xl md:text-5xl"/>
                    <span className="font-medium">{getPreviousProduct().name}</span>
                  </Link>
                )
                }
              </div>
              <div className="w-full flex justify-end">
                {isLastProduct != true && (
                  <Link className="flex text-gray-900 gap-x-4 text-xl sm:text-2xl md:text-3xl" href={getNextProduct().slug}>
                    <span className="font-medium">{getNextProduct().name}</span>
                    <HiArrowLongRight className="text-2xl sm:text-3xl md:text-5xl"/>
                  </Link>
                )}
              </div>
            </div>
         </nav>
        )
      }
    </>
  )
}