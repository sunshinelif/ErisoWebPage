"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';
const Sheet = () => {

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
          title={"SHEET METAL FABRICATION"}
          />

      {isDetailsVisible && (
        <div className=' '>
        
         <ProfileItem
            image="/images/engin/img_2.png"
            info="We can handle projects ranging from simple fabrications to very complex weldments. 
            We offer value-added assembly on any of our fabricated products. We currently assemble
             components and panels to frames for several customers. This service offers a complete 
             solution for our customers and allows us to verify that all the components fit as designed before delivery. 
             For customers that require more complex assembly, including wiring, PLC integration, and testing, we have 
             the expertise and resources for this type of work. These are some of the products manufactured;
            "
            image2="/images/engin/img_3.png"
            />
           

        </div>
      )}
    </div>
  </div>
);
};




const ProfileItem = ({  image, info, image2 }) => (
    <div className='text-[15px] flex md:flex-row flex-col gap-x-12 mt-[20px] '>
      <div className='flex flex-1 flex-col'>
      <Image src={image} width={250} height={150} className='mt-[20px]  mb-[20px]' />
      <Image src={image2} width={200} height={100} className='mt-[20px] mb-[20px] ' />
      </div>
      <p className='mt-[20px] max-w-[800px] w-full'>{info}</p>
    </div>
  );
  


export default Sheet