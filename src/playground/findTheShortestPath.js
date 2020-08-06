/*
HBO question to find the shortest path out of the maze
The maze consists with 
0 - cell you can go
1 - cell you cannot go
2 - starting point

Example:
[
    [1, 1, 1, 0, 1],
    [1, 0, 2, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]

  //Answer is 2 (go left then up)



*/
function main(grid, rows, columns) {
  let result = Number.MAX_VALUE;

  let visited = Array(rows);
  for (let i = 0; i < rows; i++) {
    visited[i] = Array(columns);
  }

  let canMove = (x, y) => {
    return (
      !(grid[x][y] == 1 || visited[x][y] != 1) &&
      x < rows &&
      y < columns &&
      x >= 0 &&
      y >= 0
    );
  };

  let findShortestPath = (i, j, x, y, dist) => {
    // if destination is found, update result
    if (i == x && j == y) {
      return Math.min(dist, result);
    }

    // set (i, j) cell as visited
    visited[i][j] = 1;

    // go to bottom cell
    if (canMove(i + 1, j)) {
      result = findShortestPath(i + 1, j, x, y, dist + 1);
    }

    // go to right cell
    if (canMove(i, j + 1)) {
      result = findShortestPath(i, j + 1, x, y, dist + 1);
    }

    // go to top cell
    if (canMove(i - 1, j)) {
      result = findShortestPath(i - 1, j, x, y, dist + 1);
    }

    // go to left cell
    if (canMove(i, j - 1)) {
      result = findShortestPath(i, j - 1, x, y, dist + 1);
    }

    // Backtrack - Remove (i, j) from visited matrix
    visited[i][j] = 0;
  };

  return result;
}

document.querySelector("#ttt_1").innerHTML = main(
  [
    [1, 1, 1, 0, 1],
    [1, 0, 2, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ],
  5,
  4
); //Asnwer is 2