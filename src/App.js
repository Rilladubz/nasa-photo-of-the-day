import React, { useState, useEffect } from "react";
import axios from 'axios';
import MainPage from './MainPage';
import Header from './header';
import "./App.css";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=6Fu3IcAxfEKfbX6OMz3Diiynm9IHhy9K9da1o8Oy")
      .then(res => {
        const data = res.data;
        console.log("NASA DATA:", data);
        setData(data);
      })
      .catch(err => console.log("Server Failed:", err));
  }, []);

  return (
    <div className="App">
        <Header />
        <MainPage />
    </div>
  );
}

export default App;
