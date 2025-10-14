const Card = ({ users }) => {
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
          <p className="text-gray-500">{user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
