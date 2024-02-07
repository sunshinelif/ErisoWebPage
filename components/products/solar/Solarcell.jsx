import Image from 'next/image';
import { useRouter } from 'next/router';

const Solarcell = () => {
  return (
    <div className=''>
      <h2 className='font-bold text-[50px] text-center'>Cell Product</h2>
      <div className='flex mt-[50px]'>
        <ProfileItem
          image="/images/solar/cell1.png"
          title="Monocrystalline Bifacial HJT Solar Cell"
          info="Average efficiency of mass production"
          number="25.3~25.7%"
        />
        <ProfileItem
          image="/images/solar/cell2.png"
          title="182 Monocrystalline Bifacial TOPCon Solar Cell"
          info="Average efficiency of mass production"
          number="25.3~25.7%"
        />
      </div>
      <div className='flex'>
        <ProfileItem1
          image="/images/solar/cell3.png"
          title="182 Monocrystalline Bifacial PERC Solar Cell"
          info="Average efficiency of mass production"
          number="23.3~23.7%"
        />
        <ProfileItem1
          image="/images/solar/cell4.png"
          title="210 Monocrystalline Bifacial PERC Solar Cell"
          info="Average efficiency of mass production"
          number="23.3~23.7%"
        />
      </div>
    </div>
  );
};

const ProfileItem = ({ image, info, title, number }) => (
  <div className='ml-[200px]'>
    <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
      <h2 className='font-bold text-[20px] text-center'>{title}</h2>
      <div>
        <div>
          <Image src={image} width={200} height={100} className='mt-[20px] ml-[150px] item-center' />
        </div>
        <div className='mt-[10px] text-center'>
          <p>{info}</p>
          <p>{number}</p>
          <p className='text-red-800 cursor-pointer mt-[30px]'>Click for more details</p>
        </div>
      </div>
    </div>
  </div>
);

const ProfileItem1 = ({ image, info, title, number }) => {
  const router = useRouter();

  const handleClick = () => {
    // Replace '/details-page' with the actual path to the page you want to navigate to
    router.push('@/components/Solarcelldetail');
  };

  return (
    <div className='ml-[200px]'>
      <div className='text-black mb-[30px] border border-1 border-black w-[500px] ml-[50px]'>
        <h2 className='font-bold text-[20px] text-center'>{title}</h2>
        <div>
          <div>
            <Image src={image} width={200} height={100} className='mt-[20px] ml-[150px] item-center' />
          </div>
          <div className='mt-[10px] text-center'>
            <p>{info}</p>
            <p>{number}</p>
            <button className='text-red-800 cursor-pointer mt-[30px]' onClick={handleClick}>
              Click for more details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solarcell;
