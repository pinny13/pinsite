let matrix = [
    ["R", "G", "R", "Y"],
    ["R", "G", "R", "G"],
    ["B", "G", "B", "G"],
    ["B", "B", "B", "W"]
  ];

let mapOfVisited = new Map();

let result = 0;
let biggestColor = matrix[0][0];

const colors = {
    "R" : "Red",
    "G" : "Green",
    "B" : "Blue",
    "Y" : "Yellow",
    "W" : "White"
};

function getResult() {
    for (let i=0; i < matrix.length; i++){
        for (let j=0; j < matrix[i].length; j++) {
            if (isValid(i, j)) {
                doIt(i,j);
            }
        }
    }   
}

function doIt(x,y){
  const cellColor = matrix[x][y];
  mapOfVisited.set(x+'_'+y, true);
  
  let countUp = 0;
  let countRight = 0;
  let countDown = 0;
  let countLeft = 0;
  
  if (isValid(x, y+1, cellColor)){
    countUp = doIt(x,y+1);
  }
  if (isValid(x+1, y, cellColor)){
    countRight = doIt(x+1,y);
  }
  if (isValid(x, y-1, cellColor)){
    countDown = doIt(x,y-1);
  }
  if (isValid(x-1, y, cellColor)){
    countLeft = doIt(x-1,y);
  }
  
  const myCount = 1 + countUp + countRight + countDown + countLeft;
  
  if (myCount > result) {
      result = myCount;
      biggestColor = cellColor;
  }

  return myCount;
}

function isValid(x,y, cellColor){
  if (x < 0 || y < 0 || x > matrix[0].length-1 || y > matrix[0].length-1) {
    return false;
  }
  
  if (mapOfVisited.get(x+'_'+y, true)) {
    return false;
  }
  
  if (cellColor && cellColor !== matrix[x][y]) {
    return false;
  }

  return true;
}

const div = document.getElementById('biggestNumberOfSameColorCells');
getResult();
div.innerHTML = result +' of '+ colors[biggestColor]; 
