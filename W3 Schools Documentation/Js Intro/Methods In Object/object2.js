const entrepreneur = {
    firstName: "Imran",
    lastName: "Parthib",
    age: 24,
    eyecolor: "Black",
    fullName: function () {
        return this.firstName + " " + this.lastName;

    }
};

console.log(entrepreneur.fullName());