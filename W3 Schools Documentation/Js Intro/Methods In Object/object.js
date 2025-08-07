const person = {
  firstName: "Imran",
  lastName: "Parthib",
  id: 211,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());