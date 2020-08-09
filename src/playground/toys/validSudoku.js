//https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if (!board){
        return false;
    }
    
    const isWholeBoxValid = isValidBox(board, 0, board.length-1, 0, board.length-1);
    const box1 = isValidBox(board, 0, 3, 0, 3);
    const box2 = isValidBox(board, 3, 6, 0, 3);
    const box3 = isValidBox(board, 6, 9, 0, 3);
    const box4 = isValidBox(board, 0, 3, 3, 6);
    const box5 = isValidBox(board, 0, 3, 6, 9);
    const box6 = isValidBox(board, 3, 6, 3, 6);
    const box7 = isValidBox(board, 3, 6, 6, 9);
    const box8 = isValidBox(board, 6, 9, 3, 6);
    const box9 = isValidBox(board, 6, 9, 6, 9);
    
    return isWholeBoxValid && box1 && box2 && box3 && box4 && box5 && box6 && box7 && box8 && box9;
  
};

var isValidBox = function(board, startR, endR, startC, endC) {
    if (!board){
        return false;
    }
    const seenMap = new Map();
    
    for (let r=startR; r < endR; r++){
        for (let c=startC; c<endC; c++ ){
            const num = board[r][c];
            
            if (num !== '.'){
                if (num < 1 || num > 9) {
                    return false;
                }
                
                seenRow = seenMap['r'+r] || new Map();
                if (seenRow.get(num)){
                    return false;
                } else {
                    seenRow.set(num);
                    seenMap['r'+r] = seenRow;
                }
                
                seenCol = seenMap['c'+c] || new Map();
                if (seenCol.get(num)){
                    return false;
                } else {
                    seenCol.set(num);
                    seenMap['c'+c] = seenCol;
                }
            }
        }
    }
    
    return true;
}