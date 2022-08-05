function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector('[type="number"]');


function createBoxes() {


  const number = input.value;
  const items = [];

  for (let i = 1; i <= number; i += 1) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const color = getRandomHexColor()
    p.textContent = "Илья";
    div.appendChild(p)
    p.style.fontSize = i * 2 + 1 + "px"
    div.style.backgroundColor = color;
    div.style.width = i * 10 + 20 + "px";
    div.style.height = i * 10 + 20 + "px";

    items.push(div);
  }

  boxes.append(...items);
}

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
