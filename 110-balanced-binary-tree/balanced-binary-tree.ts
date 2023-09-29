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

function isBalanced(root: TreeNode | null): boolean {
    function height(root: TreeNode | null): number {
        if (!root) return 0;
        let lh = height(root.left);
        let rh = height(root.right);
        if (lh === -1 || rh === -1) return -1;
        if (Math.abs(lh-rh) > 1) return -1;
        return Math.max(lh, rh) + 1;
    } 

    return height(root) !== -1;

    
};