import React from 'react';
import Image from 'next/image';
import EngineerBoy from '../assets/boy.svg';
import './BusinessInfo.css';

const BusinessInfo = () => {
  return (
    <>
      <div className='business-section'>
        <div className='engineer-boy'>
          <Image src={EngineerBoy} />
        </div>
        <div className='business-section-text'>
          <h3>Pine Technologies</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
          </p>
          <p>Shop # 206 ZS Plaza Gilgit </p>
          <div className='bus-text-footer'>
            <p>03402042304</p>
            <p>Garments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessInfo;
