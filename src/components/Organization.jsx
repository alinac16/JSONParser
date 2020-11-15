import React from "react";

const Organization = ({ managingOrganization }) => {
  if (!managingOrganization) {
    return <div className="warning">Organization not found :(</div>;
  }
  return (
    <div id="organization">
      <span>Organization name: </span>
      <span>{managingOrganization.display}</span>
    </div>
  );
};

export default Organization;
