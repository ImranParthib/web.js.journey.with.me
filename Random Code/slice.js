let paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(paragraph.length);
if(paragraph.length > 50) {
    let shortParagraph = paragraph.slice(0, 50);
    console.log(shortParagraph.length)
  console.log(shortParagraph);
} else {
    console.log(paragraph);
}
console.log(paragraph.slice(31)); // over the lazy dog. If the dog barked, was it really lazy?
console.log(paragraph.slice(4, 19)); // quick brown fox
