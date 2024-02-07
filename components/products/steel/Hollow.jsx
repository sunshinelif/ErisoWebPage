"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { TbHandFinger } from "react-icons/tb";
import DropdopwnButton from '../DropdownButton';
const Hollow = () => {
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
        title={"HOLLOW SECTIONS"}
        />

      {isDetailsVisible && (
        <div className='profiles profiles-col-2'>
          <ProfileItem
            image="/images/coils/RoundPipes.png"
            title="ROUND PIPE & TUBES: 0.60 - 2.0 mm"
            grade="E155 - E700, S1 -S4"
            length="6000 - 12000 mm"
            diameter="	8 - 114.3 mm"
            standards={['TS', 'EN 10305-3 & 5']}
          />
     
          <ProfileItem1
            image="/images/coils/Rectangularpipe.png"
            title="SQUARE & RECTANGULAR"
            grade="E155 - E700, S1 -S4"
            length="	6000 - 12000 mm"
            dimension="10x10 - 140x80 mm"
            standards={['	TS', 'EN 10305-3 & 5']}
          />
        </div>
      )}
    </div>
  </div>
);
};

const ProfileItem = ({ image, title, grade, length, diameter, standards }) => (
<div className='profile-container'>
<div className='profile-wrapper'>
  <div className='profile-image'>
    <Image src={image} width={200} height={70} />
  </div>
  <div className=''>
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
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>DIAMETER</td>
          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{diameter}</td>
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
const ProfileItem1 = ({ image, title, grade, length, dimension, standards }) => (
  <div className='profile-container'>
    <div className='profile-wrapper'>
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
            <td className='text-left p-2 font-serif size-11'>DIMENSION</td>
            <td className='text-left p-2 font-serif size-11'>{dimension}</td>
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


export default Hollow