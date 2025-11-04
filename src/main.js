const menuButton = document.querySelector("#toggleButton");
const sideBar = document.querySelector("#side-bar");

menuButton.addEventListener("click", () => {
  sideBar.classList.remove("closed");
});

