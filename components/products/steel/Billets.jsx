"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { TbHandFinger } from "react-icons/tb";
import DropdopwnButton from '../DropdownButton';
const Billets = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (

    <div className='relative'>
     
    <div>
    <DropdopwnButton
        isDetailsVisible={isDetailsVisible}
        toggleDetailsVisibility={toggleDetailsVisibility}
        title={"STEEL BILLETS"}
        />

      {isDetailsVisible && (
        <div className='profiles profiles-col-2'>
          <ProfileItem
            image="/images/coils/IMG_9582.PNG"
            dimension="100x100  200x200 mm"
            weight="195 kg/m"
            length="6,000.00 – 12,000.00 mm"
            grade={['3SP - 5SP']}
          />
       
        </div>
      )}
    </div>
  </div>
);
};

const ProfileItem = ({ image, dimension, grade, length, weight}) => (
<div className='profile-container'>
  <div className='profile-wrapper'>
  <div className='profile-image'>
    <Image src={image} width={200} height={70} />
  </div>
  <div>
    <table className='profile-table'>
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
</div>
);



export default Billets