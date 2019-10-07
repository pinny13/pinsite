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




var addTwoNumbers = function(l1, l2) {
    //Edge cases
    if (!l1 && !l2) {
        return new ListNode(0);
    }
    
    if (!l1) {
        return l1;
    }
    
    if (!l2) {
        return l1;
    }

    let extra = 0;
    let resultHead = null;
    let resultTail = null;
    let list1 = l1;
    let list2 = l2;
    
    let tempNum = list1.val + list2.val;
    if (tempNum >= 10) {
        tempNum = tempNum % 10;
        extra = 1;
    }
    resultHead = new ListNode(tempNum);
    resultTail = resultHead;
    list1 = list1.next;
    list2 = list2.next;

    while (list1 || list2) {
        let val1 = 0;
        let val2 = 0;
        if (list1) {
            val1 = list1.val;
        }
        if (list2) {
            val2 = list2.val;
        }
        tempNum = val1 + val2 + extra;
        if (tempNum >= 10) {
            tempNum = tempNum % 10;
            extra = 1; //Math.floor(tempNum /10);
        } else {
            extra = 0;
        }
        resultTail.next = new ListNode(tempNum);
        resultTail = resultTail.next;
        
        list1 = list1 ? list1.next : null;
        list2 = list2 ? list2.next : null;
    }

    if (extra !== 0) {
        resultTail.next = new ListNode(1);
    }
    
    return resultHead;
};