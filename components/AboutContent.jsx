import React from 'react'
import Image from 'next/image'
import Title from '@/components/layout/ui/Title';

const AboutContent = () => {
  return (
    <div className='max-container'>
      <div className='flex md:flex-row flex-col w-full items-center pt-[170px] pb-16'>
        <div className=''>
          <Image src='/images/e-logo.png' alt='' className='' width={600} height={600}/>
        </div>
        <div className='max-w-[1000px] w-full'>
            <Title>
            <h4 className='text-black text-5xl mb-[10px]'>About Us</h4>
            </Title>
            <div className='justify-end items-start '>
            <p className='block block-start top-0  text-black'>
            Welcome to ERISO TRADING GROUP, a versatile industry leader breaking
             boundaries and delivering excellence since its inception. At ERISO, 
             we offer a diverse range of top-quality products and services to cater 
             to the unique needs of our global clientele. </p>
            <p className='block block-start top-0 mt-[20px] text-black'>
             Explore our extensive portfolio, including high-quality steel, cutting-edge
              aluminum and copper-based products, advanced PV solar products, state-of-the-art HVACR equipment,
              innovative software & IT solutions, and expert CAD-CNC engineering services. 
              As a forward-thinking & futuristic company, we transcend traditional industry limits.</p>
            <p className='block block-start top-0 mt-[20px] text-black'>
              Today, ERISO TRADING GROUP stands as your reliable one-stop solution provider, 
              committed to excellence in every aspect of your business. Whether you require 
              robust materials, sustainable energy solutions, advanced software & IT technology,
               or specialized engineering expertise, we are here to meet your diverse needs. </p>
            <p className='block block-start top-0 mt-[20px] text-black'>
               Join us on our journey as we continue to shape the future, providing integrated 
               solutions that adapt to the evolving demands of a dynamic global market. 
            </p>
            </div>
         </div>
      </div>
    </div>
  )
}

export default AboutContent