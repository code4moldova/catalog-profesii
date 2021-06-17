import React from 'react';
import { Container } from '../grid/container.component';
import searchIcon from './assets/searchIcon.svg';

const Input = () => {
  return (
    <div className="flex rounded-md border-2">
      <input
        type="text"
        placeholder="Căutare profesie"
        className="border-none outline-none w-72 py-2.5 pl-4 pr-3 "
      />
      <img
        src={searchIcon}
        alt=""
        style={{ marginLeft: 'auto', marginRight: '1rem' }}
      />
    </div>
  );
};

export default Input;
