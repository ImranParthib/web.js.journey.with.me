const solve = (n, k, participantScores) => {
  let count = 0;
  for (let participant of participantScores) {
    if (participant >= k) {
      count++;
    }
  }

  return count;
};

const n = 8;
const k = 5;
const participantScores = [10, 9, 8, 7, 7, 7, 5, 5];

console.log(solve(n, k, participantScores));
