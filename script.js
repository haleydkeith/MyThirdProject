let cells =document.querySelectorAll('.row>div');
console.log (cells);
let announceDiv = document.getElementsByClassName ("announce")[0];
let announceDraw = document.getElementsByClassName ("draw")[0];

let playerTurn = true;
const players = [
  {
    name: "Player1",
    playerType: "🙊",
  },
  {
    name: "Player2",
    playerType: "🤭"
  },
];
for (let i= 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked) 
}
function cellClicked() {
  console.log(this.innerHTML);
  console.log(this.id);
  if (playerTurn && this.innerHTML == "") {
    event.target.textContent = "🙊";
    playerTurn = false;
  } else if (!playerTurn && this.innerHTML == "") {
    event.target.textContent = "🤭";
    playerTurn = true;
  }
  checkWin();
}
function checkWin() {
  if (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    (cells [0].textContent === "🙊"|| cells[0].textContent === "🤭")
  )
}
if (playerTurn === true) {
  announceDiv.textContent = `🤭 You  win!`;
} else {
    announceDiv.textContent = `🙊 You win!`;
}
if (
  cells[3].textContent === cells[4].textContent &&
  cells[4].textContent === cells[5].textContent &&
  (cells[3].textContent === "🙊" || cells[3].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊You win!`;
    }
}
if (
  cells[6].textContent === cells[7].textContent &&
  cells[7].textContent === cells[8].textContent &&
  (cells[6].textContent === "🙊" || cells[6].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
}
if (
  cells[0].textContent === cells[3].textContent &&
  cells[3].textContent === cells[6].textContent &&
  (cells[0].textContent === "🙊" || cells[0].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
}
if (
  cells[1].textContent === cells[4].textContent &&
  cells[4].textContent === cells[7].textContent &&
  (cells[1].textContent === "🙊" || cells[1].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
}
if (
  cells[2].textContent === cells[5].textContent &&
  cells[5].textContent === cells[8].textContent &&
  (cells[2].textContent === "🙊" || cells[2].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
}
if (
  cells[0].textContent === cells[4].textContent &&
  cells[4].textContent === cells[8].textContent &&
  (cells[0].textContent === "🙊" || cells[0].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
}
if (
  cells[3].textContent === cells[5].textContent &&
  cells[5].textContent === cells[7].textContent &&
  (cells[3].textContent === "" |"🙊"| cells[3].textContent === "🤭")
) {
  if (playerTurn === true) {
      announceDiv.textContent = `🤭 You win!`;
    } else {
        announceDiv.textContent = `🙊 You win!`;
    }
} 
  if (
      cells[0].textContent != '' 
  && cells[1].textContent != '' 
  && cells[2].textContent != "" 
  && cells[3].textContent != "" 
  && cells[4].textContent != "" 
  && cells[5].textContent != "" 
  && cells[6].textContent != "" 
  && cells[7].textContent != "" 
  && cells[8].textContent != "") { 
      announceDraw.textContent = "TIE!";
    
  }

