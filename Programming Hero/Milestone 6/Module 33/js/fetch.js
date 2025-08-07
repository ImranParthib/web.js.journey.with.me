fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

const load = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
};

load();

const user = "https://jsonplaceholder.typicode.com/users";

fetch(user)
  .then((res) => res.json())
  .then((user) => displayUser(user));

let userName = [];
function displayUser(user) {
  const userList = document.getElementById("user-list");
  for (const users of user) {
    const li = document.createElement("li");
    li.textContent = users.name;
    li.setAttribute(
      "style",
      "list-style-type: none; background: #273f43; width:11%;  color:white; margin:10px; padding:5px; border-radius: 5px;"
    );
    userList.appendChild(li);
  }
}
