import React from 'react';
import '../../components/header.css';

const NavigationText = ({ navigation }) => {
  return (
    <>
      <li>
        <a>{navigation}</a>
      </li>
    </>
  );
};

export default NavigationText;
