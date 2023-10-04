import React from 'react';
import './searchInputBox.css';
import Image from 'next/image';
import searchIcon from '../assets/searchIcon.svg';

const SearchInput = () => {
  return (
    <>
      <div className='searchInputBox'>
        <div className='searchField'>
          <div>
            <button>
              <Image src={searchIcon} />
            </button>
          </div>
          <form className='input'>
            <input type='text' placeholder='Search' />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
