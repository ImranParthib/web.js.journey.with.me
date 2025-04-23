var firstTerm = 0;
var secondTerm = 1;
var lastTerm;
lastTerm = firstTerm + secondTerm;
var n = 20;
console.log(firstTerm, secondTerm);
var fibonacci = "";
for (var i = 0; i < n; i++) {
    firstTerm = secondTerm;
    secondTerm = lastTerm;
    lastTerm = firstTerm + lastTerm;
    fibonacci += lastTerm;
}
console.log(lastTerm);
