const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  let chatContent = className === "outgoing" ? <p>${message}</p> : '<span class="material-symbols-outlined">smart_toy</span>><p>${message}</p>';
  charLi.innerHTML = chatContent;
  return chatLi;
}

const handleChat = () => {
  userMessage = chatInput.ariaValueMax.trim();
  if(!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing")) ;
}

sendChadBtn.addEventListener("click", handleChat);