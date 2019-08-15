import React, { useState, useEffect } from "react";
import axios from 'axios';
import MainPage from './MainPage';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const StyledDiv = styled.div`
  text-align: center;
  background-color: #282c34;
`;

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=6Fu3IcAxfEKfbX6OMz3Diiynm9IHhy9K9da1o8Oy")
      .then(res => {
        const data = res.data;
        // console.log("NASA DATA:", data);
        setData(data);
      })
      .catch(err => console.log("Server Failed:", err));
  }, []);

  return (
    <StyledDiv>
        <Header dataprops={data}/>
        <MainPage dataprops={data}/>
        <Footer />
    </StyledDiv>
  );
}

export default App;
