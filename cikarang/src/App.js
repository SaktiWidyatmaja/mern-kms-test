import React, { useEffect, useState } from "react";
import axios from "axios";

import { Typography } from "@mui/material";

import logo from "./logo.svg";
import "./App.css";

function App() {
 const [location, setLocation] = useState("loading");
 const [numVisit, setNumVisit] = useState(0);

 useEffect(() => {
  const getLocation = async () => {
   let result = await axios.get(
     "https://express-hello-world-mocha.vercel.app/visitor"
   );
   setLocation(result.data.your_ip);
   setNumVisit(result.data.visitor_number);
  };

  getLocation();
 }, []);

 return (
  <div className="App">
   <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <Typography variant={"h4"}>Your IP Address is {location}.</Typography>
     <Typography variant={"h5"}>
       This site has been visited {numVisit} times.
     </Typography>
    </header>
   </div>
 );
}

export default App;
