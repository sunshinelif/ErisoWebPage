"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';

const CopperItems = () => {
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
          title={"COPPER TUBES"}
          />
          
          {isDetailsVisible && (
            <div className='profiles'>
              <ProfileItem
                image="/images/copper/inner-removebg-preview.png"
                title="Inner-grooved Tube"
               specification="	∅5.00*0.20+0.15-18° ∅12.75*0.36+0.21/0.25-20°"
               outside="5 - 12.75mm"
               inside="	4.3 - 11.53mm"
               bottom="0.2 - 0.36mm"
               fin="	0.15 - 0.25mm"
               total="	0.32 - 50mm"
               apex="	22 -90°"
               helix="	13 - 25°"
               numble="	40 - 75"
              />
              <div>
              <ProfileItem1
              image="/images/copper/wound-removebg-preview.png"
              title="Level Wound Tube"
              diameter="	3.8 - 22.22mm"
              thickness="	0.25 - 2mm"
            />
            </div>
              <div>
                <ProfileItem1
                image="/images/copper/pancake-removebg-preview.png"
                title="Pancake Coil"
               diameter="4 - 22.22mm"
               thickness="0.30 - 1.50mm"
              />
              </div>
             <div>

             <ProfileItem2
                image="/images/copper/insulated.png"
                title="Insulated Copper Tube Suitable for AC & Refrigeration Industry"
               outer="6.35×0.75 - 38.10×1.5"
               copper="∅8(±0.5)×8(EMPAISTIC) - ∅42(±1)×10(EMPAISTIC)"
               length="	1 - 30 m"
               outer1="	6.35×0.75/9.52×0.8 - 12.7×0.8/19.05×1.0"
               copper1=" ∅8(±0.5)/∅12(±0.5) - ∅14(±0.5)/∅22(±1)"
               length1="1 - 30 m"
              />

              </div>
          </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ image, title, specification, outside, inside, bottom, fin, total, apex, helix, numble}) => (
    <div className='text-[12px] mt-8'>
      <div className='flex justify-center flex-col items-center'>
        <h2 className='text-[20px] mb-[30px] text-center font-bold'>{title}</h2>
        <Image src={image} width={200} height={70} className=''/>
      </div>
      <div className='mt-[30px]'>
        <table className='profile-table'>
          <tbody>
            <tr>
            <td className='text-left p-2 font-serif size-11 bg-gray-200 '>SPECIFICATION</td>
              <td className='text-left p-2 font-serif size-11 bg-gray-200'>{specification}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>OUTSIDE DIAMETER</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{outside}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-200 '>INSIDE DIAMETER</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{inside}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>BOTTOM WALL THICKNESS</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{bottom}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>FIN IN GROOVE DEPTH HF</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{fin}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>TOTAL WALL THICKNESS</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{total}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>APEX ANGLE</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{apex}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>HELIX ANGLE</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{helix}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>NUMBLE OF TOOTH</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{numble}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );




  const ProfileItem1 = ({ image, title, diameter, thickness }) => (
    <div className='text-[12px] mt-8'>
      <div className='flex justify-center flex-col items-center'>
        <h2  className='text-[20px] mb-[30px] text-center  font-bold'>{title}</h2>
        <div>
          <Image src={image} width={200} height={70} className=''/>
        </div>
      </div>
      <div className='mt-[30px]'>
        <table className='profile-table'>
          <tbody>
            <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-200'>DIAMETER</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{diameter}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>THICKNESS</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{thickness}</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
  const ProfileItem2 = ({ image, title, outer, copper, length, outer1, copper1, length1  }) => (
    <div className='text-[12px] mt-8'>
      <div className='flex justify-center flex-col items-center'>
        <h2  className='text-[20px] mb-[30px] text-center font-bold'>{title}</h2>
        <Image src={image} width={200} height={70} className=''/>
      </div>
      <div className='flex flex-col'>
      <div className='mt-[30px]'>
        <table className='profile-table'>
          <tbody>
            <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-200'>Outer Diameter × Thickness (mm)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{outer}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>Insulated Copper Tube inner diameter × Thickness (mm)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{copper}</td>
            </tr>
            <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-200'>Length(m)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='mt-[30px]'>
        <table className='profile-table'>
          <tbody>
            <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-200'>Outer Diameter × Thickness (mm)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{outer1}</td>
            </tr>
            <tr>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>Insulated Copper Tube inner diameter × Thickness (mm)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-300'>{copper1}</td>
            </tr>
            <tr>
            <td className='text-left p-2 font-serif size-11  bg-gray-200'>Length(m)</td>
              <td className='text-left p-2 font-serif size-11  bg-gray-200'>{length1}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );

export default CopperItems