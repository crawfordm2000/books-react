import React from "react";

const SearchBar = (props) => {
  return (
  
    <div className="search">
      <form className="search-bar" onSubmit={props.getBooks} >
        <input className="input-field" onChange={props.searchInput} placeholder="search books" type="text" />
        <button type="submit" className="searchButton zoom">Search</button>
      </form>
    </div>
    
  );
};

export default SearchBar;

