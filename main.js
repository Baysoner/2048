import Grid from "/Grid.js";

document.querySelector("#app").innerHTML = `
  <div id="game-board"></div>
`;

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
