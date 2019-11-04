import React from "react";

const SearchBar = (props) => {
  return (
    <div className="search">
      <form onSubmit={props.getBooks} action="">
        <input onChange={props.searchInput} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
