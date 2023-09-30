/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;

    const oldToNew: Map<Node, Node> = new Map();

    function dfs(node) {
        if (!node) return;
        if (oldToNew.has(node)) return oldToNew.get(node);

        let copy = new Node(node.val);
        oldToNew.set(node, copy);
        for (const nei of node.neighbors) {
            copy.neighbors.push(dfs(nei));
        }
        return copy;
    }
    return dfs(node);
};