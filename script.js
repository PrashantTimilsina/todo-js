"use strict";
function addTask() {
  const task = document.querySelector(".task");
  const container = document.querySelector(".container");
  const plan = document.querySelector(".plan");
  const search = document.querySelector(".search").value;
  const input = document.createElement("input");
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

  edit.addEventListener("click", () => {
    if (edit.textContent === "Edit") {
      input.disabled = false;
      edit.textContent = "Save";
      input.focus();
    } else {
      input.disabled = true;
      edit.textContent = "Edit";
    }
  });
  clear.addEventListener("click", () => {
    li.remove();
  });
}
function handleKeyPress(e) {
  if (e.code === "Enter") {
    addTask();
  }
}
document.querySelector(".search").addEventListener("keydown", handleKeyPress);
document.querySelector(".search").setAttribute("spellcheck", "false");
