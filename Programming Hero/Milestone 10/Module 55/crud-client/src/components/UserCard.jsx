const UserCard = ({ users }) => {
  return (
    <div className="mt-10 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Users List</h3>
      {users.map((user, idx) => (
        <div
          key={user._id || idx}
          className="flex justify-between py-2 px-4 border-b hover:bg-gray-50 transition"
        >
          <span>{idx + 1}</span>
          <span>{user.name}</span>
          <span className="text-gray-500 text-sm">{user.email}</span>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
