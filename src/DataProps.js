import React from "react";
import "./App.css";
import { useState } from "react";
import " ./styles.css";

function App(props){
    const friends = props.friends;
    return <div> Hello, { friends[0].name}!How are you?</div>;

}


