function removeAnagram(words: string[]): string[] {
    let i = 1;
    while (i < words.length) {
        const prevSorted = words[i - 1].split('').sort().join('');
        const currSorted = words[i].split('').sort().join('');

        if (prevSorted == currSorted) {
            words.splice(i, 1);
           
        }
        else {
            i++;
        }
    }
    return words;
};

const word: string[] = ["abba", "baba", "bbaa", "cd", "cd"];
const res: string[] = removeAnagram(word);

console.log(res);