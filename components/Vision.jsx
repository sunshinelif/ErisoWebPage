import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegFile } from 'react-icons/fa';
import Link from 'next/link';
const Vision = () => {
  return (
    <section className='mx-auto mt-10 bg-secondary-150 w-full py-10 '>
          <div className="max-container">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full'>
      <div className=' text-white p-6 rounded'>
        <FaUsers className='text-4xl mb-4 mx-auto md:mt-[50px]' size={90}/>
        <h4 className='text-2xl'>Our Mission</h4>
        <p className='mt-2'>
          The major mission of Eriso Trading Group is to effectively collaborate with local and
          global manufacturers and shipping companies to offer the very best services on both
          production and delivery lead time.
        </p>
      </div>
      <div className='bg-red text-white p-6 rounded mt-[50px]'>
        <IoDiamondOutline className='text-4xl mb-4 mx-auto' size={90} />
        <h4 className='text-2xl'>Our Vision</h4>
        <p className='mt-2'>
          The original vision of ERISO Trading Group is to largely remain the one-stop shop for
          all iron-steel products from Turkey and global origins.
        </p>
      </div>
      <div className='bg-red text-white p-6 rounded mt-[50px]'>
        <FaRegFile className='text-4xl mb-4 mx-auto' size={90} />
        <h4 className='text-2xl'>Catalogues</h4>
        <p className='mt-2'>You can find our catalogues here.</p>
        <Link href="/catalogues">
        <button className='mt-4 bg-white text-secondary-150 px-4 py-2 rounded
        hover:bg-slate-700 hover:text-white'>
          MORE
        </button>
        </Link>
      </div>
    </div>
    </div>
    </section>
  );
};

export default Vision;
