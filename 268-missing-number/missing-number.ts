function missingNumber(nums: number[]): number {
    let n = nums.length;
    let sum = nums.reduce((a,v) => a + v, 0);
    return n*(n+1)/2 - sum
};
/*
1 + 2 + 3 +... +n = n(n+1)/2
*/