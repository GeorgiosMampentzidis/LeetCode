/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeNodes(head: ListNode | null): ListNode | null {
    head = head.next; // first one is zero; we can start with the next available number
    let currentSum = 0;
    let nodeList = head;
    let tempList = head; 

    while (tempList != null) {
        if (tempList.val == 0) {
            nodeList.val = currentSum; // replace current value with the actual sum
            currentSum = 0; // reset so it can be used for the next sum
            
            tempList = nodeList.next = tempList.next; // set the nodeList.next(head.next) with tempList.next (skipping the zero) and shift tempList;
            // head should be now up to date
            nodeList = nodeList.next; // shift nodeList;
        } 
        else {
            currentSum += tempList.val; // sum the values till zero appears
            tempList = tempList.next; // shift tempList till zero appears
        }
    }
    return head;
};
