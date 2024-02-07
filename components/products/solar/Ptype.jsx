import Image from 'next/image';
import { useRouter } from 'next/router';

const Ptype = () => {
    return (
    <div className=''>
    <h2 className='font-bold text-[50px] text-center'>P-Type Module Product</h2>
    <div className='grid grid-cols-2 mt-[50px] mr-[400px] ml-[100px]'>
      <ProfileItem
        image="/images/solar/ptype1.png"
        title="Bifacial Dual Glass Module"
        info="Maximum Power Outpution"
        number="415W"
        info2="Maximum Module Efficiency"
        number2="21.3% "
      />
      <ProfileItem
        image="/images/solar/ptype2.png"
        title="Bifacial Dual Glass Module"
        info="Maximum Power Outpution"
        number=" 555W"
        info2="Maximum Module Efficiency"
        number2="21.5%"
      />
    </div>
    <div className='grid grid-cols-2 mr-[400px] ml-[100px]'>
      <ProfileItem1
        image="/images/solar/ptype3.png"
        title="Mono-Facial Module"
        info="Maximum Power Outpution"
        number=" 560W"
        info2="Maximum Module Efficiency"
        number2="21.7%"
      />
      <ProfileItem1
        image="/images/solar/ptype4.png"
        title="Bifacial Dual Glass Module"
        info="Maximum Power Outpution"
        number=" 605W"
        info2="Maximum Module Efficiency"
        number2="21.4%"
      />
    
      <ProfileItem1
        image="/images/solar/ptype5.png"
        title="Bifacial Dual Glass Module"
        info="Maximum Power Outpution"
        number=" 665W"
        info2="Maximum Module Efficiency"
        number2="21.4%"
      />

       
    </div>
  </div>
);
};

const ProfileItem = ({ image, info, title, number, info2, number2 }) => (
<div className='ml-[200px] '>
  <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
    <h2 className='font-bold text-[20px] text-center mt-[30px]'>{title}</h2>
    <Image src='/images/solar/lumi-solar.png' width={100} height={100}
          className='items-center ml-[170px]'/>
    <div>
      <div>
        <Image src={image} width={200} height={100} className='mt-[20px] ml-[150px] item-center' />
      </div>
 
      <div className='mt-[15px] text-center flex ml-[20px]'>
                <div className='ml-[5px]'>
                <p className='font-bold'>{number}</p>
              <p>{info}</p>
                </div>
            
              <div className='ml-[30px]'>
              <p className='font-bold'>{number2}</p>
              <p>{info2}</p>
              </div>

            </div>
            <div className=' border-solid border-1 border-black mt-[40px] text-center'>
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Product Detail</button>
            </div>
          

    </div>
  </div>
</div>
);

const ProfileItem1 = ({ image, info, title, number , number2, info2  }) => {




return (
  <div className='ml-[200px]'>
    <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
      <h2 className='font-bold text-[20px] mt-[30px] text-center'>{title}</h2>
      <Image src='/images/solar/lumi-solar.png' width={100} height={100}
          className='items-center ml-[190px]'/>
      <div>
        <div>
          <Image src={image} width={200} height={100} className='mt-[10px] ml-[180px] item-center' />
        </div>
        <div className='mt-[15px] text-center flex ml-[20px]'>
                <div className='ml-[5px]'>
                <p className='font-bold'>{number}</p>
              <p>{info}</p>
                </div>
            
              <div className='ml-[30px]'>
              <p className='font-bold'>{number2}</p>
              <p>{info2}</p>
              </div>

            </div>
            <div className=' border-solid border-1 border-black mt-[40px] text-center'>
            <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Product Detail</button>
            </div>
          

        </div>
      </div>
    </div>

);
};

export default Ptype;