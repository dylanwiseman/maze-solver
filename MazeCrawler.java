import java.util.ArrayList;
import java.util.Arrays;

class MazeSolver {
  private boolean solved;
  private int[][] maze;
  private ArrayList<int[]> path;

  public MazeSolver(int[][] maze) {
    this.maze = maze;
    this.solved = false;
    this.path = new ArrayList<int[]>();
  }

  public void seeMaze() {
    for (int i = 0; i < this.maze.length; i++) {
    System.out.println(Arrays.toString(this.maze[i]));
    }
  }

  private void traverse(int row, int col) {
    if (this.maze[row][col] == 2 && !this.solved) {
      int[] pathStep = new int[]{row, col};
      path.add(pathStep);
      this.solved = true;
      System.out.println("Maze solved at row: " + row + " col: " + col);
      System.out.println(path);
    } else if (this.maze[row][col] == 1 && !this.solved) {
      int[] pathStep = new int[]{row, col};
      path.add(pathStep);
      System.out.println("traversing to row: " + row + " col: " + col);
      this.maze[row][col] = 9;
      if (row < maze.length - 1 && !this.solved) {
        this.traverse(row + 1, col);
      } 
      if (row > 0 && !this.solved) {
        this.traverse(row - 1, col);
      } 
      if (col < maze[0].length && !this.solved) {
        this.traverse(row, col + 1);
      } 
      if (col > 0 && !this.solved) {
        this.traverse(row, col - 1);
      } 
      if (!this.solved) {
        System.out.println("backtracking...");
        path.remove(path.size() - 1);
      }
    }
  }
  public void start(int rowStart, int colStart) {
    this.traverse(rowStart, colStart);
  }
  
  public static void main(String[] args) {
    int[][] maze = {{1,0,0},{1,1,1},{0,0,2}};
    MazeSolver mazeCrawler3000 = new MazeSolver(maze);
    mazeCrawler3000.seeMaze();
    mazeCrawler3000.start(0,0);
  }
}
