import React from "react";
import "./App.css";
import { useState } from "react";
import " ./styles.css";


function stars() {
  const [isStarslit, setIsStarsLit] = useState
  if (isStarslit){
    return <div> The stars are Litty </div>
  }
   return <div> The stars have blackholes </div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<stars />, rootElement);
