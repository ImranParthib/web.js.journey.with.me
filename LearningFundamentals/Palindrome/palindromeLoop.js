function palindrome(str) {
    let n = str.length;
    let j = n - 1;
    for (let i = 0; i < n / 2; i++){
        if (str[i] == str[j]) {
            return "Palindrome"
        }
        j--;
    }
    return "Not Palindrome";
}

const str = "racecar";

const rslt = palindrome(str);
console.log(rslt);