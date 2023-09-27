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
// dfs
// function maxDepth(root: TreeNode | null): number {
//     if (!root) return 0;

//     return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
// };

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;

    let queue = [root];

    let ans = 0;

    while (queue.length > 0) {
        let currSize = queue.length;
        for (let i = 0; i < currSize; i++) {
            let currNode = queue.shift();
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        ans++;
    }
    return ans;
};