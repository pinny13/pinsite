/*
https://leetcode.com/problems/merge-k-sorted-lists/

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const mapOfAllNodes = new Map();
    let tempList = null;
    for (let i = 0; i < lists.length; i++) {
        tempList = lists[i];

        while (tempList) {
            const val = tempList.val;
            let valueFromMap = mapOfAllNodes.get(val);
            if (!valueFromMap) {
                mapOfAllNodes.set(val, 1);
            } else {
                mapOfAllNodes.set(val, valueFromMap + 1);
            }
            tempList = tempList.next;
        }
    }

    const keys = Array.from(mapOfAllNodes.keys()).sort((a, b) => b - a);

    let tail = null;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        let numOfValues = mapOfAllNodes.get(key);
        for (let j = 0; j < numOfValues; j++) {
            let tempNode = new ListNode(key);
            tempNode.next = tail;
            tail = tempNode;
        }
    }

    return tail;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function ln2arr2(ln) {
    let tempLn = ln;
    let result = [];
    while (tempLn) {
        result.push(tempLn.val);
        tempLn = tempLn.next;
    }
    return result;
}

function arr2ln(arr) {
    let tail = null;
    for (let i = arr.length - 1; i > -1; i--) {
        let tempNode = new ListNode(arr[i]);
        tempNode.next = tail;
        tail = tempNode;

    }
    return tail;
}

document.getElementById("ml1").innerHTML = ln2arr2(mergeKLists([arr2ln([1, 4, 5]), arr2ln([1, 3, 4]), arr2ln([2, 6])]));