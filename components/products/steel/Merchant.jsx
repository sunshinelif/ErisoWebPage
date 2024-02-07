"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { TbHandFinger } from "react-icons/tb";
import DropdopwnButton from '../DropdownButton';
const Merchant = () => {
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
        title={"MERCHANT BARS"}
        />

        {isDetailsVisible && (
          <div className='profiles profiles-col-2'>
            <ProfileItem
              image="/images/coils/flat.png"
              title="FLAT BARS: 10 - 300 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
              length="6000 - 12000 mm"
              standards={['EN DIN ASTM']}
            />
            <ProfileItem
              image="/images/coils/squarebars.png"
              title="SQUARE BARS: 6 - 80 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
              length="6000 - 12000 mm"
              standards={['EN DIN ASTM']}
            />
            <ProfileItem
              image="/images/coils/roundbar.png"
              title="ROUND BARS"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
              length="6000 - 12000 mm"
              standards={['EN DIN ASTM']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileItem = ({ image, title, grade, length, standards }) => (
  <div className='profile-container'>
    <div className="profile-wrapper">
    <div className='profile-image'>
      <Image src={image} width={200} height={100} className='mt-[10px]'/>
    </div>
    <div>
      <table className='profile-table'>
        <tbody>
          <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-300' colSpan="2">
              {title}
            </td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>GRADE</td>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>{grade}</td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-300'>LENGTH</td>
            <td className='text-left p-2 font-serif size-11 bg-gray-300'>{length}</td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>STANDARDS</td>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>
              {standards.map((standard, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {standard}
                </React.Fragment>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
);

export default Merchant;
