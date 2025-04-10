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

const theme = document.getElementById("theme");
document.body.classList.add("light");
theme.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  if (isLight) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    console.log("Dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    console.log("Light");
  }
  localStorage.setItem("theme", document.body.classList[0]);
});

document.addEventListener("DOMContentLoaded", () => {
  const themeSave = localStorage.getItem("theme");
  document.body.classList.add(themeSave);
  document.body.classList.remove(themeSave === "light" ? "dark" : "light");
  theme.textContent = themeSave === "light" ? "Tryb ciemny" : "Tryb jasny";
});

const list2 = [-3, 5, 6]; //sprawdź czy chociaż jedna wartość z tej listy jest ujemna
console.log(list2.some((el) => {
  return el < 0;
})
);

const namesList = ["Ania", "Hania", "Frania"];
const reducesString = namesList.reduce((acc,el,index)=> {
  console.log(index);
  if(index < namesList.lenght -1){
    return acc +el+ ", ";
  }else{
    return acc + el;
  }
}, "");
console.log(reducesString);
