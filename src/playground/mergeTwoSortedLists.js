/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const ListNode = function (val, nxt) {
    this.val = val;
    this.next = nxt;
}

function printList(l){
    if (!l) {
        return "";
    }
    
    return l.val + '->' + printList(l.next);
}
////////////////////////////////
    
var mergeTwoLists = function(l1, l2) {
    
    if (!l1 && !l2){
        return null;
    }
    
    if (!l1) {
        return l2;
    }
    
    if (!l2) {
        return l1;
    }
    
    let result = null;
    let resultTail = null;
    let nodeA = l1;
    let nodeB = l2;
    
    if (nodeA.val <= nodeB.val){
        result = nodeA;
        nodeA = nodeA.next;
    } else {
        result = nodeB;
        nodeB = nodeB.next;
    }
    result.next = null;
    resultTail = result;
    
    while (nodeA && nodeB) {
        if (nodeA.val <= nodeB.val){
            resultTail.next = nodeA;
            nodeA = nodeA.next;            
        } else {// if (nodeB.val < nodeA.val)
            resultTail.next = nodeB;
            nodeB = nodeB.next;
        }
        resultTail = resultTail.next;
        // resultTail.next = null;
    }
    
    if (!nodeA && !nodeB){
        return result;
    }
    
    if (!nodeB) {
        let tempA = nodeA;
        while (tempA){
            resultTail.next = tempA;
            resultTail = resultTail.next;
            // resultTail.next = null;
            tempA = tempA.next;
        }
    } else { // if (!nodeA){
        let tempB = nodeB;
        while (tempB){
            resultTail.next = tempB;
            resultTail = resultTail.next;
            // resultTail.next = null;
            tempB = tempB.next;
        }
    }
    
    return result;
}

////////////////////////////////

function test1() {
    const l13 =new ListNode(4, null); 
    const l12 =new ListNode(2, l13); 
    const l1 = new ListNode(1, l12);
    
    const l23 =new ListNode(4, null); 
    const l22 =new ListNode(3, l23); 
    const l2 = new ListNode(1, l22);
    
    return mergeTwoLists(l1,l2);
}
let mslE = document.getElementById("msl1");
mslE.innerHTML = printList(test1());

function test2() {
    const l13 =new ListNode(5, null); 
    const l12 =new ListNode(2, l13); 
    const l1 = new ListNode(1, l12);
    
    const l24 =new ListNode(6, null); 
    const l23 =new ListNode(4, l24); 
    const l22 =new ListNode(3, l23); 
    const l2 = new ListNode(1, l22);
    
    return mergeTwoLists(l1,l2);
}
mslE = document.getElementById("msl2");
mslE.innerHTML = printList(test2());

function test3() {
    const l1 = new ListNode(2, null);
    
    const l2 =new ListNode(1, null); 
    
    return mergeTwoLists(l1,l2);
}
mslE = document.getElementById("msl3");
mslE.innerHTML = printList(test3());

function test4() {
    const l12 =new ListNode(3, null); 
    const l1 = new ListNode(-9, l12);
    
    const l22 =new ListNode(7, null); 
    const l2 = new ListNode(5, l22);
    
    return mergeTwoLists(l1,l2);
}
mslE = document.getElementById("msl4");
mslE.innerHTML = printList(test4());