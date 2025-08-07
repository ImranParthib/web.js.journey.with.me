class Instructor {
  name;
  designation;
  team;
  location;

  constructor(name, designation, team, location) {
    this.name = name;
    this.designation = designation;
    this.team = team;
    this.location = location;
  }

  feedback(name, comment) {
    console.log(`
      Here is Mr ${name}'s comment
      ${comment}
    `);
  }
}

const webInstructor = new Instructor("Rakib", "WebInstructor", "Web", "Dhaka");
console.log(webInstructor);
webInstructor.feedback("Rakib", "Life is a miracle, no one can predict");
