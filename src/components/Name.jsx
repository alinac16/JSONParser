import React from "react";

const Name = ({ name }) => {
  if (!name) {
    return <div className="warning">Name not found</div>;
  }
  return (
    <div id="name">
      <span>Name of Patient: </span>
      <span>
        {name.map(person => (
          <React.Fragment key={person.family}>
            <span>{`${person.given} ${person.family}`}</span>
          </React.Fragment>
        ))}
      </span>
    </div>
  );
};

export default Name;
