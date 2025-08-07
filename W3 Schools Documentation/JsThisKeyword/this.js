const aboutMe = {
  firstname: "Imran",
  lastName: "Parthib",
  fullName: function () {
    return `${this.firstname} ${this.lastName}`;
    // return this.firstname + " " + this.lastName; we can use this also`
  },
};

console.log(aboutMe.fullName()); // Output: Imran ParthibC

// When used alone, this refers to the global object. In a browser, it refers to window.
console.log(this); // Output: [object Window]

// In a function, this refers to the global object. In strict mode, it is undefined.
function showThis() {
  console.log(this);
}

showThis(); // Output: [object Window]

("use strict");
function showThisStrict() {
  console.log(this);
}

showThisStrict(); // Output: undefined

// *In an event, this refers to the element that received the event.
/*< !DOCTYPE html >
  <html>
    <body>

      <button onclick="showElement(this)">Click me</button>

      <script>
        function showElement(element) {
          console.log(element); // Output: <button>Click me</button>
}
      </script>

    </body>
  </html>
 */
