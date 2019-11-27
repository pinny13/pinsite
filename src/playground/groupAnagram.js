/*
https://leetcode.com/problems/group-anagrams/

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!strs || !strs.length) {
    return [[]];
  }

  //Create index map
  const iMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i]
      .split("")
      .sort()
      .join("");
    if (!iMap.has(key)) {
      iMap.set(key, []);
    }
    iMap.get(key).push(i);
  }

  const result = Array.from(iMap.values());
  //Update result with values
  for (let i = 0; i < result.length; i++) {
    const group = result[i];
    for (let j = 0; j < group.length; j++) {
      group[j] = strs[group[j]];
    }
  }
  return result;
};

function showIt(groups) {
  let result = "<div>";
  for (let i = 0; i < groups.length; i++) {
    result += `<div>[${groups[i].join("] [")}]</div>`;
  }
  return result + "</div>";
}

document.querySelector("#ga_1").innerHTML = showIt(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
