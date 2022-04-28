import React from 'react'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FormStyle } from './styled/FormStyle';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  // get the input
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  // prevent refreshing the page on submit
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} />
        </div>
        {/* <h1>{input}</h1> */}
    </FormStyle>
  )
}

export default Search;