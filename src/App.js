import React from "react";
import "./App.css";
import { useState } from "react";

const axios = required('axios');

function getNasaData() {
  axios.get('http://api.github.com/users/sincere27601')
  .then(res => {
    console.log(err);
  });
}

function User({ id }) {
  const [user, setUser] = useState("");
  const fetchUser = (id) =>
  fetch(``)
}


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
