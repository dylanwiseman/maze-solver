//copy and run in replit:

let myMaze = [
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
];

function MazeSolver(maze) {
  this.maze = maze;
  this.solved = false;
  this.path = [];

  this.traverse = function (column, row) {
    if (this.maze[column][row] == 2) {
      this.path.push([column, row]);
      console.log("We solved the maze at (" + column + ", " + row + ")");
      this.solved = true;
      console.log("Path: ", this.path);
    } else if (this.maze[column][row] == 1 && !this.solved) {
      console.log("At valid position (" + column + ", " + row + ")");
      this.path.push([column, row]);
      this.maze[column][row] = 9;
      if (column < this.maze.length - 1) {
        this.traverse(column + 1, row);
      }
      if (row < this.maze[column].length - 1) {
        this.traverse(column, row + 1);
      }
      if (column > 0) {
        this.traverse(column - 1, row);
      }
      if (row > 0) {
        this.traverse(column, row - 1);
      }
      if (!this.solved) {
        console.log("backtracking from ", column, row);
        this.path.pop();
      }
    }
  };
}

let ms = new MazeSolver(myMaze);
ms.traverse(3, 0);
