import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from './styled/FormStyle';

function Search() {
  return (
    <FormStyle>
        <div>
            <FaSearch/>
            <input type="text"/>
        </div>
    </FormStyle>
  )
}

export default Search