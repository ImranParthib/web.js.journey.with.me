import { useState, useEffect } from "react";
import Card from "../ui/Card";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null); // For edit mode

  // Fetch users from server
  const fetchUsers = () => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading users...</p>
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  // Add new user
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const role = e.target.role.value.trim();
    if (!name || !role) return alert("Fill out both fields");

    const user = { name, role };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        e.target.reset();
      });
  };

  // Delete user
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => setUsers(users.filter((u) => u.id !== id)));
  };

  // Edit user
  const handleEdit = (user) => {
    setEditingUser(user); // Fill form with existing data
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const role = e.target.role.value.trim();
    if (!name || !role) return alert("Fill out both fields");

    fetch(`http://localhost:3000/users/${editingUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, role }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(users.map((u) => (u.id === data.id ? data : u)));
        setEditingUser(null);
        e.target.reset();
      });
  };

  return (
    <div className="text-center">
      <form
        onSubmit={editingUser ? handleUpdateUser : handleAddUser}
        className="my-6"
      >
        <input
          name="name"
          type="text"
          className="border rounded-lg p-2 m-2"
          placeholder="User Name"
          defaultValue={editingUser?.name || ""}
        />
        <input
          name="role"
          type="text"
          className="border rounded-lg p-2 m-2"
          placeholder="Role"
          defaultValue={editingUser?.role || ""}
        />
        <input
          type="submit"
          value={editingUser ? "Update User" : "Add User"}
          className="border rounded-lg p-2 m-2 bg-sky-300 cursor-pointer hover:bg-sky-400 transition"
        />
        {editingUser && (
          <button
            type="button"
            className="border rounded-lg p-2 m-2 bg-red-300 hover:bg-red-400"
            onClick={() => setEditingUser(null)}
          >
            Cancel
          </button>
        )}
      </form>

      <h1 className="max-w-4xl mx-auto text-center text-2xl mb-8 font-semibold">
        Users ({users.length})
      </h1>

      <Card users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default Users;
