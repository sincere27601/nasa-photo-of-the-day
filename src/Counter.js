import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function counter ({setCount}) {
    return <h2>The count is {2}!</h2>;
}
function App() {
    const[isCounterVisible, setCounterVisible] = useState(false);
    const[count, setCount] = useState(0);

    return (
        <div className="app">
            <button onClick={e => setIsCounterVisible(true)}>Mount counter</button>
            <button onClick={e => setIsCounterVisible(false)}>Destroy counter</button>
            <button onClick={ e => setCount(count + 1)}>Increase count</button>
            </div>
    );
}
    const [count, setCount] = useState(initialCount);
    return <h2></h2>
        
