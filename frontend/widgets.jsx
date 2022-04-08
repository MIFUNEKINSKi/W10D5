// entry file
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");

  // const hello = <h1>Hello from react</h1>;
  ReactDOM.render(<Root/>, main); 
})
