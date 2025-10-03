import { React, useState } from "react";
import Home from "./Home";
import TextField from '@mui/material/TextField';
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserDetails from "./UserDetails";

function App(){
  const[search, setSearch] = useState("");
  return (
    // <div>
    //   <div><Home/></div>
    //   <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/user/:id" element={<UserDetails/>}></Route>
          </Routes>
        </Router>
    //   </div>
    // </div>
  );
}


export default App;