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

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    if (!head.next) return head;

    let oddNode = head;
    let evenNode = head.next;
    let evenHead = evenNode;

    let isOdd = true;

    for (let node = head.next.next; node !== null; node = node.next) {
        oddNode.next = null;
        evenNode.next = null;
        if (isOdd) {
            // Add to oddNode
            oddNode.next = node;
            oddNode = oddNode.next;
        } else {
            // Add to evenNode
            evenNode.next = node;
            evenNode = evenNode.next;
        }
        isOdd = !isOdd;
    }

    oddNode.next = evenHead;

    return head;
};
/*
    1 2 3 4 5
            * *
*/