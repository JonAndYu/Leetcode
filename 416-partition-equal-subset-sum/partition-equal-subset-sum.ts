function canPartition(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    const target = sum / 2;
    const memo = new Map(); // Use a Map for memoization.

    function backtrack(currSum, currIdx) {
        if (currSum === target) {
            return true;
        }
        if (currIdx >= nums.length) {
            return false;
        }

        const memoKey = `${currSum}-${currIdx}`;

        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }

        const include = backtrack(currSum + nums[currIdx], currIdx + 1);
        const exclude = backtrack(currSum, currIdx + 1);

        const result = include || exclude;
        memo.set(memoKey, result);

        return result;
    }

    return backtrack(0, 0);
}