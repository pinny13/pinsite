/*
https://leetcode.com/problems/word-search-ii/

Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example:

Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
 

Note:

All inputs are consist of lowercase letters a-z.
The values of words are distinct.
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let result = [];

  let canGoThere = (currentX, newX, newY, prevX, prevY, usedSet) => {
    if (newX < 0 || newX > board.length - 1) {
      return false;
    }

    if (newY < 0 || newY > board[currentX].length - 1) {
      return false;
    }

    if (usedSet.has(`${newX}${newY}`)) {
      return false;
    }

    if (newX === prevX && newY === prevY) {
      return false;
    }

    return true;
  };

  let findWord = (word, wordCharPos, boardX, boardY, prevX, prevY, usedSet) => {
    let wordChar = word[wordCharPos];
    let boardChar = board[boardX][boardY];
    let tempWordCharPos = wordCharPos;
    if (wordChar === boardChar) {
      if (tempWordCharPos === word.length - 1) {
        result.push(word);
        return;
      } else {
        tempWordCharPos = tempWordCharPos + 1;
        usedSet.add(`${boardX}${boardY}`);
      }
    }

    //Try to go down
    // if (canGoThere(boardX, boardX + 1, boardY, prevX, prevY, usedSet)) {
    if (boardX + 1 < board.length && !usedSet.has(`${boardX + 1}${boardY}`)) {
      findWord(
        word,
        tempWordCharPos,
        boardX + 1,
        boardY,
        boardX,
        boardY,
        usedSet
      );
    }

    // }

    //Try to go up
    if (boardX - 1 > -1 && !usedSet.has(`${boardX - 1}${boardY}`)) {
      findWord(
        word,
        tempWordCharPos,
        boardX - 1,
        boardY,
        boardX,
        boardY,
        usedSet
      );
    }

    //Try to go left
    if (boardY - 1 > -1 && !usedSet.has(`${boardX}${boardY - 1}`)) {
      findWord(
        word,
        tempWordCharPos,
        boardX,
        boardY - 1,
        boardX,
        boardY,
        usedSet
      );
    }

    //Try to go right
    if (
      boardY + 1 < board[boardX].length &&
      !usedSet.has(`${boardX}${boardY + 1}`)
    ) {
      findWord(
        word,
        tempWordCharPos,
        boardX,
        boardY + 1,
        boardX,
        boardY,
        usedSet
      );
    }
  };

  words.forEach(word => findWord(word, 0, 0, 0, -1, -1, new Set()));

  return result;
};
document.querySelector("#ws_1").innerHTML = findWords(
  [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
  ],
  ["oath"] //, "pea", "eat", "rain"]
);
