/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    const result = [words[0]];

    for (let i = 1; i < words.length; i++) {
        const prevSorted = result[result.length - 1].split('').sort().join('');
        const currSorted = words[i].split('').sort().join('');

        if (currSorted !== prevSorted) {
            result.push(words[i]);
        }
    }
    return result;
};

const words = ["a", "b", "c", "d", "e"]
const result = removeAnagrams(words);
console.log(result);