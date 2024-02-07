import React from 'react'
import Header from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Image from 'next/image'
const Eva = () => {
  return (
    <div>
        <Header/>

        <h2 className=' bg-red-800 text-white text-[40px] text-center'>Encapsulant EVA</h2>
        <div className='flex ml-[300px] mb-[50px] mt-[20px]'>

                  
        <Image src='/images/solar/eva1.png' width={400} height ={200} />
            <div className='mt-[50px] ml-[50px]'>
            
<table  className=' text-black w-[900px] h-auto'>
<tbody>
    <tr className=' text-center border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td>FILM TYPE</td>
        <td>EVA, POE, PVB, EPE</td>

    </tr>
    <tr className='text-center border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >EVA TYPE</td>
        <td>High Transparent,
            High UV cuttof,
            White high Reflection,
            Anti-PID
        </td>

    </tr>
    <tr className=' text-center border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >EVA thickness</td>
        <td>Base on customer demand.
            0.35mm(280g), 0.45mm(3390g), 0.5mm(410g)
            0.55mm(480g), 0.65mm(560g)...
        </td>
    </tr>
    <tr className=' text-center border border-solid border-1 border-black p-2 font-serif size-11  '>
        <td >EVA feature</td>
        <td>Excellent weather resistance against high temperature,
            high humidity, ultraviolet...
            Good adhesion in between glass and different type of backfilm 
            Low shrinkage to ensure component stability during lamination.
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

export default Eva