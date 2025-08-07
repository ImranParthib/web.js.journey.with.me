let chessBoard = ``;
for (let i = 1; i <= 8; i++) {
  for (let j = 0; j < 4; j++) {
    if (i % 2 === 0) {
      chessBoard += " ";
      chessBoard += "#";
    } else {
      chessBoard += "#";
      chessBoard += " ";
    }
  }
  chessBoard += "\n";
}
console.log(chessBoard);
