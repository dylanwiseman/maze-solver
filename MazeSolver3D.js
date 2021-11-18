//copy and run in replit:

let myMaze = [
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 2],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
];

function MazeSolver(maze) {
  this.maze = maze;
  this.solved = false;
  this.path = [];

  this.traverse = function (depth, column, row) {
    if (this.maze[depth][column][row] == 2) {
      this.path.push([depth, column, row]);
      console.log(
        "We solved the maze at (Col: " +
          column +
          ", Row: " +
          row +
          ", Depth: " +
          depth +
          ")"
      );
      this.solved = true;
      console.log("Path (Depth, Col, Row): ", this.path);
    } else if (this.maze[depth][column][row] == 1 && !this.solved) {
      console.log(
        "At valid position (Col: " +
          column +
          ", Row: " +
          row +
          ", Depth: " +
          depth +
          ")"
      );
      this.path.push([depth, column, row]);
      this.maze[depth][column][row] = 9;
      if (depth < this.maze.length - 1 && !this.solved) {
        console.log("trying deeper");
        this.traverse(depth + 1, column, row);
      }
      if (column < this.maze[depth].length - 1 && !this.solved) {
        console.log("trying down");
        this.traverse(depth, column + 1, row);
      }
      if (row < this.maze[depth][column].length - 1 && !this.solved) {
        console.log("trying right");
        this.traverse(depth, column, row + 1);
      }
      if (column > 0 && !this.solved) {
        console.log("trying left");
        this.traverse(depth, column - 1, row);
      }
      if (row > 0 && !this.solved) {
        console.log("trying up");
        this.traverse(depth, column, row - 1);
      }
      if (depth > 0 && !this.solved) {
        console.log("trying shallower");
        this.traverse(depth - 1, column, row);
      }
      if (!this.solved) {
        console.log("no options, backtracking from ", depth, column, row);
        this.path.pop();
      }
    }
  };
}

let ms = new MazeSolver(myMaze);
ms.traverse(0, 3, 0);
