import React from 'react'
import Link from 'next/link'
import { BsFileEarmarkPdf } from "react-icons/bs";
const CataloguesList = () => {
  return (
    <div className=''>
        <div>
                <h2 className='text-[30px] text-center bg-red-800 text-white'>PRODUCTS CATALOGUES</h2>
        </div>
             <div className='flex md:mt-3'>
        <Link href="https://etgcatalogue.s3.amazonaws.com/2024+Eriso+Softtware+Profile.pdf">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-800 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
SOFTWARE CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>

        <div  className='flex md:mt-3 md:ml-[]'>
        <Link href="https://etgcatalogue.s3.amazonaws.com/ETG+Steel+catalog.pdf">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-800 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
STEEL  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>

        <div  className='flex md:mt-3'>
        <Link href="">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-800 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
COPPER  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>
  
        <div  className='flex md:mt-3'>
        <Link href="">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-700 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
ALUMINUM  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>
        <div className='flex md:mt-3'>
        <Link href="https://etgcatalogue.s3.amazonaws.com/ETG+HVACR+Catalog.pdf">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-700 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
HVAC  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>

        <div  className='flex md:mt-3'>
        <Link href="https://etgcatalogue.s3.amazonaws.com/ETG+-+hydraulic+fittings+catalog.pdf">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-700 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
HYDRAULIC FITTINGS  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>
        <div  className='flex md:mt-3'>
        <Link href="https://etgcatalogue.s3.amazonaws.com/ETG+machining+and+metal+fab.+catalog.pdf">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-800 to-blue-700 group-hover:from-red-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
MACHINING & FABRICATION PRODUCT  CATALOGUE
</span>
<BsFileEarmarkPdf className='size-7'/>
</button>
</Link>
        </div>
    </div>
  )
}

export default CataloguesList