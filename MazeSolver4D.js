//Copy everything and run in Repl.it to see the MazeCrawler in motion:

//Interdimensional MazeCrawler Class:
function MazeCrawler(maze) {
  this.maze = maze;
  this.solved = false;
  this.path = [];

  //Recursive traverse function searches for a way through the maze using a Depth-First approach:
  this.traverse = function (universe, depth, column, row) {
    // If MazeCrawler finds a 2, we're done!
    if (this.maze[universe][depth][column][row] === 2) {
      this.path.push([universe, depth, column, row]);
      console.log(
        `MazeCrawler finished the maze at Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row}`
      );
      this.solved = true;
      console.log(
        "Here's the path it took (Universe, Depth, Col, Row): ",
        this.path
      );
    } else if (this.maze[universe][depth][column][row] === 3 && !this.solved) {
      // If MazeCrawler finds a 3, we're going to travel to another Maze in the Maze-verse:
      console.log(
        `Found a mysterious portal at Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row}... MazeCrawler's going through it!`
      );
      this.path.push([universe, depth, column, row]);
      // Sending MazeCrawler to the alternate universe, or back to the original:
      this.maze[universe][depth][column][row] = 9;
      universe === 0 ? (universe = 1) : (universe = 0);
      depth = 0;
      this.traverse(universe, depth, column, row);
    } else if (this.maze[universe][depth][column][row] === 1 && !this.solved) {
      // If MazeCrawler finds a one, we're going to try traversing from there:
      console.log(
        `Traversed to Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row}`
      );
      this.path.push([universe, depth, column, row]);
      // First we set the 1 at our current location to 9, so we can't traverse it again:
      this.maze[universe][depth][column][row] = 9;
      // We'll try going deeper first by calling the traverse function with our coordinates adjusted by depth + 1:
      if (depth < this.maze[universe].length - 1 && !this.solved) {
        console.log("trying deeper");
        this.traverse(universe, depth + 1, column, row);
      }
      // If we can't go deeper, we'll try moving down one, again calling traverse with column + 1:
      if (column < this.maze[universe][depth].length - 1 && !this.solved) {
        console.log("trying down");
        this.traverse(universe, depth, column + 1, row);
      }
      // Then to the right, traverse with row + 1:
      if (row < this.maze[universe][depth][column].length - 1 && !this.solved) {
        console.log("trying right");
        this.traverse(universe, depth, column, row + 1);
      }
      // To the left:
      if (column > 0 && !this.solved) {
        console.log("trying left");
        this.traverse(universe, depth, column - 1, row);
      }
      // Maybe we can go up?
      if (row > 0 && !this.solved) {
        console.log("trying up");
        this.traverse(universe, depth, column, row - 1);
      }
      // Our last attempt to traverse, we try moving shallower:
      if (depth > 0 && !this.solved) {
        console.log("trying shallower");
        this.traverse(universe, depth - 1, column, row);
      }
      // If none of those are available, the traverse function that called us is done,
      // and the traverse function that called THAT traverse function now tries traversing in the next direction.
      if (!this.solved) {
        console.log(
          "no options, backtracking from ",
          universe,
          depth,
          column,
          row
        );
        // Lastly, we remove the location we just tried from our path array:
        this.path.pop();
      }
    }
  };
}

//Our Multiversal Maze:
let theMaze = [
  [
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
      [2, 1, 1, 0, 0, 0, 0, 0, 0, 0],
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
      [1, 1, 1, 0, 1, 0, 0, 1, 1, 0],
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
      [1, 1, 1, 0, 1, 0, 0, 1, 1, 3],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ],
  [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 0, 0, 1, 1, 1],
      [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 0, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    ],
  ],
];

//Starting coordinates tell the crawler where to start:
let startingCoordinates = [0, 0, 3, 0];
let crawler = new MazeCrawler(theMaze);
crawler.traverse(...startingCoordinates);
