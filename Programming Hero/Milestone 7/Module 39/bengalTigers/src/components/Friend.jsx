import React from "react";
import PropTypes from "prop-types";

const Friend = ({ friend }) => {
  const {
    name,
    email,
    address: { city },
  } = friend;
  return (
    <ul className="p-3 text-left">
      <li className="text-base sm:text-lg md:text-xl">
        <span className="font-bold">Name:</span> {name}
      </li>
      <li className="text-base sm:text-lg md:text-xl">
        <span className="font-bold">Email:</span> {email}
      </li>
      <li className="text-base sm:text-lg md:text-xl">
        <span className="font-bold">City:</span> {city}
      </li>
    </ul>
  );
};
Friend.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Friend;
