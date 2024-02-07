"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import DropdopwnButton from '../DropdownButton';
const Alcoil = () => {

    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    const toggleDetailsVisibility = () => {
      setIsDetailsVisible(!isDetailsVisible);
    };
  
    return (
      <div className='relative'>
        <div className='w-full'>
          <DropdopwnButton
          isDetailsVisible={isDetailsVisible}
          toggleDetailsVisibility={toggleDetailsVisibility}
          title={"SPECIFICATION OF ALUMINUM COIL"}
          />
          
  
          {isDetailsVisible && (
            <div className=''>
              <ProfileItem
      
               title=" Chemical Composition of 3003 Aluminum Coil"
                image="/images/coils/al-coil.jpeg"
               grade="A1050,A3003-A5754"
               temper="	All available, H1X,H2X,H3X,O,HXXX"
               id="75mm,150mm,200mm,300mm,400mm,508mm or negotiable"
               od="	Per customer's request"
               thickness="0.20-8.0mm"
               width="8-2400mm"
               tolarence="+/-2%"
               alloy="Non-alloy/pure aluminum"
               standard="JIS;AISI,ASTM,GB,DIN,EN"
               certification="	ISO"
               surface="Powder, coated, anodized, polishing, mirror finish, diamond, tread, brushed, wood grain, stucco embossed"
               property="Anti-corrosion, heat resistant"
               production="Cold Rolled"
               application="Storage device, decoration, pressure vessels, etc."
               core="Paper core"
               coil="2-4 tons"
               origin="China mainland."
               payment="TT,LC"
               pa="Covered with a layer of plastic film and cardboard, packed on the wooden pallets, bound with iron belt, loaded in the containers."
               delivery="15-30 days"
               grade1="3000"
               si="0.600"
               fe="0.700"
               cu="0.50-0.2"
               mn="1.0-1.5"
            mg="-"
            cr="-"
            ni="-"
            zn="0.100"
            al="remains"
      
              />


            </div>
          )}
        </div>
      </div>
    );
  };
  
  const ProfileItem = ({ title, grade, image, temper, id, thickness, od, width, tolarence, alloy, standard, certification, surface,
     property, production, application, core, coil,origin, payment, pa, delivery, si, fe, cu, mn, mg,cr,ni, zn, al, grade1}) => (
    <div className='text-[15px] w-full mt-8'>
      <div className='border-1 text-center border border-gray-800 max-w-[1370px] w-full'>  
        <h3 className=''>Applications of 3003 Aluminum Coil</h3>
        <p className=' p-3'>
          As a wrought alloy, it is not used in casting. 
            It is also commonly used in sheet metal applications
            such as HVAC, condenser, radiator, evaporator, heat 
            shield, gutters, downspouts, roofing and siding.</p>
      </div>
      <div className='flex md:flex-row flex-col justify-between text-sm mb-[30px]'>
        <div className='mt-[70px]'>
          <div className="profile-container">
            <div className="profile-wrapper">
              <table className='profile-table border border-1 border-gray-600'>
                <tbody>
                <tr>
                    <td className='text-left p-2 font-serif size-11'>GRADE</td>
                    <td className='text-left p-2 font-serif size-11'>{grade}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11 bg-gray-300'>TEMPER</td>
                    <td className='text-left p-2 font-serif size-11 bg-gray-300'>{temper}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>COIL ID</td>
                    <td className='text-left p-2 font-serif size-11'>{id}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11 bg-gray-300'>COIL OD</td>
                    <td className='text-left p-2 font-serif size-11 bg-gray-300'>
                    {od}
                    </td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>THICKNESS</td>
                    <td className='text-left p-2 font-serif size-11'>{thickness}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>WIDTH</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{width}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>TOLARENCE</td>
                    <td className='text-left p-2 font-serif size-11'>{tolarence}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>ALLOY OR NOT</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{alloy}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>STANDARD</td>
                    <td className='text-left p-2 font-serif size-11'>{standard}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>CERTIFICATION</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{certification}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>SURFACE</td>
                    <td className='text-left p-2 font-serif size-11'>{surface}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>PROPERTY</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{property}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>PRODUCTION PROCESS</td>
                    <td className='text-left p-2 font-serif size-11'>{production}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>APPLICATION</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{application}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11'>CORE</td>
                    <td className='text-left p-2 font-serif size-11'>{core}</td>
                  </tr>
                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>COIL WEIGHT</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{coil}</td>
                  </tr>

                  <tr>
                    <td className='text-left p-2 font-serif size-11'>ORIGIN</td>
                    <td className='text-left p-2 font-serif size-11'>{origin}</td>
                  </tr>

                  <tr>
                    <td className='text-left p-2 font-serif size-11 bg-gray-300'>PAYMENT</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{payment}</td>
                  </tr>


                  <tr>
                    <td className='text-left p-2 font-serif size-11'>PACKAGE</td>
                    <td className='text-left p-2 font-serif size-11'>{pa}</td>
                  </tr>

                  <tr>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>DELIVERY</td>
                    <td className='text-left p-2 font-serif size-11  bg-gray-300'>{delivery}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='mt-[70px]'>
          <Image src={image} width={600} height={500} className=''/>
          <div className='mb-[5px] '>
            <h3 className=''>{title}</h3>  
          </div>
          <div className='profile-container mt-[20px]'>
            <div className="profile-wrapper">
              <table className='border border-1 border-gray-600'>
                    <tbody>
                        <tr>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300 '>Grade</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Si</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Fe</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Cu</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Mn</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Mg</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Cr</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Ni</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Zn</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-300'>Al</td>
                        </tr>
                        <tr>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{grade1}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{si}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{fe}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{cu}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{mn}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100 '>{mg}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{cr}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{ni}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{zn}</td>
                            <td className='text-left p-2 font-serif size-11 bg-gray-100'>{al}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );




  

export default Alcoil