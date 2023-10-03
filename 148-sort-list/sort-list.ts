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

function sortList(head: ListNode | null): ListNode | null {
    function merge(l1: typeof head, l2: typeof head): ListNode | null {
        let dummy = new ListNode();
        let curr = dummy;
        
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }

        if (l1) curr.next = l1;
        if (l2) curr.next = l2;
        return dummy.next;
    }

    function mergeSort(node: typeof head): ListNode | null {
        if (!node || !node.next) return node;;
        let { l1, l2 } = splitArray(node);

        const sortedLeft = mergeSort(l1);
        const sortedRight = mergeSort(l2);

        return merge(sortedLeft, sortedRight);

    }

    function findMiddle(l1: ListNode | null): ListNode | null {
        let slow = l1;
        let fast = l1;

        while (fast.next && fast.next.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }

    function splitArray(l1: ListNode | null): Record<string, ListNode> | null {
        let mid = findMiddle(l1);
        let node2 = mid.next;
        mid.next = null;
        let node1 = l1;
        return { "l1": node1, "l2": node2 };
    }
    return mergeSort(head);
};
/*
    This is a divide and conquer algorithm.
    [10,9,8,7,6,5,4,3,2,1]
    [10,9,8,7,6] [5,4,3,2,1]
    [10,9,8] [7,6] [5,4,3] [2,1]
    [10, 9] [8] [7,6] [5,4] [3] [2,1]
    [10][9]    [7][6] [5,4]     [2][1]
*/
    // Given even or odd number of elements in the listNode we need to have the biggest on the
    // left side
    // [5,4,3,2,1]
    // [5,4,3,2,1,0]