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

const gameDialogue = [
  { text: "Hello." },
  { text: "So..." },
  { text: "Are you here to teach me Vue?" },
  { text: "Thank you!" },
];

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
  document.getElementById("img-happy").classList.remove("hide");
  document.getElementById("img-neutral").classList.add("hide");
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
  clickMilestones();
}

function clickMilestones() {
  switch (true) {
    case clickCount == 25:
      document.getElementById("img-happy").classList.add("hide");
      document.getElementById("img-vg1").classList.remove("hide");
      break;

    case clickCount == 50:
      document.getElementById("img-vg1").classList.add("hide");
      document.getElementById("img-vg2").classList.remove("hide");
      break;

    case clickCount == 75:
      document.getElementById("img-vg2").classList.add("hide");
      document.getElementById("img-vg3").classList.remove("hide");
      break;

    case clickCount == 100:
      goodEnding();
      break;
  }
}

function goodEnding() {
  gamePage.classList.add("hide");
}
