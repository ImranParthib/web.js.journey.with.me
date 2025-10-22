/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

// Create the context
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
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

  const addUser = async (userData) => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      // Update users state with the returned user object
      setUsers((prev) => [...prev, data.user]);
      return data.user; // Return the created user
    } catch (err) {
      console.error("Error creating user:", err);
      throw err; // Re-throw for component to handle
    }
  };

  const deleteUser = async (userId) => {
    try {
      const res = await fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Remove the deleted user from the state
      setUsers((prev) => prev.filter((user) => user._id !== userId));
      console.log("✅ User deleted successfully!");
    } catch (err) {
      console.error("Error deleting user:", err);
      throw err; // Re-throw for component to handle
    }
  };

  const value = {
    users,
    addUser,
    deleteUser,
    refetchUsers: fetchUsers, // In case we want to refresh the list
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
