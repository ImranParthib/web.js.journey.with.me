/*
Author: Imran Parthib
Date: June 7, 2025
*/
function getBorders(s) {
    const n = s.length;
    const pi = new Array(n).fill(0);
    const result = [];

    // Compute prefix function
    for (let i = 1; i < n; i++) {
        let j = pi[i - 1];
        while (j > 0 && s[i] !== s[j]) {
            j = pi[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
        }
        pi[i] = j;
    }

    // Traverse back from the last pi value
    let k = pi[n - 1];
    while (k > 0) {
        result.push(k);
        k = pi[k - 1];
    }

    result.sort((a, b) => a - b); // ascending order
    return result;
}

// Input
const input = "abcababcab";
const borderLengths = getBorders(input);

// Output
console.log(borderLengths.join(' ')); // Output: 2 5

