import React from 'react';

import './search-form.styles.css';

const SearchForm = ({placeholder, handleChange}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchForm;