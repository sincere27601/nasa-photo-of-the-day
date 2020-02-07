import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import " ./styles.css";
import Axios from"axios";

//function user({ id }) {
    //const [user, setUser] = useState("Guest");
    //const fetchUser = (id) => fetch(`https://api.nasa.gov/#apod?api_key=dffHub9O9B7a8PkNwlIGicZTqwQ5NfUcP3QSXtof`)
    //.then (response => response.json())
    //.then (user => {
      //  console.log(user);
    //});
    //return <div className = "user"></div>

//} const rootElemennt = document.getElementById("root");
//ReactDOM.render(<app friends={siths} />, rootElement);

useEffect(() => {
    console.log("fire effect");
    Axios
        .get(`https://api.nasa.gov/#apod?api_key=dffHub9O9B7a8PkNwlIGicZTqwQ5NfUcP3QSXtof`)
        .then(response => {
            console.log("Set new star data");
            setStarData(response.data.message);
        })

        .catch(error => console.log(error));
}, [fire]);
      
    console.log("render star data state, starData");