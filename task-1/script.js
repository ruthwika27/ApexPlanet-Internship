function showMessage() {
  alert("Thanks for visiting my page! 😊");
}

function showTime() {
  const now = new Date();
  alert("Current Time: " + now.toLocaleTimeString());
}

function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

// Typing Animation
const text = "Welcome to My Web Page";
let index = 0;
function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 80);
  }
}
document.getElementById("typing-text").textContent = "";
typeText();

// Quote of the Day
const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler"
];
document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
