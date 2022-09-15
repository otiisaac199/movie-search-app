import React from "react";
import { AiFillHeart } from "react-icons/ai";

function AddFavourites() {
  return (
    <>
      <span style={{ marginRight: "3px", fontSize: ".75rem" }}>
        Add to Favourites
      </span>
      <AiFillHeart style={{ color: "red" }} />
    </>
  );
}

export default AddFavourites;
