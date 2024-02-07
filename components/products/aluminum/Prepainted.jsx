"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';
const Prepainted = () => {
 
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
          title={"PREPAINTED ALUMINUM COILS"}
          />
  
          {isDetailsVisible && (
            <div className='w-full'>
              <ProfileItem
                
                image="/images/aluminum/pre.JPEG"
                p="Prepainted Aluminum (Prepainted Aluminum Coil),
                Which Is Produced With Aluminum Sheet Or (Aluminum Coil) 
                And Processed By Coating With Color. In Common Sense, 
                There Are Two Kinds Of Prepainted Aluminum Coil-PVDF And PE,
                 Which Are Widely Used In Aluminum Plate, Aluminum Veneer, Aluminum
                  Honeycomb Panels, Aluminum Ceiling, Shingles, Scrap, Pop-Top, Electronics. 
                  Compared With Other Section Steel Prepainted Aluminum Coil Is The Most
                   Popular Material, Because Of Its Excellent Property. Firstly Property
                    Is Very Stable. Secondly Surface Is Erosion Resistant, After Special
                     Treatment Warranty Could Up To 30 Years. At Last, Density Is The Lowest
                      Among Metal Material When Volume Is Fixed."
                      substrates="Aluminium (AA1100, 3003, 3004, 3105, 5006, 5052, 8011, etc),etc."
                      thickness="	0.08-1.5mm"
                      width="<1800mm"
                      coils="150mm, 405mm, 505mm, 508mm, 510mm"
                    coating="	PVDF>=25micron POLYESTER>=18micron"
                    color="E < 2 or it is not obvious by eyeballing"
                    bend="<100 times/td>"
                    boiling="	no any distortion and color change (in the 99 nore or less 1 degree water, then cooling 2 hours)"
                    corrosive="surface deep in the 5% muriatic acid and 5% NaCL, interior deepin the 2% acid and 2% NaCL, after 48 hours, no change"

              />
         
            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ p, image, substrates, thickness, coils, color, bend, boiling, corrosive}) => (
    <div className='text-[15px] mt-[20px] mb-[30px]'>
      <div className='p-4 border border-1 border-gray-800 '>
        <p className=''>{p}</p>
      </div>
      <div className='flex gap-12 flex-col md:flex-row mt-12'>
          <div className='mt-[20px]'>
          <Image src={image} width={900} height={800} />
          </div>
          <div className="profile-container">
            <div className="profile-wrapper">
              <tbody>
                  <table className='text-black w-[600px] h-[500px] border border-1 border-gray-600 mt-[15px]'>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>SUBSTRATES</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{substrates}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>THICKNESS</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>{thickness}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>COILS CORE DIAMETER</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{coils}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>COLOR STANDARD</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>{color}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>BEND STENGTH</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{bend}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>BOILING POINT</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-100'>{boiling}</td>
                      </tr>
                      <tr>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>CORROSIVE</td>
                          <td className='text-left p-2 font-serif size-11 bg-gray-300'>{corrosive}</td>
                      </tr>
                  </table>
              </tbody>
            </div>
          </div>
      </div>
    </div>
  );

export default Prepainted