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
        <Image src={eHisaabLogo} alt='Pine Logo' className='footer-img' />
        <p>Team Pregurine JV Pine Technologies</p>
        <Image src={pineLogo} alt='Pine Logo' className='footer-img' />
        <Image src={Peregrine} alt='Peregrine' id='peregrine' />
      </footer>
    </>
  );
};

export default Footer;
