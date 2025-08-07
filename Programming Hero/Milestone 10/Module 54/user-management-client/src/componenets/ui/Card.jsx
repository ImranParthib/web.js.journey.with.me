import React from "react";

const Card = ({ user }) => {
  return (
    <div className="max-w-sm w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center">
        <p className="text-sm text-gray-500">User ID: {user.id}</p>
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
      </div>
    </div>
  );
};

export default Card;
