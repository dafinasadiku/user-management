import { useState, useEffect } from "react";
import "./App.css";
import TextField from '@mui/material/TextField';


function Home() {
  const [users, setUsers] = useState([]);
  const[search, setSearch] = useState("");
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div
        id="title"
        style={{ fontFamily: "Arial, sans-serif", color: "rgb(0, 0, 48)" }}
      >
        <h1>User Management</h1>
      </div>
         <div className="search">
                <TextField id="textField" variant="outlined" fullWidth label="Search"
                value={search} onChange={(e) => setSearch(e.target.value)} >
                </TextField>
              </div>
      <div className="table-container">
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
