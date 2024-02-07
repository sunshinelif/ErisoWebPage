import React from 'react'
import Coils from '@/components/products/steel/Coils';
import Billets from '@/components/products/steel/Billets';
import Beams from '@/components/products/steel/Beams';
import Hollow from '@/components/products/steel/Hollow';
import Merchant from '@/components/products/steel/Merchant';
import Wirerod from '@/components/products/steel/Wirerod';

const Steel = () => {
  return (
    <>
        <Beams/>
        <Billets/>
        <Coils/>
        <Hollow/>
        <Merchant/>
        <Wirerod/>
    </>
  )
}
export default Steel;