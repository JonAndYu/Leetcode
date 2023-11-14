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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    function calculateRightPointer(node: ListNode | null, n: number): ListNode | null {
        while (node && n > 0) {
            node = node.next;
            n--;
        }
        return node;
    }

    let dummy = new ListNode(0, head);
    let left = dummy;
    let right = calculateRightPointer(head, n);

    while (right) {
        right = right.next;
        left = left.next;
    }

    // Remove the nth node from the end
    left.next = left.next!.next;

    return dummy.next;
}