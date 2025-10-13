/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {

    let i = 1;

    while (i < words.length) {
        let prev = words[i - 1].split('').sort().join('');
        let curr = words[i].split('').sort().join('');

        if (prev == curr) {
            words.splice(i, 1);
        }
        else {
            i++;
        }
    }
    return words;
};

const words = ["abba", "baba", "bbaa", "cd", "cd"]
const result = removeAnagrams(words);
console.log(result);