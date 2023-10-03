function numIdenticalPairs(nums: number[]): number {
    const freqMap = {};
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (freqMap[nums[i]]) {
            ans += freqMap[nums[i]];
            freqMap[nums[i]]++
        } else {
            freqMap[nums[i]] = 1;
        }
    }
    return ans;
};