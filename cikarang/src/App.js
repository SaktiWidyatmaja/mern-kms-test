import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Typography} from '@mui/material'
import logo from './logo.svg';
import './App.css';

function App() {
  const [location, setLocation] = useState("loading")

  useEffect(() => {
    const getLocation = async () => {
      let result = await axios.get("http://localhost:3001/location")
      setLocation(result.data.location)
    }

    getLocation()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant={"h4"}>
          {location}
        </Typography>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
