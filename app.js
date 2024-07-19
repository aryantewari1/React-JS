import React from "react";
import ReactDOM from "react-dom";


//functional components 
const heading = <h1>hey this is another thing</h1>
const HeadingComponent = () => (
  <div> <TitleComponent/>
  </div> 
)
console.log(<HeadingComponent/>)
const TitleComponent = () => (
  <h1> hey this h1</h1> 
)
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(HeadingComponent());
