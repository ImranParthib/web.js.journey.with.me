const light = document.getElementById("light");

function toggleLight() {
  if (light.src.includes("pic_bulboff.gif")) {
    light.src = "pic_bulbon.gif"; // Turn on the light
  } else {
    light.src = "pic_bulboff.gif"; // Turn off the light
  }
}

// Call the toggleLight function repeatedly every 1000 milliseconds (1 second)
setInterval(toggleLight, 1000);
