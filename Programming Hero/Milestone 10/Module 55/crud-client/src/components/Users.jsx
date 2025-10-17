import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Fetch users once on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      // Update users state immediately
      setUsers((prev) => [...prev, data]);
      e.target.reset();
    } catch (err) {
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-12 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
        Add Users
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name"
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all shadow-md hover:shadow-lg"
        >
          Add User
        </button>
      </form>

      {/* Pass users state to UserCard */}
      <UserCard users={users} />
    </div>
  );
};
export default Users;
