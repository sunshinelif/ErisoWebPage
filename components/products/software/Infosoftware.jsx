import React from 'react'
import Image from 'next/image';

const Infosoftware = () => {
  return (
  <div>
    <div>
        <ProfileItem 
        
        image =""
        title="Monocrystalline Bifacial
        HJT Solar Cell"
        p="Average efficiency of mass production"
        number="25.3~25.7%"
        />
    </div>
</div>
  )
}
const ProfileItem = ({ image, dimension, weight, length, grade }) => (
    <div className='text-[12px] flex mt-[20px]'>
      <div>
        <Image src={image} width={200} height={70} />
      </div>
      <div>
        <table className='text-black w-[250px] h-auto'>
          <tbody>
          <tr>
              <td className='text-left p-2 font-serif size-11 bg-gray-400'>DIMENSION</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-400'>{dimension}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>WEIGHT</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>{weight}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11 bg-gray-400'>LENGTH</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-400'>{length}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>GRADE</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>
             {grade}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
export default Infosoftware