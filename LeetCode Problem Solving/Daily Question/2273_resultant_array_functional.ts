function removeAnagrames(words: string[]): string[] {
    let result: string[] = [words[0]];

    for (let i = 0; i < words.length; i++) {
        const prev = result[result.length - 1].split('').sort().join('');
        const curr = words[i].split('').sort().join('');

        if (curr !== prev) {
            result.push(words[i]);
        }
    }
    return result;
};

const wordss: string[] = ["abba", "baba", "bbaa", "cd", "cd"];
const rese: string[] = removeAnagram(wordss);

console.log(res);