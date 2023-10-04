import React from 'react';
import '../../components/header.css';
import Link from 'next/link';

const NavigationText = ({ title, path }) => {
  return (
    <>
      <li>
        <Link href={`${path}`}>{title}</Link>
      </li>
    </>
  );
};

export default NavigationText;
