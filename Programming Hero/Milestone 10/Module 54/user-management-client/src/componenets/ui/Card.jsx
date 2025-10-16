const Card = ({ users, onDelete, onEdit }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {user.name}
          </h3>
          <p className="text-gray-500 mb-4">{user.role}</p>
          <div className="flex justify-center gap-2">
            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-300 p-1 px-3 rounded hover:bg-yellow-400"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-300 p-1 px-3 rounded hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
