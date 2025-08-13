
const boardElement = document.getElementById('board');
    const statusElement = document.getElementById('status');
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let gameActive = true;

    function createBoard() {
      boardElement.innerHTML = "";
      board.forEach((cell, index) => {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.dataset.index = index;
        cellElement.innerHTML = cell === "X" ? '<i class="fas fa-times" style="color:#e53935;"></i>' : cell === "O" ? '<i class="far fa-circle" style="color:#039be5;"></i>' : "";
        cellElement.addEventListener("click", handleClick);
        boardElement.appendChild(cellElement);
      });
    }

    function handleClick(e) {
      const index = e.target.closest('.cell').dataset.index;
      if (!gameActive || board[index] !== "") return;
      board[index] = currentPlayer;
      createBoard();
      checkWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function checkWinner() {
      const winConditions = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
      ];
      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          statusElement.textContent = `${board[a]} wins!`;
          gameActive = false;
          return;
        }
      }
      if (!board.includes("")) {
        statusElement.textContent = "It's a draw!";
        gameActive = false;
      } else {
        statusElement.textContent = `Current Turn: ${currentPlayer}`;
      }
    }

    function resetGame() {
      board = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      gameActive = true;
      statusElement.textContent = `Current Turn: ${currentPlayer}`;
      createBoard();
    }

    resetGame();