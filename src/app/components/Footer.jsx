import React from 'react';
import './footer.css';
import Image from 'next/image';
import pineLogo from '../assets/pineLogo.png';
import eHisaabLogo from '../assets/logo.png';
import Peregrine from '../assets/peregrine.svg';
const Footer = () => {
  return (
    <>
      <footer className='footer-section'>
        <Image src={pineLogo} alt='Pine Logo' />
        <p>Team Pregurine JV Pine Technologies</p>
        <Image src={eHisaabLogo} alt='Pine Logo' />
        <Image src={Peregrine} />
      </footer>
    </>
  );
};

export default Footer;
