// --------------------- CONTACT FORM ---------------------
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMsg").textContent = "✅ Message submitted successfully!";
    document.getElementById("contact-form").reset();
  }
});

// --------------------- TO-DO LIST ---------------------
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = () => renderTasks();

function addTask() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (!text) return;

  const task = {
    id: Date.now(),
    text: text,
    completed: false,
    timestamp: new Date().toLocaleString()
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("tasks");
  const counter = document.getElementById("counter");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onchange = () => toggleComplete(task.id);
    label.appendChild(checkbox);

    const textSpan = document.createElement("span");
    textSpan.textContent = task.text;
    textSpan.contentEditable = true;
    textSpan.onblur = () => updateText(task.id, textSpan.textContent);
    label.appendChild(textSpan);

    const time = document.createElement("div");
    time.className = "timestamp";
    time.textContent = task.timestamp;

    const actions = document.createElement("div");
    actions.className = "actions";
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => deleteTask(task.id);
    actions.appendChild(delBtn);

    li.appendChild(label);
    li.appendChild(time);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

  const remaining = tasks.filter(t => !t.completed).length;
  counter.textContent = `📋 Total: ${tasks.length} | ✅ Completed: ${tasks.length - remaining} | 🕗 Remaining: ${remaining}`;
}

function toggleComplete(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function updateText(id, newText) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, text: newText } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
