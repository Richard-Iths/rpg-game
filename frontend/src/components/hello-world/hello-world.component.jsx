import React from "react";
import "./hello-world.styles.scss";

const HelloWorld = ({ message }) => (
  <div className="hello-world">
    <p>{message} </p>
  </div>
);

export default HelloWorld;
