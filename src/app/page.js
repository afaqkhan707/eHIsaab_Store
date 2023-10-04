'use client';
import Image from 'next/image';
import styles from './page.module.css';
import SignupForm from './components/signup';
import SigninForm from './components/signin';
import Header from './components/header';
import BusinessInfo from './components/BusinessInfo';
import SearchInput from './components/SearchInput';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <BusinessInfo />
      <SearchInput />
      <Footer />
      {/* <SignupForm /> */}
      {/* <SigninForm /> */}
    </>
  );
}
