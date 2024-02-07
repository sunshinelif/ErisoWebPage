"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const Cathodes = () => {
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
          title={"COPPER CATHODES"}
          />
  
          {isDetailsVisible && (
            <div className='text-[12px]  mt-[20px]'>
              <ProfileItem
              title="Supply of 100% Pure Copper Cathodes from Zambia and South Africa"
                image="/images/copper/cc.jpeg"
                info="Our cathodes have a purity level of 99.99% copper,
                 meeting the highest international quality standards and 
                 are registered as REC (A Grade) on the London Metal Exchange (LME),
                  and are marketed as A Grade."
                  info1="Packaging: shipment 
                  bundles of copper cathode sheets are held together by steel strapping.
                   We deliver copper cathodes in bulk or containerized shipments on FOB or CIF basis worldwide."
                   info2="   Our approach for copper trading is transparent, sustainable
                   and simplified for ease of transaction and 
                   optimum to zero risk management for our partners and clients.
                    We do not engage in spot or speculative transactions.
                    We only work with long term contracts."
              />
            
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title, image, info, info1, info2}) => (
    <div className='text-[15px] flex flex-col md:flex-row gap-x-12'>
    <div className='profile-image'>
        <Image src={image} width={400} height={100} className='object-contain '/>    
    </div>
    <div className=''>
    <h3 className='font-bold  text-[15px]'>{title}</h3>
            <p  className='text-[15px] text-justify mt-[10px]'> {info}</p>
            <p  className='text-[15px] text-justify  mt-[20px]'> {info2}</p>
            <p  className='text-[15px] text-justify mt-[20px]'> {info1}</p>

    </div>
  
    </div>
  );


export default Cathodes