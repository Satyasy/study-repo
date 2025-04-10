document.title = "Testing DOM Js";
const body = document.body;
body.append("Ini adalah text dari body.append");

const h1 = document.createElement("h1");
h1.textContent = "Hello, ini adalah text dari h1";
body.append(h1);

const myName = document.createElement("p");
myName.innerHTML = "<marquee> Halo nama saya Aji </marquee>";

const urName = document.createElement("b");
urName.innerText = "<marquee> Halo nama saya Aji </marquee>";

body.append(myName, urName);

const btn1 = document.getElementById("btn-1");
const btn2 = document.querySelector(".btn-2");
const default2 = "Klik Saya!";
btn2.textContent = default2;
btn1.style.border = "none";
function warna() {
  btn1.style.backgroundColor = "black";
  btn1.style.color = "white";
  alert("Warna telah diubah");
}

function mover() {
  btn2.textContent = "Hayuu ngapainn";
  btn2.style.backgroundColor = "red";
}

function oriText() {
  btn2.textContent = default2;
  btn2.style.backgroundColor = "white   ";
}
