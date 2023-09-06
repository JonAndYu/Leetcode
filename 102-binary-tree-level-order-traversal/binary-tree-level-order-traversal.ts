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
    queue.enqueue = queue.push
    queue.dequeue = queue.shift
*/
function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    let queue = [root];
    let res = [];

    while (queue.length) {
        let length = queue.length;
        let curr_lvl = [];
        for (let i = 0; i < length; i++) {
            let curr_node = queue.shift();
            if (curr_node.left) queue.push(curr_node.left);
            if (curr_node.right) queue.push(curr_node.right);
            curr_lvl.push(curr_node.val);
        }
        res.push(curr_lvl);
    }
    return res;
    
};