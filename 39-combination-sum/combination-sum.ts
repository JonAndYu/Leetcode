function combinationSum(candidates: number[], target: number): number[][] {
    candidates = candidates.filter(n => n <= target).sort((a,b) => a - b);
    let ans: number[][] = [];

    function backtrack(path: number[], start: number) {
        let sum = path.reduce((v, acc) => acc + v, 0);
        if (sum === target) {
            ans.push([...path]);
            return;
        }
        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates to generate combinations instead of permutations
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            path.push(candidates[i]);
            // Use i (not start) to ensure non-increasing order
            backtrack(path, i);
            path.pop();
        }
    }

    backtrack([], 0);
    return ans;
};