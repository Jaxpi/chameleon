// --- GAME STATE ---
let playerCount = 4;
let players = [];
let chameleonIndex = null;
let secretCoordinate = null; // { letter: 'A'-'E', number: 1-5 }
let allViewed = false;

let usedBoardIndices = [];
let currentBoardIndex = null;

// --- DOM ELEMENTS ---
const playerCountInput = document.getElementById("player-count-input");
const setPlayersBtn = document.getElementById("set-players-btn");
const playerButtonsContainer = document.getElementById("player-buttons");

const revealBtn = document.getElementById("reveal-btn");
const boardBtn = document.getElementById("board-btn");

const playerModal = document.getElementById("player-modal");
const playerViewText = document.getElementById("player-view-text");
const closePlayerModal = document.querySelector(".close-modal");
const hidePlayerViewBtn = document.getElementById("hide-player-view-btn");

const revealModal = document.getElementById("reveal-modal");
const revealText = document.getElementById("reveal-text");
const closeRevealModal = document.getElementById("close-reveal-btn");
const closeRevealX = document.querySelector(".close-reveal-modal");

const boardModal = document.getElementById("board-modal");
const closeBoardX = document.querySelector(".close-board-modal");
const boardCategoryTitle = document.getElementById("board-category-title");
const boardGridBody = document.getElementById("board-grid-body");
const newBoardBtn = document.getElementById("new-board-btn");

// --- UTILITIES ---
const letters = ["A", "B", "C", "D", "E"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomCoordinate() {
  const letter = letters[getRandomInt(0, letters.length - 1)];
  const number = getRandomInt(1, 5);
  return { letter, number };
}

function pickRandomChameleonIndex() {
  return getRandomInt(0, playerCount - 1);
}

// --- PLAYER SETUP ---
function createPlayerButtons() {
  playerButtonsContainer.innerHTML = "";
  players = [];

  for (let i = 0; i < playerCount; i++) {
    const btn = document.createElement("button");
    btn.classList.add("player-btn");
    btn.textContent = `Player ${i + 1}`;
    btn.dataset.index = i;
    btn.dataset.viewed = "false";

    btn.addEventListener("click", () => handlePlayerButtonClick(i, btn));

    playerButtonsContainer.appendChild(btn);
    players.push({ index: i, viewed: false });
  }

  allViewed = false;
  revealBtn.disabled = true;
  revealBtn.textContent = "Reveal";
}

function startNewRound() {
  secretCoordinate = pickRandomCoordinate();
  chameleonIndex = pickRandomChameleonIndex();

  players.forEach((p) => (p.viewed = false));
  const btns = document.querySelectorAll(".player-btn");
  btns.forEach((btn) => {
    btn.classList.remove("viewed");
    btn.dataset.viewed = "false";
  });

  allViewed = false;
  revealBtn.disabled = true;
  revealBtn.textContent = "Reveal";
}

// --- PLAYER VIEW FLOW ---
function handlePlayerButtonClick(index, btn) {
  const player = players[index];

  // Show modal with either coordinate or "Chameleon"
  let text;
  if (index === chameleonIndex) {
    text = "Chameleon";
  } else {
    text = `${secretCoordinate.letter}${secretCoordinate.number}`;
  }

  playerViewText.textContent = text;
  playerModal.style.display = "flex";

  // Mark as viewed when they hide
  hidePlayerViewBtn.onclick = () => {
    playerModal.style.display = "none";
    player.viewed = true;
    btn.classList.add("viewed");
    btn.dataset.viewed = "true";
    checkAllViewed();
  };
}

function checkAllViewed() {
  allViewed = players.every((p) => p.viewed);
  if (allViewed) {
    revealBtn.disabled = false;
  }
}

// --- REVEAL / RESET FLOW ---
revealBtn.addEventListener("click", () => {
  if (revealBtn.textContent === "Reveal") {
    // Show who the chameleon was
    revealText.textContent = `The Chameleon was Player ${chameleonIndex + 1}.`;
    revealModal.style.display = "flex";
    revealBtn.textContent = "Reset";
  } else {
    // Reset round: new coordinate + new chameleon
    startNewRound();
  }
});

closePlayerModal.addEventListener("click", () => {
  playerModal.style.display = "none";
});

closeRevealModal.addEventListener("click", () => {
  revealModal.style.display = "none";
});

closeRevealX.addEventListener("click", () => {
  revealModal.style.display = "none";
});

// --- PLAYER COUNT CHANGE ---
setPlayersBtn.addEventListener("click", () => {
  const value = parseInt(playerCountInput.value) || 4;
  playerCount = Math.max(3, Math.min(10, value));
  playerCountInput.value = playerCount;

  createPlayerButtons();
  startNewRound();
});

// --- BOARD LOGIC ---
// Assume `boards` is an array like:
// boards = [
//   { category: "Animals", grid: [ [ "word at A1", ... ], ... ] } // 5x5
// ];
function pickNextBoardIndex() {
  if (usedBoardIndices.length === boards.length) {
    usedBoardIndices = [];
  }

  const available = [];
  for (let i = 0; i < boards.length; i++) {
    if (!usedBoardIndices.includes(i)) {
      available.push(i);
    }
  }

  const randomIdx = available[getRandomInt(0, available.length - 1)];
  usedBoardIndices.push(randomIdx);
  return randomIdx;
}

function renderBoard() {
  if (currentBoardIndex === null) {
    currentBoardIndex = pickNextBoardIndex();
  }

  const board = boards[currentBoardIndex];
  boardCategoryTitle.textContent = board.category;

  boardGridBody.innerHTML = "";

  // Numbers down the left (1–5), letters across top already in <thead>
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement("tr");

    const numberCell = document.createElement("th");
    numberCell.textContent = row + 1;
    tr.appendChild(numberCell);

    for (let col = 0; col < 5; col++) {
      const td = document.createElement("td");
      td.classList.add("word-cell");
      td.textContent = board.grid[row][col]; // row: number-1, col: letter index
      tr.appendChild(td);
    }

    boardGridBody.appendChild(tr);
  }
}

boardBtn.addEventListener("click", () => {
  renderBoard();
  boardModal.style.display = "flex";
});

newBoardBtn.addEventListener("click", () => {
  currentBoardIndex = pickNextBoardIndex();
  renderBoard();
});

closeBoardX.addEventListener("click", () => {
  boardModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === playerModal) playerModal.style.display = "none";
  if (e.target === revealModal) revealModal.style.display = "none";
  if (e.target === boardModal) boardModal.style.display = "none";
});

// --- INITIALIZE ---
window.addEventListener("DOMContentLoaded", () => {
  createPlayerButtons();
  startNewRound();
});
