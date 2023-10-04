import React from 'react';
import SearchInput from '@/app/components/SearchInput';
import Banner from '@/app/components/Banner';
import { DefaultLayout } from '@/app/layouts/DefaultLayout';

function store() {
  const child = (
    <>
      <Banner />
      <SearchInput />
    </>
  );
  return <DefaultLayout child={child} />;
}

export default store;
