import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchUserById } from './api';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserById(id)
    //   .then((res) => res.json())
    //   .then((data) => setUser(data));
    .then(data => setUser(data))
    .catch(err => console.error(err));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>
        <strong>Address:</strong> {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
}

export default UserDetails;
