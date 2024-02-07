import React from 'react'
import Image from 'next/image';
const Logo = () => {
  return (
        <Image src='/images/logo.png' alt='' priority={true} width={200} height={200} className="w-full h-full object-contain"/>
  )
}

export default Logo