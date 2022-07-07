const startButton = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hide");
}
