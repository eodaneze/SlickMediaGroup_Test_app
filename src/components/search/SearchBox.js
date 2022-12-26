import React from "react";
import "./SearchBox.css";
const SearchBox = (props) => {
  return (
    <div className="all-search">
      <div className="search-content all-container">
        <label>Search</label>
        <input type="search" value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}/>
      </div>
    </div>
  );
};

export default SearchBox;
