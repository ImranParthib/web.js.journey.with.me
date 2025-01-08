function palindrome(str) {
   
    let rev = "";
    for (let i = str.length-1; i >= 0 ; i--){
        rev += str[i];    
    }
    console.log(rev);
    if (rev == str) {
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }
}
let str = "racecar";
const rslt = palindrome(str);
console.log(rslt);

 