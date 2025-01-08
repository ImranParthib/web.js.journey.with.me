function fibo(terms) {
  let term1 = 0;
  let term2 = 1;
 
    if (terms < 0) {
        console.log("Please Enter a Positive number of terms:")
    }
  
  let result = term1 + "," + term2;
  let lastTerm = term1 + term2;

  for (let i = 0; i < terms; i++) {
    result += "," + lastTerm;
    term1 = term2;
    term2 = lastTerm;
    lastTerm = term1 + term2;
  }
  console.log(result);
}
let totalTerms = 5;
fibo(totalTerms);
