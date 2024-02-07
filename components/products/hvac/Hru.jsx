"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const Hru = () => {
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
          title={"HRU & ACCESSORIES"}
          />
  
          {isDetailsVisible && (
            <div className='text-[12px] mt-[20px]'>
              <ProfileItem
                title="Features"
                image="/images/hvac/img_2.png"
                info={['12 standard models with CE mark',
                    'High efficient and direct driven AC Fans with low noise level',
                    'Proper ventilation by fan speed control having 5 levels for exhaust air and fresh air controlled separately',
                    'Easy installation and maintenance by compact design',
                    'Aluminum plate type heat exchangers with high conductivity and performance',
                    'High indoor air quality with washable polyurethane filters',
                    'Excellent sound and heat isolation with fully insulated cabinet']}
                    title2="Heat Recovery Units Accessories"
                    info2 ={['VCE Duct Type Electrical Heater',
                        'HWC/CWC Duct Type Water Coil',
                        'HVK Hydraulic Valve Kit',
                        'OCK Outdoor Connection Kit',
                        'BCK By-Pass Connection Kit',
                        'DCK Rectangular Duct Connection Kit',
                        'VWC Weatherproof Cover',
                        'SLT Circular Duct Type Silencer',
                        'VFK Duct Type Bag Filter',
                       'Clogged Filter Sensor',
                        'Heat Exchanger Frost Protection Sensor',
                        'Carbon dioxide and Air Quality Sensor',
                        'Room Temperature Sensor',
                        'Modbus Protocol',
                        'Bacnet Protocol']}
              />
         
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title2,  title, image, info2, info}) => (
    <div className='text-[15px] flex md:flex-row flex-col mt-[20px] mb-[30px] p-3 gap-x-12 gap-y-4 '>
      <div>
        <Image src={image} width={400} height={100} className='mt-[30px] '/>  
    </div>
    <div className='mt-[30px]'>
        <h3 className='font-medium text-2xl'>{title}</h3>
        <p className='text-left mt-[60px] mb-[30px] '>  {info.map((standard, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {standard}
                </React.Fragment>
              ))}</p>
              <h3>{title2}</h3>
        <p className='text-left mt-[60px] mb-[30px] '>  {info2.map((standard2, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {standard2}
                </React.Fragment>
              ))}</p>
      </div>
    </div>
  );
export default Hru