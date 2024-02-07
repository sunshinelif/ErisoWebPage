"use client"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const products = [
    { id: 0, slug: '/services/software', name: 'Software Engineering', image: '/images/software-engineering.webp' },
    { id: 1, slug: '/products/steel', name: 'Steel', image: '/images/products/steel-product.jpg' },
    { id: 2, slug: '/products/copper', name: 'Copper', image: '/images/products/copper-product.jpg' },
    { id: 3, slug: '/products/pv-solar',  name: 'PV Solar', image: '/images/products/solar-product.jpg' },
    { id: 4, slug: '/products/aluminum', name: 'Aluminum', image: '/images/albgg.png' },
    { id: 5, slug: '/products/hvac', name: 'Hvacr', image: '/images/products/hvac-product.jpg' },
    { id: 6, slug: '/products/engineering',  name: 'Engineering', image: '/images/enginbgg.png' },
    
  ];
const Jumbotron = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    const swiperInstance = swiperRef.current.swiper;

    // Animate the text content when the component mounts
    animateText();

    // Listen for slide change events
    swiperInstance.on('slideChangeTransitionStart', animateText);

    // Cleanup
    return () => {
      swiperInstance.off('slideChangeTransitionStart', animateText);
    };
  }, []);

  const animateText = () => {
    // Animate the text content
    gsap.fromTo('.jumbotron-text', { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: .7 });
    gsap.fromTo('.jumbotron-button', { opacity: 0, y: 120 }, { opacity: 1, y: 0, duration: 1 });
  };

  return (
    <header className="w-full h-full pt-28">
      <Swiper
        ref={swiperRef}
        className="mySwiper w-full h-[calc(100vh-7rem)]"
        spaceBetween={10}
        speed={700}
        preloadImages={true}
        updateOnImagesReady={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter:true,
        }}
        pagination={{
          clickable: true,
          paginate: 3,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="relative w-full h-full after:w-full after:h-full after:opacity-50 after:bg-black after:block after:absolute after:top-0 after:bottom-0 after:z-10">
            <Image src={product.image} className="object-cover object-center absolute top-0 left-0 w-full h-full" width={1400} height={700} />
            <div className={`lg:ml-32 relative z-20 w-full h-full flex flex-col justify-center lg:items-start items-center`}>
              <h1 className="md:text-6xl text-3xl text-white font-medium uppercase jumbotron-text">{product.name}</h1>
              <Link href={product.slug} className="btn bg-white text-gray-800 w-36 md:mt-12 mt-8 jumbotron-button">
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};

export default Jumbotron;
