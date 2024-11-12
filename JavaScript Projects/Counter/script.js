const countElement = document.getElementById("count");

let count = 100;
function updateCountDown() {
    countElement.textContent = count;
    count--;
    if (count < 0) {
        clearInterval(interValId);
    }
}
updateCountDown();
const interValId = setInterval(updateCountDown, 1000);
