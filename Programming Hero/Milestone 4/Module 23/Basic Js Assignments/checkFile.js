// Problem:2  IsJavaScriptFile
function isJavaScriptFile(fileName) {
  if (!fileName.includes(".")) {
    console.log("Please provide a valid file name");
  } else {
    return fileName.endsWith(".js");
  }
}

const fileName = "checkFile.js";
const result = isJavaScriptFile(fileName);
console.log(result); // true
