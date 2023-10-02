/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 /*
    1. Preorder traverse k times.
    2. Sort list O(nlogn)
    3. Get the kth index O(1)

    Time Complexity: O(nlogn)
    Space COmplexity: O(n)
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    function inOrderTraverse(root: TreeNode | null): number[] {
        if (!root) return [];
        let res: number[] = [];

        res.push(...inOrderTraverse(root.left));
        res.push(root.val);
        if (res.length === k + 1) return res;
        res.push(...inOrderTraverse(root.right));

        return res;
    }

    let lst = inOrderTraverse(root);
    if (lst.length < k) throw new Error("Invalid input");;
    return lst[k-1];
    
};