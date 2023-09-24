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

function maxLevelSum(root: TreeNode | null): number {
    function bfs(root: TreeNode | null): number[][] {
        if (!root) return [];
        let queue: TreeNode[] = [root];

        let ans: number[][] = [];

        while (queue.length > 0) {
            let currSize = queue.length;
            let currLevel: number[] = []

            while (currSize--) {
                let currNode = queue.shift();
                if (!currNode) continue;
                currLevel.push(currNode.val);
                if (currNode.left) queue.push(currNode.left);
                if (currNode.right) queue.push(currNode.right);
            }
            ans.push(currLevel);
        }
        return ans;
    }

    let sumArray = bfs(root).map((v) => v.reduce((acc, v) => acc+v, 0));
    return sumArray.reduce((acc, val, idx) => {
        if (val > sumArray[acc - 1]) {
            acc = idx + 1;
            return acc
        } else {
            return acc
        }
    }, 1);
};