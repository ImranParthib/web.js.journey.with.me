const identity = {
  actorName: "Tom Hanks",
  age: 65,
  address: [{ permanentAddress: "USA", currentAddress: "USA" }],
};

const { actorName, age, address } = identity;

console.log(
  `Actor Name: ${actorName}
Age: ${age}
Address: ${address[0].permanentAddress}`
);
