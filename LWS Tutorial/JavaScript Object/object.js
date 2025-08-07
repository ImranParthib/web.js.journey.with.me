let car = {
  name: "Fiat",
  model: "500B",
  color: "white",
};

console.log(car);

const person = {
  name: "Imran Parthib",
  Job: "Student",
  age: "24",
  eyeColor: "Black",
};

console.log(person);

const fullName = person.name;

console.log(fullName);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
