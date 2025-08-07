import React, { useEffect, useState } from "react";
import Card from "../ui/Card";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        User List
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
