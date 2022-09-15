import React from "react";

function SearchBox(props) {
  return (
    <div>
      <form>
        <input
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Type to search.."
        />
      </form>
    </div>
  );
}

export default SearchBox;
