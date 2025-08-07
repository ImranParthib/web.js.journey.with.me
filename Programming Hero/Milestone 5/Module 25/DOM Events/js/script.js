document.getElementsByTagName("button")[0].onclick = function () {
  if (document.getElementsByTagName("h1")[0].style.color == "red") {
    document.getElementsByTagName("h1")[0].style.color = "black";
  } else {
    document.getElementsByTagName("h1")[0].style.color = "red";
  }
};
document.getElementsByTagName("body")[0].style.textAlign = "center";

document.getElementById("post").addEventListener("click", function () {
  const feedback = document.getElementById("feedback").value;

  const p = document.createElement("p");
  p.innerText = feedback;

  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(p);
  document.getElementById("feedback").value = "";
});

 
