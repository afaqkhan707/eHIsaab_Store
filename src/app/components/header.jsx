import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import './header.css';
import NavigationText from './propscComponents/NavigationText';
import symbol from '../assets/symbol.png';
import cart from '../assets/cart.svg';
import { auth, onAuthStateChanged, signOut } from '../firebase/firebaseConfig';

const Header = () => {
  const [currentUser, setCurrentUser] = useState({ email: 'Signed Out' });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user.email);
        console.log(user.uid);
      } else {
        console.log('Signed Out');
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth);
    window.location.reload();
  };

  return (
    <>
      <header>
        <div className='head'>
          <Image src={logo} />
          <p>
            Downlaod eHisaab now to maintain your business accounts and get
            online sale orders.
          </p>
          <p>{currentUser.email}</p>
        </div>
        <nav className='nav-bar'>
          <div className='symbol'>
            <Image src={symbol} />
          </div>
          <ul>
            <NavigationText title='Home' path='/' />
            <NavigationText title='Stores' path='/store' />
            <NavigationText title='Products' path='/' />
            <Image src={cart} />
            <NavigationText title='Sign Up' path='/signup' />
            <NavigationText title='Sign Out' path='/signin' />
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
