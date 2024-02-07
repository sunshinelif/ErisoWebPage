"use client"
import React, { useState } from 'react';
import Logo from './ui/Logo';
import Link from 'next/link';

const Nav = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const services = [
        { "link": "/services/software", "name": "Our Services" },
        { "link": "/services/technical-abilities", "name": "Technical Abilities" },
        { "link": "/services/our-approach", "name": "Our Approach" },
        { "link": "/services/technology-stack", "name": "Technology Stack" },
        { "link": "/services/clientele", "name": "Clientele" },
        { "link": "/services/reference-projects", "name": "Reference Projects" },
        { "link": "/services/overview", "name": "Overview" },
        { "link": "/services/future-outlook", "name": "Future Outlook" }
      ]      
    return (
        <nav className="fixed w-full z-50 mt-0 bg-white flex items-center justify-between h-28 border sm:px-8 px-4">
            <Link href='/'
                className="h-full py-2">
                <Logo />
            </Link>
            <button className="lg:hidden bg-none text-gray-900  flex items-center justify-center text-4xl w-10 outline-none" onClick={()=>setMenuOpen(!isMenuOpen)} id="toggleMenu" title="menu" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" type="button" >
                <svg className={isMenuOpen? "hidden" : "block"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"/></svg>
                <svg className={isMenuOpen? "block" : "hidden"}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"/></svg>
            </button>
            <div className={`absolute w-full bg-white top-28 left-0 right-0 ${isMenuOpen ? 'opacity-100 visible overflow-auto h-[calc(100vh-7rem)]' : 'invisible h-0 opacity-0'} flex flex-col pb-8  lg:pb-0  transition lg:items-center lg:flex-row lg:overflow-visible lg:opacity-100 lg:static lg:bg-transparent lg:left-0 lg:top-0 lg:h-full lg:visible`}>
                <ul className="flex w-full h-full px-4 pt-4 lg:p-0 lg:items-center gap-x-6 lg:flex-row flex-col lg:justify-end text-black ">
                    <li className="nav-list-item">
                        <Link href="/" className="home" onClick={()=>setMenuOpen(!isMenuOpen)}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-list-item">
                        <Link href="/about" className="about" onClick={()=>setMenuOpen(!isMenuOpen)}>
                            About
                        </Link>
                    </li>
                    <li className="nav-list-item">
                        <Link href="/products" className="products" onClick={()=>setMenuOpen(!isMenuOpen)}>
                            Products
                        </Link>
                    </li>
                    <li className="relative group nav-list-item">
                        <button className='flex gap-x-2 pb-4 lg:py-4 uppercase w-full justify-between' onClick={toggleDropdown}>
                            <span className="text-nowrap">Software Services</span>
                            <svg className={`${isDropdownOpen&& "rotate-[180deg]"} text-2xl lg:group-hover:rotate-180`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"/></svg>
                        </button>
                        <ul
                            className={`${isDropdownOpen? "flex visible" : "hidden invisible"} lg:absolute lg:group-hover:flex lg:group-hover:visible lg:w-[200px] bg-white text-black text-[14px] flex-col text-nowrap lg:drop-shadow-md`}
                        >
                            {services.map((service, index)=>(
                            <li className="drop-down-item" key={index}>
                                <Link href={service.link} onClick={()=>setMenuOpen(!isMenuOpen)}>{service.name}</Link>
                            </li>
                            ))}
                        </ul>
                    </li>
                    <li className="nav-list-item ">
                    </li>
                </ul>
                <div className='px-8 lg:p-0'>
                    <Link href="/contact" className="btn h-12 text-white bg-gray-800 w-full mt-12 lg:mt-0 lg:ml-6 lg:w-auto uppercase" onClick={()=>setMenuOpen(!isMenuOpen)}>
                       Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
