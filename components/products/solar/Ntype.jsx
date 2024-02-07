import Title from '@/components/layout/ui/Title';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Ntype = () => {
    return (
        <div className=''>
            <div className=' '  style={{ background: 'url("/images/solar/Topcon.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '800px' }}>
        <Image src="/images/solar/ntype-con.png" width={500} height={100} className='ml-[50px] mt-[30px]' />
            </div>
          <h2 className='font-bold text-[50px] text-center'>N-Type Module Product</h2>
          <div className='flex mt-[50px] mr-[400px] ml-[50px]'>
            <ProfileItem
              image="/images/solar/ntype2.png"
              title="N-TOPCon Bifacial Dual Glass Module"
              info="Maximum Power Outpution"
              number=" 705W"
              info2="Maximum Module Efficiency"
              number2="22.7%"
            />
            <ProfileItem1
              image="/images/solar/ntype3.png"
              title="All Black Module"
              info="Maximum Power Outpution"
              number=" 430W"
              info2="Maximum Module Efficiency"
              number2="22.0%"
            />
          </div>
          <div className='flex mr-[400px] ml-[50px]'>
            <ProfileItem
              image="/images/solar/ntype4.png"
              title="N-TOPCon Bifacial Dual Glass Module"
              info="Maximum Power Outpution"
              number=" 585W"
              info2="Maximum Module Efficiency"
              number2="22.7%"
            />
            <ProfileItem1
              image="/images/solar/ntype5.png"
              title="N-TOPCon Bifacial Dual Glass Module"
              info="Maximum Power Outpution"
              number=" 430W"
              info2="Maximum Module Efficiency"
              number2="22.0%"
            />
          </div>
        </div>
      );
    };
    
    const ProfileItem = ({ image, info, title, number , number2, info2}) => (
      <div className='ml-[200px]'>
        <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
          <h2 className='font-bold text-[20px] text-center'>{title}</h2>
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
    
    const ProfileItem1 = ({ image, info, title, number, info2, number2 }) => {
    
    
    
    
      return (
        <div className='ml-[200px]'>
          <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
            <h2 className='font-bold text-[20px] text-center'>{title}</h2>

            <Title className=''>
              <div className='flex ml-[200px] text-[30px]'>
              <h2 className=''>Lumi</h2>
            <h2 className='text-red-700 ml-[5px]'> II</h2>
              </div>
          
            </Title>
          
            <div>
              <div>
                <Image src={image} width={200} height={190} className='  -mt-[30px] ml-[170px] item-center' />
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
    

export default Ntype