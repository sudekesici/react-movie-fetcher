import React from 'react';
import { Categories } from '../constants/enums';


function Form({ onCategoryChange }) {
  return (
    <div className='form'>
      <select className='select' onChange={(event) => onCategoryChange(event)}>
        {
          Categories.map((category, categoryIndex) => (
            <option selected={category.value === "classic"} key={categoryIndex} value={category.value}>
              {category.label}
            </option>
          ))
        }
      </select>
    </div>
  );
}

export default Form;

