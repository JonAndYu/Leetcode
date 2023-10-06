function canFinish(numCourses: number, prerequisites: number[][]): boolean {

    // Assuming adjacencyList[i][j]
    // i will be the nodes
    // i,j will be an edge
    let adjacencyList: number[][] = Array.from({length:numCourses}, () => []);
    for (const [a,b] of prerequisites) adjacencyList[a].push(b);

    const visited: boolean[] = new Array(numCourses).fill(false);
    const visiting: boolean[] = new Array(numCourses).fill(false);

    function hasCycle(node: number): boolean {
        if (visited[node]) return false;
        if (visiting[node]) return true;

        visiting[node] = true;
        for (const neighbor of adjacencyList[node]) {
            if (hasCycle(neighbor)) return true;
        }
        visiting[node] = false;
        visited[node] = true;

        return false;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!visited[i] && hasCycle(i)) {
            return false;
        }
    }

    return true;
}

/*
    0 -> 1
    1 -> 2
    2 -> 3

    This is fine because you don't make a cycle.

    0 -> 1
    1 -> 2
    2 -> 0
*/