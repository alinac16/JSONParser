import React from "react";

const Conditions = ({ conditions }) => {
  if (!conditions) {
    return <div className="warning">Conditions not found :(</div>;
  }
  return (
    <>
      <div id="no-of-condtions">
        <span>Number of conditions they have: </span>
        <span>{conditions.length}</span>
      </div>
      <div id="list-of-conditions">
        <p>List of all conditions: </p>
        <ul>
          {conditions.map(condition => (
            <li key={condition}>{condition}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Conditions;
