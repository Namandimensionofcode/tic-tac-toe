const board = document.getElementById("board");
const cells = [];

let currentPlayer = "X";
let moves = 0;
let gameWon = false;

// Create the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cells.push(cell);

    cell.addEventListener("click", () => makeMove(i));

    board.appendChild(cell);
}

// Winning combinations
const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// Function to make a move
function makeMove(cellIndex) {
    if (!gameWon && !cells[cellIndex].textContent) {
        cells[cellIndex].textContent = currentPlayer;
        moves++;

        if (checkWin()) {
            gameWon = true;
            document.getElementById("result").textContent = `${currentPlayer} wins!`;
        } else if (moves === 9) {
            document.getElementById("result").textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Function to check for a win
function checkWin() {
    return winCombinations.some(combination => {
        const [a, b, c] = combination;
        return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent;
    });
}
