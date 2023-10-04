import React from 'react';
import BusinessInfo from '@/app/components/BusinessInfo';
import SearchInput from '@/app/components/SearchInput';
import { DefaultLayout } from '@/app/layouts/DefaultLayout';

function Home() {
  const child = (
    <>
      <BusinessInfo />
      <SearchInput />
    </>
  );
  return <DefaultLayout child={child} />;
}

export default Home;
