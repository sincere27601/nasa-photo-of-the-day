import React from "react";
import "./App.css";
import { useState } from "react";
import " ./styles.css";

function user({ id }) {
    const [user, setUser] = useState("Guest");
    const fetchUser = (id) => fetch(`https://api.nasa.gov/#apod?api_key=dffHub9O9B7a8PkNwlIGicZTqwQ5NfUcP3QSXtof`)
    .then (response => response.json())
    .then (user => {
        console.log(user);
    });
    return <div className = "user"></div>

}