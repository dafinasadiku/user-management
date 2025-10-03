import { useState, useEffect } from "react";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User Lists</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
           {users.map((u) => (
            <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.company?.name}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
