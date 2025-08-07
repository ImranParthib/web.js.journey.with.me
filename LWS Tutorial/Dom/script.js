const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const animateButton = document.getElementById("animateButton");

// Function to draw the triangle
function drawTriangle(x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = "lightgreen";
  ctx.fill();
}

// Function to animate the triangle
function animateTriangle() {
  let frameCount = 0;
  const maxFrameCount = 100;

  function animate() {
    frameCount++;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the position of the triangle based on frame count
    const x1 = 100 + frameCount;
    const y1 = 250 + frameCount;
    const x2 = 250;
    const y2 = 170;
    const x3 = 330 - frameCount;
    const y3 = 300 - frameCount;

    // Draw the triangle
    drawTriangle(x1, y1, x2, y2, x3, y3);

    // Request next frame if not reached maximum frame count
    if (frameCount < maxFrameCount) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// Add event listener to the button
animateButton.addEventListener("click", animateTriangle);
