"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const SteelProduct = () => {
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
        title={"PROFILES / BEAMS"}
        
        />

        {isDetailsVisible && (
          <div className='profiles profiles-col-2'>
            <ProfileItem
              image="/images/steel/EA.png"
              title="STEEL ANGLES: 18 - 300 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 10056-1', 'EN 10056-2']}
            />
           <ProfileItem
              image="/images/steel/UPN.png"
              title="NPU/UPN: 50 - 550 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 10365', 'EN 10279']}
            />
                <ProfileItem
              image="/images/steel/IPE.png"
              title="IPE: 80 - 600 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 10365' , ' EN 10034']}
            />
                   <ProfileItem
              image="/images/steel/UC.png"
              title="UC: 100 - 200 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['BS 4-1', ' EN 10034']}
            />
               <ProfileItem
              image="/images/steel/HAB.png"
              title="HEA/HEB: 100 - 800 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 10365 ',' EN 10034']}
            />
             <ProfileItem
              image="/images/steel/UB.png"
              title="UB: 100 - 300 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['BS 4-1 ', 'EN 10034']}
            />
                <ProfileItem
              image="/images/steel/IPN.png"
              title="IPN: 80 - 550mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 10056-1' ,'EN 10056-2']}
            />
               <ProfileItem
              image="/images/steel/W.png"
              title="W: 100 - 300 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['ASTM A6']}
            />
               <ProfileItem
              image="/images/steel/PFC.png"
              title="PFC: 80 - 300 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['BS 4-1', 'EN 10279']}
            />
               <ProfileItem
              image="/images/steel/RAYWARRAIL.png"
              title="RAILWAY RAILS: 145 - 180 mm"
              grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
              length="6000 - 12000 mm"
              standards={['EN 13674-1 ', 'EN 14811 or R350HT']}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ProfileItem = ({ image, title, grade, length, standards }) => (
  <div className='profile-container'>
    <div className='profile-wrapper'>
    <div className='profile-image'>
      <Image src={image} width={200} height={70} />
    </div>
    <div>
      <table className='profile-table'>
        <tbody>
          <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-400' colSpan="2">{title}</td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-300'>GRADE</td>
            <td className='text-left p-2 font-serif size-11  bg-gray-300'>{grade}</td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>LENGTH</td>
            <td className='text-left p-2 font-serif size-11 bg-gray-400'>{length}</td>
          </tr>
          <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-300'>STANDARDS</td>
            <td className='text-left p-2 font-serif size-11  bg-gray-300'>
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

export default SteelProduct;
