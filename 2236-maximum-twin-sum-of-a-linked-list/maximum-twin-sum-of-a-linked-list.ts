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

function pairSum(head: ListNode | null): number {
    // Populating the stack.
    let stack = [];
    let count = 0;
    let maxTwin = 0;

    for (let i = head; i !== null; i = i.next) {
        stack.push(i);
        count++
    }

    for (let i = 0; i < count / 2; i++) {
        let currNode = head;
        let currTwin = stack.pop();
        maxTwin = Math.max(currNode.val + currTwin.val, maxTwin);
        head = head.next;
    }
    return maxTwin;
};