/**
 * File: classInheritance.js
 * Created: 17 August 2024
 * Author: Imran Parthib
 * Description: This file demonstrates class inheritance in JavaScript.
 */

// Parent class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display name and age
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Child class
class Student extends Person {
  constructor(name, age, passion, school) {
    super(name, age); // Correctly call the parent constructor with both parameters
    this.passion = passion;
    this.school = school;
  }

  // Method to display student details
  displayStudent() {
    // Call the parent class's display method
    this.display();
    console.log(`Passion: ${this.passion}, School: ${this.school}`);
  }
}

const student_1 = new Student("Rakib", 23, "AI", "DIU");
student_1.displayStudent(); // Call the method to display student details
