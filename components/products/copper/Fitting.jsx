"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const Fitting = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetailsVisibility = () => {
      setIsDetailsVisible(!isDetailsVisible);
    };
  
    return (
      <div className='relative mb-[20px]'>
      
        <div>
        <DropdopwnButton
        isDetailsVisible={isDetailsVisible}
        toggleDetailsVisibility={toggleDetailsVisibility}
        title={"COPPER FITTINGS"}
        />
  
          {isDetailsVisible && (
            <div className='profiles'>
              <ProfileItem
                image="/images/copper/COP1-removebg-preview.png"
                info={['Copper End Feed fittings',

                    'Copper Press Fitting',
                    
                    'Solder Ring Copper Fitting',
                    
                   ' ACR Copper Fitting']}
              />
              <ProfileItem
                image="/images/copper/COP2-removebg-preview%20(1).png"
                info={['Copper Rod',

                    'Leaded Brass Rod',
                    
                    'Lead-free Brass Rod',
                    
                    'Ordinary Brass Rod',
                    
                    'Machining Friendly Brass Rod',
                    
                    'Tin Zinc Lead Bronze Rod',
                    
                    'Anti-dezincation Brass Rod',
                    
                    'Chromium Zirconium Copper',
                    
                    'Bronze Rod',
                    
                    'Profile Rod',
                    
                    'Precision Extrusion Rod',
                    
                    'Brass Round Wire (Copper Alloy)',
                    
                    'Brass Flat Wire (Copper Alloy)',
                    
                    'Tellurium Copper Rod',
                    
                    'Low-Silicon Bronze B']}
              />

            <ProfileItem
                image="/images/copper/img-removebg-preview.png"
                info={['Brass Valves & Pipe Fitting',

                    'Brass Ball Valve',
                    
                    'Brass Gate Valve',
                    
                    'Brass Check Valve',
                    
                    'Brass Float Ball Valve',
                    
                    'Brass Angle Valve',
                    
                    'Brass Stop Valve',
                    
                    'Brass Strainer',
                    
                    'Brass Pressure Reducing Valve',
                    
                    'Brass Manifold',
                    
                    'Brass Bibcock',
                    
                    'Brass Gas Valve',
                    
                    'Brass Flanged Valve',
                    
                    'Brass Fittings']}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ image, info}) => (
    <div className='text-[15px]  mt-[20px] border border-1 border-red-800 ml-[10px] mr-[10px] mb-[30px]'>
      <div className='flex flex-col w-full justify-center items-center'>
        
        <Image src={image} width={400} height={100} className='mt-[30px]'/>
        <p className='text-center mt-[60px] mb-10'>  {info.map((standard, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <br />}
                  {standard}
                </React.Fragment>
              ))}</p>
    </div>
    </div>
  );



export default Fitting