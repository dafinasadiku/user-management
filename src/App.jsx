import { React, useState } from "react";
import Home from "./Home";
import TextField from '@mui/material/TextField';
import './App.css'

function App(){
  return (
    <div>
      <div className="search">
        <TextField id="textField" variant="outlined" fullWidth label="Search" >
          
        </TextField>
      </div>
      <div><Home /></div>
    </div>
  );
}


export default App;