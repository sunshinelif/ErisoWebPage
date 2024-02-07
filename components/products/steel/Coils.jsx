"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { TbHandFinger } from "react-icons/tb";
import DropdopwnButton from '../DropdownButton';
const Coils = () => {
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
        title={"COILS & SHEETS"}
        />
      

      {isDetailsVisible && (
        <div className='profiles profiles-col-2'>
          <ProfileItem
            image="/images/coils/HRC.png"
            title="HRC: 1.4 - 25.40 mm"
            grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
            length="1000 - 1500 mm"
            standards={['EN, DIN, ASTM']}
          />
          <ProfileItem
            image="/images/coils/plates.png"
            title="PLATES/SHEETS: 6 - 200 mm Thickness"
            grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
            length="1000 - 12000mm"
            standards={['EN, DIN, ASTM']}
          />
          <ProfileItem
            image="/images/coils/CRC.png"
            title="CRC: 0.20 - 2.00 mm"
            grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2"
            length="1000 - 1500 mm"
            standards={['EN, DIN, ASTM']}
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
          <td className='text-left p-2 font-serif size-11 bg-gray-400' colSpan="2">
            {title}
          </td>
        </tr>
        <tr>
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>GRADE</td>
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{grade}</td>
        </tr>
        <tr>
          <td className='text-left p-2 font-serif size-11 bg-gray-400'>LENGTH</td>
          <td className='text-left p-2 font-serif size-11 bg-gray-400'>{length}</td>
        </tr>
        <tr>
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>STANDARDS</td>
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>
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



export default Coils