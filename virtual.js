const button = document.getElementById("nav-btn");
const nav = document.getElementById("navigation");

console.log(button.innerHTML);
console.log(nav);

button.onclick = function myFunction() {
  nav.classList.toggle("hideMe");
  if (button.innerHTML === "MENU") {
    button.innerHTML = "✖";
  }
  else {
    button.innerHTML = "MENU";
  }
}
