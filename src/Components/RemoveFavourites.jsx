import React from "react";
import { CgCloseR } from "react-icons/cg";
function RemoveFavourites() {
  return (
    <>
      <span style={{ marginRight: "3px", fontSize: ".75rem" }}>
        Remove from favourites
      </span>
      <CgCloseR />
    </>
  );
}

export default RemoveFavourites;
