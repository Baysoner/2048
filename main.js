import Grid from "/Grid.js";
import Tile from "/Tile.js";

document.querySelector("#app").innerHTML = `
  <div id="game-board"></div>
`;

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
