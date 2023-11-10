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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const MAXVAL = 101;
    let dummy = new ListNode(0);
    let curr = dummy;

    while (list1 || list2) {
        let l1Val = list1?.val ?? MAXVAL;
        let l2Val = list2?.val ?? MAXVAL;

        if (l1Val >= l2Val) {
            curr.next = list2;
            list2 = list2.next;
        } else {
            curr.next = list1;
            list1 = list1.next;
        }

        curr = curr.next;
    }

    return dummy.next;
};