import React, { useState } from "react";
import Gender from "./Gender";
import Name from "./Name";
import Organization from "./Organization";
import Conditions from "./Conditions";

import { isJSON } from "../utils/utils";

const Page = props => {
  // state to save uploaded file contents as JSON
  const [file, setFile] = useState(null);
  // state to control visibility of parsed JSON
  const [show, setShow] = useState(false);

  // handler to read from file input
  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      // checks if input file is json
      if (isJSON(e.target.result)) {
        setFile(JSON.parse(e.target.result));
      } else {
        alert("Only accepts JSON files");
      }
    };
  };

  // handler to show/hide parsed Content
  const showHandler = event => {
    setShow(prev => !prev);
  };

  return (
    <>
      <div>
        <h1 id="page-title">Select a JSON file to parse</h1>
        <div id="input-btn">
          <input type="file" onChange={handleChange} />
          <button disabled={!file} onClick={showHandler} id="parse-btn">
            {!show ? "Parse" : "Hide"}
          </button>
        </div>
      </div>
      <div>{show && <ParsedContent file={file} />}</div>
    </>
  );
};

const ParsedContent = ({ file }) => {
  if (!file.identifier) return <div>No Identifier</div>;
  const identifier = file.identifier;
  return (
    <div id="parsed-content">
      {identifier.map(identity => (
        <React.Fragment key={identity.value}>
          <Name key={identity.value} name={identity.name} />
          <Organization managingOrganization={identity.managingOrganization} />
          <Gender gender={identity.gender} />
          <Conditions conditions={identity.conditions} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
