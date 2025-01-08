function palindrome(str) {
    let n = str.length;
    if (str[0] == str[n - 1]) {
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }

}
const val = "RANAR";
const fDicis = palindrome(val);
console.log(fDicis);