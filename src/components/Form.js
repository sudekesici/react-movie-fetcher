import React from 'react';
import { Categories } from '../constants/enums';
import { styled } from '@mui/material';

function Form({ onCategoryChange }) {
  return (
    <div className='form'>
      <select className='select' onChange={(event) => onCategoryChange(event)}>
        {
          Categories.map((category, categoryIndex) => (
            <option key={categoryIndex} value={category.value}>
              {category.label}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Form;

