import React from 'react'
import Header from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
const Solarglass = () => {
  return (
    <div>
        <Header/>

        <h2 className=' bg-red-800 text-white text-[40px] text-center'>Solar Glass</h2>
        <div className='flex ml-[150px] mb-[50px]'>
           
        <Image src='/images/solar/Solarglass.png' width={600} height ={200} />
            <div className='mt-[50px] ml-[50px]'>

<table className=' text-black w-[800px] h-auto'>
<tbody>
    <tr className=' border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >FILM TYPE</td>
        <td>EVA, POE, PVB, EPE</td>

    </tr>
    <tr className=' border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >Glass TYPE</td>
        <td>High Transparent,
            High UV cuttof,
            White high Reflection,
            Anti-PID
        </td>

    </tr>
    <tr className='border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >Glass form</td>
        <td>Raw, Tempered, AR coated, Back print, Hole drilling</td>
    </tr>
    <tr className='border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >Glass thickness</td>
        <td>3.2mm, 2.0mm, 4.0mm, 2.5mm</td>
    </tr>
    <tr className='border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >Applicable Size</td>
        <td>1298* 2500mm (210 cell) ,
            1128* 2500mm (182 cell),
            1033* 2500mm (166 cell) ,
            996* 2500mm (158.75 cell), 
            986* 2500mm (156.75 cell)
        </td>
    </tr>
    <tr className='border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >Transparency</td>
        <td>91.6% (No coated) ,
            94.5% (AR coated)
        </td>
    </tr>
    </tbody>
</table>

</div>

     
        </div>
        <Footer/>
    </div>


  )
}

export default Solarglass