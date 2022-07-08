//import { gameDialogue } from "./dialogue";

const startButton = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
//const dialogueElement = document.getElementById("dialogue");
//const nextButton = document.getElementById("next-btn");

//let currentDialogueIndex = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  startPage.classList.add("hide");
  gamePage.classList.remove("hide");
}
