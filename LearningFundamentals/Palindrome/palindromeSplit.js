function palindrome(str) {
    const rev = str.split("").reverse().join("");
    if (rev === str) {
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }
}

const str = "racecar";
const rslt = palindrome(str);
console.log(rslt);
 

// let str = "racecar";
// let rev = str.split("").reverse().join("");
// console.log(rev);
// console.log(str);
// if (rev == str) {
//   console.log("true");
// } else {
//     console.log("false");
// }
