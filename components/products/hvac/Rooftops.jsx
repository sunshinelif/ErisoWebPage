"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const Rooftops = () => {
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
          title={"ROOFTOPS"}
          />
  
          {isDetailsVisible && (
            <div className='text-[12px] mt-[20px]'>
              <ProfileItem
                title=" Standard Features"
                image="/images/hvac/img_3.png"
                info={['7-350 kW capacity range',
                'R-410a refrigerant fluid',
                'R-454b refrigerant fluid',
                'R-32 refrigerant fluid',
                'Scroll Compressor',
                'Heating',
                'Cooling',
                'Wired remote control',
                'Asymmetric Cooling',
                'Dual skin panel body',
                'Cooling + heat pump',
                'Cooling + heat pump + gas burner',
                'EC plug fan',
                'Thermodynamic heat recovery',
                'Plug & play',
                'Full automatic',
                'LCD display',
                'Automatic defrost',
                'Intelligent defrost system',
                'Electronic expansion valve',
                'Inside air quality',
                'Free cooling',
                'Easy service and maintenance']}
                    title2="Optionals Features"
                    info2 ={['Ability to work with 100% fresh air',
                    'Plate and rotary type heat recovery systems',
                    'Smoke detector',
                    'Dirty filter alarm',
                    'Hot water, vapor, or electric heating',
                    'Gas burner heating',
                    'Ability to set the fresh air ratio between 0 …100 % automatically',
                    'Thermal or enthalpy free cooling (economizer)',
                    'CO2 indoor air quality control',
                    'Ability to connect to building management system',
                    'Three steps of filtration (G4+F7+F9)',
                    'Models with inverter scroll compressor',
                    'Epoxy and hydrophilic coating on the evaporator and condenser coil surface',
                    'Condenser surface protection mesh',
                    'Water cooled condenser',
                    'Models suitable for extremely high ambient temperatures',
                    'Units with low noise levels',
                    'Custom design for special project and flexible production']}
              />
         
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title, image, title2, info, info2}) => (
    <div className='text-[15px] flex md:flex-row flex-col mt-[20px] gap-x-12 gap-y-4 p-3 mb-[30px]'>
      <div>
          <Image src={image} width={400} height={100} className='mt-[30px]'/>       
      </div>
      <div>
          <h3 className="font-medium text-2xl">{title}</h3>
          <p className='text-left mt-[60px] mb-[30px]'>  {info.map((standard, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && <br />}
                    {standard}
                  </React.Fragment>
                ))}</p>
                <h3>{title2}</h3>
          <p className='text-left mt-[60px] mb-[30px]'>  {info2.map((standard2, index) => (
                  <React.Fragment key={index}>
                    {index !== 0 && <br />}
                    {standard2}
                  </React.Fragment>
                ))}</p>
        </div>
    </div>
  );

export default Rooftops