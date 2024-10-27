"use strict";
const task = document.querySelector(".task");
const container = document.querySelector(".container");
function addTask(item) {
  const input = document.createElement("input");
  const plan = document.querySelector(".plan");
  const search = item || document.querySelector(".search").value;
  input.value = search;
  input.disabled = true;
  input.setAttribute("spellcheck", "false");

  if (search === "") {
    plan.style.display = "block";
    return;
  } else {
    plan.style.display = "none";
  }

  task.style.display = "block";
  const li = document.createElement("li");
  li.appendChild(input);
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  edit.style.color = "#B76CCF";
  edit.style.background = "transparent";
  edit.style.border = "none";
  edit.style.outline = "none";
  edit.style.fontSize = "1.3rem";

  li.appendChild(edit);

  const clear = document.createElement("button");

  clear.textContent = "Delete";
  clear.style.color = "#B76CCF";
  clear.style.background = "transparent";
  clear.style.border = "none";
  clear.style.outline = "none";
  clear.style.fontSize = "1.3rem";
  li.appendChild(clear);

  container.appendChild(li);
  document.querySelector(".search").value = "";
  saveTasks();

  edit.addEventListener("click", () => {
    if (edit.textContent === "Edit") {
      input.disabled = false;
      edit.textContent = "Save";
      input.focus();
    } else {
      input.disabled = true;
      edit.textContent = "Edit";
      saveTasks();
    }
  });
  clear.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });
}
function handleKeyPress(e) {
  if (e.code === "Enter") {
    addTask();
  }
}
document.querySelector(".search").addEventListener("keydown", handleKeyPress);
document.querySelector(".search").setAttribute("spellcheck", "false");
function saveTasks() {
  const tasks = Array.from(container.querySelectorAll("input"))
    .map((input) => input.value)
    .filter((value) => value.trim() !== "");
  if (tasks.length) {
    localStorage.setItem("item", JSON.stringify(tasks));
  } else {
    localStorage.removeItem("item");
  }
}
function loadTasks() {
  const loadTask = localStorage.getItem("item");
  const data = JSON.parse(loadTask);
  if (data) data.forEach((item) => addTask(item));
}
window.addEventListener("load", loadTasks);
