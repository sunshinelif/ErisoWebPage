"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { TbHandFinger } from "react-icons/tb";
import DropdopwnButton from '../DropdownButton';
const Wirerod = () => {
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
        title={"WIRE ROD & REBAR"}
        />

      {isDetailsVisible && (
        <div className='profiles profiles-col-2'>
          <ProfileItem
            image="/images/coils/WRIC.png"
            title="WIRE ROD: 5.5 - 26 mm | Weight: 1900 - 3200kg"
            grade="SSAE mild & High Carbon PC."
            diameter="ID:850mm, ED:1150/1250mm, H:1400-1850mm"
            standards={['EN 10016-2', 'ASTM A510M']}
          />
          <ProfileItem1
            image="/images/coils/REBAR.png"
            title="REBAR: 8 - 50 mm"
            grade="B500B/B500C"
            length="6000 - 12000 mm"
            standards={['BS, ASTAM, TS, S#WD, GR.']}
          />
      
        </div>
      )}
    </div>
  </div>
);
};

const ProfileItem = ({ image, title, grade, diameter, standards }) => (
<div className='profile-container'>
  <div className="profile-wrapper">
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
          <td className='text-left p-2 font-serif size-11 bg-gray-400'>DIAMETER</td>
          <td className='text-left p-2 font-serif size-11 bg-gray-400'>{diameter}</td>
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

const ProfileItem1 = ({ image, title, grade, length, standards }) => (
    <div className='profile-container'>
      <div className="profile-wrapper">
      <div className='profile-image'>
        <Image src={image} width={200} height={70} />
      </div>
      <div>
        <table className='profile-table'>
          <tbody>
            <tr>
              <td className='text-left p-2 font-serif size-11' colSpan="2">
                {title}
              </td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>GRADE</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-300'>{grade}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11'>LENGTH</td>
              <td className='text-left p-2 font-serif size-11'>{length}</td>
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

export default Wirerod