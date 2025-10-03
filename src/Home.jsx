import { useState, useEffect} from "react";

function Home() {
    const[users, setUsers] = useState([]);




useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);


return(
    <div>
        <h1>User Lists</h1>
        <ul>
            {users.map((u) =>(
                <li>
                    {u.name} - {u.email} - {u.company?.name}
                </li>
            ))}
        </ul>
    </div>
);
}


export default Home;