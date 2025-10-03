import { React, useState } from "react";
import Home from "./Home";
import TextField from '@mui/material/TextField';
import './App.css'

function App(){
  const[search, setSearch] = useState("");
  return (
    <div>
      <div className="search">
        <TextField id="textField" variant="outlined" fullWidth label="Search"
        value={search} onChange={(e) => setSearch(e.target.value)} >
        </TextField>
      </div>
      <div><Home search={search} /></div>
    </div>
  );
}


export default App;