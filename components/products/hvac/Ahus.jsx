"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsWind } from "react-icons/bs";
import DropdopwnButton from '../DropdownButton';
const Ahus = () => {
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
          title={"  AHU"}
          />
          {isDetailsVisible && (
            <div className='text-[12px] mt-[20px] '>
              <ProfileItem
                title="Standard & Hygienic AHU Features"
                image="/images/hvac/VAHU.png"
                
                info={['Modular structure',
                    '30 different section options',
                    'Wide air flow range between 1.000 m³/h and 120.000 m³/h',
                    'Provision of subsection regarding the project requirements',
                    'Easy and quick installation',
                    'Configuration flexibility',
                    'High energy efficiency',
                    'Quality production',
                    'Flexible solutions regarding the project requirements',
                    'Package solutions']}
              />
         
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title, image, info}) => (
      <div className='flex md:flex-row flex-col p-3 gap-4'>
        <Image src={image} width={700} height={402}/>
        <div className='mt-[50px]'>
            <h3 className='font-bold text-left text-[15px] '>{title}</h3>
            <ul className='text-left mt-[px] mb-[30px] text-[15px]'>
                {info.map((standard, index) => (
                    <li key={index} className='flex'>
                        <BsWind  className='text-blue-500 mr-[5px] mt-[5px]' />
                        {standard}
                    </li>
                ))}
            </ul>
        </div>
    </div>

  );


export default Ahus