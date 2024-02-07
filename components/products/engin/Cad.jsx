"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { MdEngineering } from "react-icons/md";
import DropdopwnButton from '../DropdownButton';
const Cad = () => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetailsVisibility = () => {
      setIsDetailsVisible(!isDetailsVisible);
    };
    

  return (
    <div className='relative'>
    
    <div className=''>
      <DropdopwnButton
          isDetailsVisible={isDetailsVisible}
          toggleDetailsVisibility={toggleDetailsVisibility}
          title={"CAD DESIGN"}
          />

      {isDetailsVisible && (
        <div className='profiles gap-x-12'>
          <ProfileItem
            image="/images/engin/reverse.png"
            title="RESERVE ENGINEERING"
            detail=" Recreation of 3D scan data into CAD models enabling analysis, optimisation and remanufacture of components and assemblies."
          />
         <ProfileItem1
            image="/images/engin/IMG_0196.jpg"
            title="2D & 3D MODELING"
            grade="S235JR/J0/J1/J2 S275JR/J0/J1/J2 S355JR/J0/J1/J2 "
            length="6000 - 12000 mm"
            standards={['Concept design','Fabrication drawing','Patent drawing','Coordination drawing','3D Drawing for 3D printing','Mechanical components']}
          />
              <ProfileItem
            image="/images/engin/project.png"
            title="PROOJECT DESIGN"
            detail=" Throughout the cycle of a project, consideration for design should be taken; 
            how a part will be manufactured, the process, material, quantity, environmental
             affects etc. Our design engineers and metrology team work closely from the very 
             beginning of your project to establish and understand the exact design requirements 
             and intended outcome end-to-end, using their experience and expertise to help you to achieve the very best result."
         />
        </div>
      )}
    </div>

  </div>
);
};

const ProfileItem1 = ({ image, title, standards }) => (
  <div className='text-[15px] mt-[20px]'>
    <div>
      <h2 className='text-[20px] font-bold'>{title}</h2>
      <Image src={image} width={200} height={100} className='mt-[20px]' />
    </div>
    <div className=' text-center'>
      <ul className=' text-left mt-[px] mb-[30px] text-[15px]'>
        {standards.map((standard, index) => (
          <li key={index} className='flex '>
              <MdEngineering className='text-blue-500' />
            {standard}
          </li>
        ))}
      </ul>
    </div>
  </div>
);




const ProfileItem = ({ image, title, detail }) => (
    <div className='text-[15px] mt-[20px]'>
      <div className=' '>
        <div>
          <h2 className='text-[20px] font-bold'>{title}</h2>
          <Image src={image} width={200} height={100} className='mt-[20px]'/>
        </div>
       <p className='mt-[20px]'>{detail}</p>
      </div>
    </div>
    );


export default Cad