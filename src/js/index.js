const startButton = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const dialogueElement = document.getElementById("dialogue");
const nextButton = document.getElementById("next-btn");
const annoyingPlaceholder = document.getElementById("invisible");
const choiceOne = document.getElementById("choice-one");
const choiceTwo = document.getElementById("choice-two");

let currentDialogueIndex = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentDialogueIndex++;
  setNextDialogue();
});

function startGame() {
  startPage.classList.add("hide");
  gamePage.classList.remove("hide");
  setNextDialogue();
}

function setNextDialogue() {
  if (currentDialogueIndex == 3) {
    firstChoice();
  } else {
    showDialogue(gameDialogue[currentDialogueIndex]);
  }
}

function showDialogue(text) {
  dialogueElement.innerText = text.text;
}

function firstChoice() {
  nextButton.classList.add("hide");
  annoyingPlaceholder.classList.add("hide");
  choiceOne.classList.remove("hide");
  choiceTwo.classList.remove("hide");
}

const gameDialogue = [
  { text: "Hello." },
  { text: "So..." },
  { text: "Are you here to teach me Vue?" },
];
