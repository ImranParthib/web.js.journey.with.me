const user = {
  userName: "Touhid",
  profile: {
    email: "touhid@gamil.com",
    address: {
      city: "Dhaka",
      country: "Bangladesh", 
    },
  },
};

// Optional Chaining
console.log(`User Name: ${user?.userName}`);
console.log(`Email: ${user?.profile?.email}`);
console.log(`City: ${user?.profile?.address?.city}`);
console.log(`Country: ${user?.profile?.address?.country}`);
