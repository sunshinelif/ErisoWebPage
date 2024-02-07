"use client"
import React from 'react'
import Title from './ui/Title'
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-primary-150 text-white">
    <div className="container mx-auto pt-16 pb-6">
      <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-8 pb-10 ">
        <div className="md:flex-1">
          <Title addClass="text-[30px]">Contact Us</Title>
          <div className="flex flex-col gap-y-2 mt-3">
            <div>
            <FiPhone className='inline-block ml-2 text-[36px]'/>
            <span className='ml-[3px]'> +90 534 073 24 01</span>
            </div>
            <div>
              <Link href='mailto:sales@erisogroup.com' >
            <CiMail className='inline-block ml-2 text-[36px]'/>
            <span className='ml-[3px]'> sales@erisogroup.com</span>
            </Link>
            </div>
          </div>
        </div>
        <div className="md:flex-1">
          <Title addClass="text-[20px]">ERISO TRADING GROUP CO.</Title>
          <p className='mt-3'>
          Sinan Cd. 94/A, Naci Çakir, 06450 Çankaya/Ankara, TURKIYE
          </p>
        </div>
        <div className="md:flex-1">
          <Title addClass="text-[30px]">Social Media</Title>
          <div className="flex justify-center gap-x-4 mt-3">
            <div className=''>
              <Link  href="https://www.linkedin.com/company/82978392/admin/feed/posts/"
              className="w-8 h-8  place-content-center text-[36px]">
              <FaLinkedin  className=''/>
                </Link>
            </div>
            <div>
            <Link
              href="https://wa.me/5340732401"
              className="w-8 h-8  place-content-center text-[36px]"
            >
              <FaWhatsapp />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-10">
        © 2023  Reserved By EM
      </p>
    </div>
  </footer>

  )
}

export default Footer