import React from 'react';
import Image from 'next/image';
import bannerImg from '../assets/banner.png';
import './banner.css';

const Banner = () => {
  return (
    <>
      <div className='banner-section'>
        <Image src={bannerImg} alt='Banner' />
      </div>
    </>
  );
};

export default Banner;
