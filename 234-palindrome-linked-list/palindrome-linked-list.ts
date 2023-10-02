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

function isPalindrome(head: ListNode | null): boolean {

    function getMiddle(head: ListNode | null): ListNode {
        let slow = head;
        let fast = head;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }

    function reverse(head: ListNode | null): ListNode {
        let prev = null;
        let curr = head;

        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }

    function compareLists(head1: ListNode | null, head2: ListNode | null): boolean {
        while (head1 && head2) {
            if (head1.val !== head2.val) return false;
            head1 = head1.next;
            head2 = head2.next;
        }
        return true;
    }

    let mid = getMiddle(head);
    // let dum = new ListNode();
    // dum.next = mid.next;
    // mid.next = null;
    
    let head2 = reverse(mid.next);
    return compareLists(head, head2);

};

/*
    Get the middle of the linked list with tortoise and the hare algorithm.

        Even:
        [1 -> 2 -> 2 -> 1]
              *
        [1 -> 2 -> 3 -> 2 -> 1]
                   *

    Reverse the second half of the array.

    Compare the two for equality
*/