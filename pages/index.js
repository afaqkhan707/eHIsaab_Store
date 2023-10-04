import React from 'react';
import Image from 'next/image';
import eHisaab from '../src/app/assets/logo.png';

export default function Home() {
  return (
    <div className='logo'>
      <Image src={eHisaab} alt='Logo' />
    </div>
  );
}
