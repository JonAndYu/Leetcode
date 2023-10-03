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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode();
    let curr = head;
    let remainder = 0;

    while (l1 || l2 || remainder !== 0) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let total = (val1+val2+remainder);
        curr.next = new ListNode(total % 10);
        remainder = Math.floor((val1+val2+remainder) / 10);
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
        curr = curr.next;
    }

    return head.next;
};