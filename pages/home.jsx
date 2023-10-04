import React from 'react';
import BusinessInfo from '@/app/components/BusinessInfo';
import Footer from '@/app/components/Footer';
import SearchInput from '@/app/components/SearchInput';
import Header from '@/app/components/header';

function Home() {
  return (
    <>
      <Header />
      <BusinessInfo />
      <SearchInput />
      <Footer />
    </>
  );
}

export default Home;
