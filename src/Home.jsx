import { useState, useEffect } from "react";
import "./App.css";
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom';
import { fetchUsers } from './api';


function Home() {
  const [users, setUsers] = useState([]);
  const[search, setSearch] = useState("");
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({name: "", email: ""});
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value});
  };
  const[error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      // .then((res) => res.json())
      // .then((data) => setUsers(data));
   .then(data => setUsers(data))
    .catch(err => console.error(err));

  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRowClick = (id) =>{
    navigate(`/user/${id}`);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if(!newUser.name || !newUser.email){
      setError("Name and email are required!");
      return;
    }

    if (!newUser.email.includes("@") || !newUser.email.includes(".")){
      alert("Please enter a valid email address.");
      return;
    }

    const userToAdd = {
      id: Date.now(),
      name: newUser.name, 
      email: newUser.email,
      company: {name:""},
    };
    setUsers([userToAdd, ...users]);
    setNewUser({name: "", email: ""});
    setError("");

  };


  return (
    <div>
      <div
        id="title"
        style={{ fontFamily: "Arial, sans-serif", color: "rgb(0, 0, 48)" }}
      >
        <h1>User Management</h1>
      </div>

    <form className="newUserForm" onSubmit={handleAddUser} style={{marginBottom:"20px", marginTop:"10px"}}>
      <TextField
        label="Name"
        name = "name"
        value={newUser.name}
        onChange={handleInputChange}
        required>
      </TextField>


      <TextField
        label="Email"
        name = "email"
        value={newUser.email}
        onChange={handleInputChange}
        required>
      </TextField>
      <button className="newUserButton" type="submit">
      + Add User
      </button>
       {error && <p style={{ color: "red" }}>{error}</p>}   
</form>
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
              <tr key={u.id} onClick={() => handleRowClick(u.id)} style={{cursor:"pointer"}}>
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
