"use client"
import React,{useState} from 'react'
import { MdEngineering } from "react-icons/md";
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';
const Maching = () => {

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
          title={"MACHING & METAL FABRICATION"}
          />
      {isDetailsVisible && (
        <div className='profiles'>
        
         <ProfileItem
           image="/images/engin/IMG_0192.JPG"
            title="CNC MACHINING SERVICES"
            standards={['High Precision: Standard dimensional tolerance of ±0.005mm(0.0002in)','Various CNC machines: 3-axis, 4-axis, and 5-axis CNC machines','Various Work Techniques: CNC milling, CNC turning, wire EDM, etc.','Certifications: ISO9001:2008,TS16949']}
          />
              <ProfileItem1
             image="/images/engin/IMG_0194.JPG"
            title="CNC MILLING"
            info=" CNC Milling uses 3-axis milling and 5-axis indexed milling to 
            rapidly cut a choice of more than 30 engineering-grade thermoplastics 
            and metals into complex shapes and precision components."
     
         />

            <ProfileItem1
        image="/images/engin/IMG_0193.JPG"
        title="CNC TURNING"
        info="CNC Turning uses a lathe to create detailed functional
        prototypes and end-use parts with cylindrical features.
        It removes material from bulk by rotating the workpiece.
"
 
     />

        </div>
      )}
    </div>
  </div>
);
};

const ProfileItem = ({  image, title, standards }) => (
  <div className='text-[15px] mt-[20px]'>

    <div>
      <h2 className='text-[20px] font-bold'>{title}</h2>
      <Image src={image} width={200} height={100} className='mt-[20px]' />
    </div>
    <div className='mt-[20px] text-center'>
      <ul>
        {standards.map((standard, index) => (
          <li key={index} className='text-left p-2 font-serif flex'>
             <MdEngineering className='text-blue-500' />
            {standard}
          </li>
        ))}
      </ul>
    </div>
  </div>
);


const ProfileItem1 = ({  image, title, info }) => (
    <div className='text-[15px] mt-[20px]'>

<h2 className='text-[20px] font-bold'>{title}</h2>
      <div>
      <Image src={image} width={200} height={100} className='mt-[20px]' />

      <p className='mt-[30px]'>{info}</p>
      </div>
   
    </div>
  );
  


export default Maching