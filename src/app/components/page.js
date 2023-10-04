'use client';
import Image from 'next/image';
import SignupForm from './signup';
import SigninForm from './signin';
import Header from './header';
import BusinessInfo from './BusinessInfo';
import SearchInput from './SearchInput';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <BusinessInfo />
      <SearchInput />
      <Footer />
      <SignupForm />
      <SigninForm />
    </>
  );
}
