/*
<div id = parentDiv> 
  <div id = child div> 
        <ol> 
            <li>
            <li>
        </ol>
  <p child Para> 
  <h3 childHeading> 
</div>
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
const parentDiv = React.createElement("div", 
  { 
    id:"parentDiv"
  },
  [React.createElement("div",
    {
      id:"childDiv"
    },
    React.createElement("ol",{},
      [React.createElement("li",{},"this is first Li"),React.createElement("li",{},"this is second Li")]
    )
  ),React.createElement("p",
    {
      id:"childPara"
    },
    "this is para"
  ), React.createElement("h3",
    {
      id: "childHeading"
    },
    "this is heading"
  )]
)
root.render(parentDiv);


