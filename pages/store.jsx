import React from 'react';
import Footer from '@/app/components/Footer';
import SearchInput from '@/app/components/SearchInput';
import Header from '@/app/components/header';
import Banner from '@/app/components/Banner';

function store() {
  return (
    <>
      <Header />
      <Banner />
      <SearchInput />
      <Footer />
    </>
  );
}

export default store;
