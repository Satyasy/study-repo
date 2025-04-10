const body = document.body;
btn1 = document.getElementById("btn1");
btn1.textContent = "Klik Saya!!";
const h3 = document.createElement("h3");
function over() {
  btn1.style.backgroundColor = "aqua";
  btn1.style.border = "none";
  btn1.style.cursor = "pointer";
  h3.style.backgroundColor = "yellow";
  h3.style.textAlign = "center";
  h3.textContent = " Halo Kamu udah masuk di tombolnya loo";
  body.append(h3);
}

function out() {
  btn1.style.backgroundColor = "white";
  btn1.style.border = "2px solid black";
  btn1.style.cursor = "default";
  h3.style.backgroundColor = "aqua";
  h3.textContent = " Halo Kamu udah keluar tombolnya loo";
  body.append(h3);
}
