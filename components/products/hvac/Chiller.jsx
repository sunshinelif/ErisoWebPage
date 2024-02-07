"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';


const Chiller = () => {
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
          title={"CHILLER"}
          />
  
          {isDetailsVisible && (
            <div className='text-[12px] w-full'>
              <ProfileItem
                title="Standard Features"
                image="/images/hvac/img_4.png"
                info={['5-2000 kW capacity range',
                    'R134A/R410A refrigerant fluid',
                    'Screw/Scroll compressor',
                    '-15°C low water temperature',
                    'Microprocessor control',
                    'Shell and tube',
                    'Asymmetric cooling/Cooling/Heat Pump',
                    'Automatic defrost',
                    'Smart defrost system',
                    'Electronic expansion valve',
                    'Easy service and maintenance']}
              />
         
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title, image, info}) => (
    <div className='text-[15px] w-full flex mt-[20px] mb-[30px] p-3'>
      <div>
        <h3 className='font-medium text-2xl'>{title}</h3>
        <div className='flex w-full md:flex-row flex-col gap-y-4 gap-x-12' >
        <Image src={image} width={400} height={100} className='mt-[30px]' alt='Hvac Images'/>
        <p className='text-left mt-[60px] mb-[30px]'>  {info.map((standard, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {standard}
                </React.Fragment>
          ))}</p>
        </div>
    </div>
    </div>
  );

export default Chiller