"use client"
import React from 'react';
import Image from 'next/image';
import Header from '@/components/layout/ui/Header';

const ServiceItem = ({ imageSrc, title, description }) => {
    return (
      <div className="">
        <Image src={imageSrc} width={150} height={100} className="w-32 h-32 object-contain" />
        <h2 className="font-bold text-xl text-red-800 mt-4 capitalize">{title}</h2>
        <p className="mt-4">{description}</p>
      </div>
    );
  };

  const services = [
    {
      id: 1,
      imageSrc: "/images/software/web.png",
      title: "web development",
      description:
        "Whether it's a corporate website, e-commerce platform, or a custom web application, we excel in delivering user-centric solutions.",
    },
    {
      id: 2,
      imageSrc: "/images/software/app.png",
      title: "mobile app development",
      description:
        "ETG Software & IT Solutions specializes in creating mobile applications that seamlessly blend creativity with functionality. From Android to iOS, our developers leverage the latest technologies to bring your app ideas to life, ensuring a smooth user experience.",
    },
    {
      id: 3,
      imageSrc: "/images/software/clouds.png",
      title: "cloud services",
      description:
        "We offer robust and scalable cloud solutions that empower businesses to streamline operations, enhance security, and achieve cost efficiencies. Our cloud services include infrastructure setup, migration, and ongoing management to keep your business at the forefront of technological innovation.",
    },
    {
      id: 4,
      imageSrc: "/images/software/gr.png",
      title: "graphics designing",
      description:
        "Our creative team transforms ideas into visually captivating designs that leave a lasting impression. From logos and branding materials to marketing collateral and user interfaces, ETG Software & IT Solutions brings a touch of artistic flair to every project.",
    },
  ];

const Software = () =>{
    return (
        <>
        <Header title="Our Services"/>
        <section className="max-container grid lg:grid-cols-4 sm:grid-col-2 md:grid-cols-3 gap-8 py-24 mb-[50px]">
            {services.map((service) => (
                <ServiceItem key={service.id} {...service} />
            ))}
        </section>
    </>
    );
};

export default Software;
