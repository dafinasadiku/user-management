export const USERS_API = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const response = await fetch(USERS_API);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const fetchUserById = async (id) => {
  const response = await fetch(`${USERS_API}/${id}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};