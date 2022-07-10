const startButton = document.getElementById("start-btn");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const dialogueElement = document.getElementById("dialogue");
const nextButton = document.getElementById("next-btn");
const annoyingPlaceholder = document.getElementById("invisible");
const choiceOne = document.getElementById("choice-one");
const choiceTwo = document.getElementById("choice-two");
const clickerSection = document.getElementById("clicker-section");
const clickerButton = document.getElementById("clicker-btn");
const clickNumber = document.getElementById("click-number");

let currentDialogueIndex = 0;
let clickCount = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentDialogueIndex++;
  setNextDialogue();
});
choiceOne.addEventListener("click", happyResponse);
clickerButton.addEventListener("click", () => {
  clickCount++;
  showClicks();
});

function startGame() {
  startPage.classList.add("hide");
  gamePage.classList.remove("hide");
  setNextDialogue();
}

function setNextDialogue() {
  if (currentDialogueIndex == 4) {
    startClicker();
  } else if (currentDialogueIndex == 3) {
    showChoices();
  } else {
    showDialogue(gameDialogue[currentDialogueIndex]);
  }
}

function showDialogue(text) {
  dialogueElement.innerText = text.text;
}

function showChoices() {
  nextButton.classList.add("hide");
  annoyingPlaceholder.classList.add("hide");
  choiceOne.classList.remove("hide");
  choiceTwo.classList.remove("hide");
}

function happyResponse() {
  showDialogue(gameDialogue[currentDialogueIndex]);
  nextButton.classList.remove("hide");
  annoyingPlaceholder.classList.remove("hide");
  choiceOne.classList.add("hide");
  choiceTwo.classList.add("hide");
}

function startClicker() {
  clickerSection.classList.remove("hide");
  nextButton.classList.add("hide");
  dialogueElement.classList.add("hide");
}

function showClicks() {
  clickNumber.innerText = clickCount;
}

const gameDialogue = [
  { text: "Hello." },
  { text: "So..." },
  { text: "Are you here to teach me Vue?" },
  { text: "Thank you!" },
];
