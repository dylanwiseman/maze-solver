//Copy everything and run in Replit to see the MazeCrawler in motion:

//Interdimensional MazeCrawler Function:
function mazeCrawler(maze, start) {

  let solved = false;
  const path = [];

  //Our MazeCrawler uses a Depth-First approach to solving the maze,
  //following one path at a time until it finds success or a dead end.

  //Recursive traverse function checks if the maze is unsolved and, if so, do the coordinates passed in return...
  // (2) - success, aka our "base case"
  // (3) - custom action, in this case, a portal to another maze
  // (1) - a valid spot, then traverse calls itself (the same traverse function), passing in coordinates of the surrounding spots

  const traverse = (universe, depth, column, row) => {
    // If MazeCrawler finds a 2, we're done!
    if (maze[universe][depth][column][row] === 2) {
      //adding coordinates to the path array:
      path.push([universe, depth, column, row]);
      console.log(
        `MazeCrawler finished the maze at Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row}`
      );
      solved = true;
      console.log(
        "Here's the path it took (Universe, Depth, Col, Row): ",
        path
      );
    } else if (maze[universe][depth][column][row] === 3 && !solved) {
      // If MazeCrawler finds a 3, we're going to travel to another Maze in the Maze-verse by passing in special coordinates to traverse:
      console.log(
        `Found a mysterious portal at Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row}... MazeCrawler's going through it!`
      );
      path.push([universe, depth, column, row]);
      // Sending MazeCrawler to the alternate universe, or back to the original:
      maze[universe][depth][column][row] = 9;
      universe === 0 ? (universe = 1) : (universe = 0);
      depth = 0;
      traverse(universe, depth, column, row);
    } else if (maze[universe][depth][column][row] === 1 && !solved) {
      // If MazeCrawler finds a one, we're going to try traversing from there:
      console.log(
        `Traversed to: (Universe: ${universe}, Depth: ${depth}, Col: ${column}, Row: ${row})`
      );
      path.push([universe, depth, column, row]);
      // First we set the 1 at our current location to 9, so we can't traverse it again:
      maze[universe][depth][column][row] = 9;
      // We'll try going deeper first by calling the traverse function with our coordinates adjusted by depth + 1:
      if (depth < maze[universe].length - 1 && !solved) {
        console.log("trying deeper");
        traverse(universe, depth + 1, column, row);
      }
      // If we can't go deeper, we'll try moving down one, again calling traverse with column + 1:
      if (column < maze[universe][depth].length - 1 && !solved) {
        console.log("trying down");
        traverse(universe, depth, column + 1, row);
      }
      // Then to the right, traverse with row + 1:
      if (row < maze[universe][depth][column].length - 1 && !solved) {
        console.log("trying right");
        traverse(universe, depth, column, row + 1);
      }
      // To the left:
      if (column > 0 && !solved) {
        console.log("trying left");
        traverse(universe, depth, column - 1, row);
      }
      // Maybe we can go up?
      if (row > 0 && !solved) {
        console.log("trying up");
        traverse(universe, depth, column, row - 1);
      }
      // Our last attempt to traverse, we try moving shallower:
      if (depth > 0 && !solved) {
        console.log("trying shallower");
        traverse(universe, depth - 1, column, row);
      }
      // If none of those are available, the traverse function that called us is done,
      // and the traverse function that called THAT traverse function will then try traversing in the next direction.
      if (!solved) {
        console.log(
          "no options, backtracking from ",
          universe,
          depth,
          column,
          row
        );
        // Lastly, we remove the location we just tried from our path array:
        path.pop();
      }
    }
  };
  traverse(...start);
}

//Our Multiversal Maze:
//right now the Mave Mulitverse only supports 2 mazes, but we can adjust the logic to add more

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
let start = [0, 0, 3, 0];


mazeCrawler(theMaze, start);
