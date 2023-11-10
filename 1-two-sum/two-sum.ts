function twoSum(nums: number[], target: number): number[] {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let goal = target - nums[i];
        if (goal in map) return [i, map[goal]];
        map[nums[i]] = i;
    }
    return;
};