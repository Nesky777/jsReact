const container = document.getElementById("container");
const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.style.color = "red";
  message.textContent = "Hello world!";
});

const addBtn = document.getElementById("addBtn");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
  const inputValue = itemInput.value;
  if (inputValue !== "") {
    const li = document.createElement("li");
    li.textContent = inputValue;
    itemList.appendChild(li);
    itemInput.value = "";
  }
});

let clickCount = 0;
const clickCounter = document.getElementById("clickCounter");

clickCounter.addEventListener("click", function () {
  clickCount++;
  clickCounter.textContent = `Liczba kliknięć: ${clickCount}`;
});
