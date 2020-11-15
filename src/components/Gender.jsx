import React from "react";

const Gender = ({ gender }) => {
  if (!gender) {
    return <div className="warning">Gender not found :(</div>;
  }
  return (
    <div id="gender">
      <span>Gender: </span>
      <span>{gender}</span>
    </div>
  );
};

export default Gender;
