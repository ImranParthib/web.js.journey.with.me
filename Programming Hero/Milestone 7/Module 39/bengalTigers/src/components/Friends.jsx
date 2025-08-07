import { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="text-center p-4">
      <div className="border-4 border-sky-500 rounded-3xl p-6 sm:p-8 md:p-12 w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 m-auto">
        <p className="text-base text-left sm:text-lg md:text-3xl">
          Here are some of my friends:
        </p>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
