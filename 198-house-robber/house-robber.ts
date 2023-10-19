/*
    [57,2,3,100]
    There are two options you can either rob the current house and the 
*/



function rob(nums: number[]): number {
    function rob(nums: number[], i: number, memo = []) {
        if (i > nums.length - 1) return 0;
        if (memo[i] !== undefined) return memo[i];
        memo[i] = Math.max(
            nums[i] + rob(nums, i + 2, memo), rob(nums, i + 1, memo)
            );
        return memo[i];
    }

    return rob(nums, 0);
};