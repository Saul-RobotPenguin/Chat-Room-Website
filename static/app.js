const socket = io();

const chat = document.querySelector(".chat-form");
const chatInput = document.querySelector(".chat-input");

const chatDump = document.querySelector(".chat-dump");

// function joinUser() {
//   let userName = prompt("Whats Your Username?");
//   const user = {
//     username: userName,
//   };
//   users.push(user);
//   console.log(user.username);
//   return user;
// }

chat.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("chat", chatInput.value);
  chatInput.value = " ";
});

const render = ({ message, id }) => {
  const div = document.createElement("div");

  div.classList.add("chat-message");

  if (id === socket.id) {
    div.classList.add("chat-message--user");
  }

  div.innerText = message;

  chatDump.appendChild(div);
};

socket.on("chat", (data) => {
  render(data);
});

// joinUser();
