import React from "react";

function SearchBox({ searchValue, setSearchValue }) {
  return (
    <form>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Type to search.."
      />
    </form>
  );
}

export default SearchBox;
