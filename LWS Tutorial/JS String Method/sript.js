let str = "Apple, Banana, Kiwi";
console.log(str.length);
console.log(str.slice(0, 19));

let part = str.substr(6, 7);
console.log(part);

//? Replacing String Content

let wordCupCount = "Argentina Won Two World Cup in Football";
let updatedCup = wordCupCount.replace("Two", "Three");
console.log(updatedCup);
console.log(wordCupCount.charCodeAt(0));

let myName = "Imran Parthib";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let quotes = "Life is a Mess";
let myWords = quotes.split(" ");
console.log(myWords);
let n = myWords.length;
let fullQuotes =" ";
for (let i = 0; i < n; i++) {
  fullQuotes += " "+ myWords[i];
}
console.log(fullQuotes);
