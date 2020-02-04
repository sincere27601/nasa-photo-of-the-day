import React, { useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

function Counter({ count }) {
    useEffect(() => {
        console.log('FOO EFFECT');
        const listener = e => console.log('click');
    document.addEventListener('click', listener);
    };

    useEffect(() => {
        console.log('BAR EFFECT');
        return () => console.log('CLEAN UP BAR');
    }, [1]);
    
    return <h2>The Count is {2}!</h2>
    }
    function App( {})
