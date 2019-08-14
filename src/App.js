import React, { useEffect, useState } from "react";
import "./App.css";
import Card from './Card';
import axios from 'axios';

function App() {

  const [api, setapi] = useState();

  console.log('Api Results:', api);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/api.html#apod')
      .then(res => {
        console.log(res);
        const results = res.data.results
        setapi(results);
      })
      .catch(err => {
        console.log('Sorry Try Again Later', err);
      })
  }, [])


  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
