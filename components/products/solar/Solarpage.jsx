"use client"
import React from 'react'
import { GiSolarPower } from "react-icons/gi";
import Image from 'next/image'
import Link from 'next/link';

const Solarpage = () => {

 
  return (
    <div>
        <div className='mt-[0px]' style={{ background: 'url("/images/solar/sahne2.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%' }}>

        <Solarcell
        
        image="/images/solar/solar-cell.png"
        info ={['Application of thinner wafer',
           ' Higher cell conversion efficiency',
            'More energy in low light conditions']}
        title="Solar Cell"
        info2={['Better temperature coefficient',
            'Lower cell degradation',
            'Excellent mechanical characteristics']}
          
        />

<Encapsulant
        
        image="/images/solar/eva1.png"
        title="Encapsulant EVA"
     
      
        />

    <Glass
        
        image="/images/solar/glass2.png"
        title="Solar Glass"
    
      
        />
     
        <Ntype
        
        image="/images/solar/ntype.png"
        title="N-Type Module"
        info3 ={['Application of thinner wafer',
        ' Higher cell conversion efficiency',
         'More energy in low light conditions']}
         info4={['Better temperature coefficient',
         'Lower cell degradation',
         'Excellent mechanical characteristics']}
        

        />
         < Ptype
        
        image="/images/solar/ptype.png"
        title="P-Type Module"
        info3={['Increase power output, reduce BOS cost','Reduce current loss and hot spot risk','Reduce annual power degradation']}
        info4={['Reduce micro-crack risk and increase mechanical loading','Reduce power loss and effectively reduce module working temperature','Increase encapsulated cells and boost thinner wafer trend']}
    
        />
       
        </div>


    </div>
  )
}




const Solarcell = ({ image, info, title, info2 }) => ( 
  <div className="text-gray-600   mt-8 md:mt-0 flex flex-col items-center justify-center">
    <h2 className="font-bold text-3xl text-white">{title}</h2>
    <div className="flex flex-col md:flex-row mt-4 md:mt-6 items-center justify-center">
      <div className="text-center mb-4 md:mb-0">
        <ul className="text-left mt-2 md:mt-0 text-sm">
          {info.map((standard, index) => (
            <li key={index} className="flex items-center">
              <GiSolarPower className="text-orange-500 mr-2 md:mr-3" />
              {standard}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:ml-8">
        <Image src={image} width={200} height={100} className="mt-4 md:mt-0" />
        <Link href="https://etgcatalogue.s3.amazonaws.com/ETG+SOLAR+CELL.pdf">
          <button
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="mt-2 md:mt-0 text-gray-900 bg-orange-500 border border-orange-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 dark:bg-orange-500 dark:text-white dark:border-orange-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Click for more details
          </button>
        </Link>
      </div>
      <ul className="text-left mt-4 md:mt-0 ml-2 md:ml-7 text-sm">
        {info2.map((standard2, index) => (
          <li key={index} className="flex items-center sm:text-gray-600">
            <GiSolarPower className="text-orange-500 mr-2 md:mr-3" />
            {standard2}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const Encapsulant = ({ image, title }) => ( 
  <div className="text-gray-600 mt-8 md:mt-0 flex flex-col items-center justify-center">
    <h2 className="ml-4 md:ml-12 font-bold text-3xl text-left text-white">{title}</h2>
    <div className="md:flex ml-4 md:ml-[100px] mt-4 md:mt-6 md:mr-[50px] items-center justify-center">
      <div>
        <Image src={image} width={400} height={100} className="mt-4 md:mt-0 md:ml-[50px]" />
      </div>
      <div className="md:ml-[100px] mt-4">
        <table className="text-black md:w-[60%]  mx-auto p-4">
          <tbody>
            <tr className="border border-solid border-2 border-white text-center p-2 font-serif size-5">
              <td>FILM TYPE</td>
              <td>EVA, POE, PVB, EPE</td>
            </tr>
            <tr className="border border-solid border-2 border-white text-center p-2 font-serif size-5">
              <td>EVA TYPE</td>
              <td>High Transparent, High UV cuttof, White high Reflection, Anti-PID</td>
            </tr>
            <tr className="border border-solid border-2 border-white text-center p-2 font-serif size-5">
              <td>EVA thickness</td>
              <td>Base on customer demand. 0.35mm(280g), 0.45mm(3390g), 0.5mm(410g) 0.55mm(480g), 0.65mm(560g)...</td>
            </tr>
            <tr className="border border-solid border-2 border-white text-center p-2 font-serif size-5">
              <td>EVA feature</td>
              <td>Excellent weather resistance against high temperature, high humidity, ultraviolet... Good adhesion in between glass and different type of backfilm Low shrinkage to ensure component stability during lamination.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);



const Ntype = ({ image, title , info3, info4 }) => ( 
  <div className="text-gray-400 mt-8 md:mt-0 flex flex-col items-center justify-center">
    <h2 className="ml-4 md:ml-12 font-bold text-3xl text-left text-white ">{title}</h2>
    <div className="flex flex-col md:flex-row ml-4 md:ml-12 mt-4 md:mt-6 items-center justify-center">
      <div className="text-center md:ml-8 mb-4 md:mb-0">
        <ul className="text-left mt-2 md:mt-0 md:ml-2 text-sm">
      {info3.map((standard, index) => (
        <li key={index} className='flex '>
            <GiSolarPower className='text-orange-500 mr-[10px]  mr-2 md:mr-3' />
          {standard}
        </li>
      ))}
    </ul>
</div>
<div className="md:ml-8">
        <Image src={image} width={200} height={100} className="mt-4 md:mt-0" />
        <Link href="https://ntypesolarcatalogue.s3.amazonaws.com/ETG+N-TYPE+PV+SOLAR.pdf">
  <button
  target="_blank"
   rel="noopener noreferrer"
    type="button"
    className="ml-2 md:ml-4 mt-2 md:mt-0 text-center text-gray-900 bg-orange-500 border border-orange-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 dark:bg-orange-500 dark:text-white dark:border-orange-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  >
    Click for more details
  </button>
</Link>
</div>
        <ul className="text-left mt-4 md:mt-0 ml-2 md:ml-7 text-sm">
          {info4.map((standard2, index) => (
            <li key={index} className="flex items-center">
              <GiSolarPower className="text-orange-500 mr-2 md:mr-3" />
              {standard2}
            </li>
      ))}
    </ul>

</div>
</div>
);

const Glass = ({ image, title  }) => ( 
  <div className="text-gray-600 mt-8 md:mt-0 flex flex-col items-center justify-center">
    <h2  className="ml-4 md:ml-12 font-bold text-3xl text-left text-white ">{title}</h2>
    <div className="md:flex ml-2 md:ml-[50px] mt-4 md:mt-6 items-center justify-center">
   
<div className='md:ml-[60px]' >
<table className=' text-black md:w-[70%] md:h-[100px] sm:w-[90%] mx-auto p-4'>
<tbody className=''>
 
    <tr className='border border-solid border-2 border-black text-center  p-2 font-serif size-5'>
        <td >Glass TYPE</td>
        <td>High Transparent,
            High UV cuttof,
            White high Reflection,
            Anti-PID
        </td>

    </tr>
    <tr className='border border-solid border-2 border-black text-center  p-2 font-serif size-5'>
        <td >Glass form</td>
        <td>Raw, Tempered, AR coated, Back print, Hole drilling</td>
    </tr>
    <tr className='border border-solid border-2 border-black text-center  p-2 font-serif size-5'>
        <td >Glass thickness</td>
        <td>3.2mm, 2.0mm, 4.0mm, 2.5mm</td>
    </tr>
    <tr className='border border-solid border-2 border-black text-center  p-2 font-serif size-5'>
        <td >Applicable Size</td>
        <td>1298* 2500mm (210 cell) 
            1128* 2500mm (182 cell) 
            1033* 2500mm (166 cell) 
            996* 2500mm (158.75 cell) 
            986* 2500mm (156.75 cell)
        </td>
    </tr>
    <tr className='border border-solid border-2 border-black text-center  p-2 font-serif size-11'>
        <td >Transparency</td>
        <td>91.6% (No coated) 
            94.5% (AR coated)
        </td>
    </tr>
</tbody>
</table>
</div>
<div>
        <Image src={image} width={800} height={200} className="mt-4 md:mt-0 md:-ml-[200px]  sm:items-center" />
   
</div>
</div>
</div>
);

const Ptype = ({ image, title , info3, info4 }) => ( 
  <div className="text-gray-400 mt-8 md:mt-0 flex flex-col items-center justify-center">
    <h2 className="ml-4 md:ml-12 font-bold text-3xl text-left text-white ">{title}</h2>
    <div className="flex flex-col md:flex-row ml-4 md:ml-12 mt-4 md:mt-6 md:mb-7  items-center justify-center">
      <div className="text-center md:ml-8 mb-4 md:mb-0">
        <ul className="text-left mt-2 md:mt-0 md:ml-2 text-sm">
      {info3.map((standard, index) => (
        <li key={index} className='flex '>
            <GiSolarPower className='text-orange-500 mr-[10px]  mr-2 md:mr-3' />
          {standard}
        </li>
      ))}
    </ul>
</div>
<div className="md:ml-8">
        <Image src={image} width={200} height={100} className="mt-4 md:mt-0" />
        <Link href="https://ptypesolarcatalogue.s3.amazonaws.com/ETG+P-TYPE+PV+SOLAR+.pdf">
  <button
  target="_blank"
   rel="noopener noreferrer"
    type="button"
    className="md:mt-6 ml-2 md:ml-4 mt-4 md:mt-0 text-center text-gray-900 bg-orange-500 border border-orange-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2 dark:bg-orange-500 dark:text-white dark:border-orange-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
  >
    Click for more details
  </button>
</Link>

</div>
        <ul className="text-left mt-4 md:mt-0 ml-2 md:ml-3 text-sm">
          {info4.map((standard2, index) => (
            <li key={index} className="flex items-center">
              <GiSolarPower className="text-orange-500 mr-2 md:mr-2 md:mb-3" />
              {standard2}
            </li>
      ))}
    </ul>

</div>
</div>
);



export default Solarpage