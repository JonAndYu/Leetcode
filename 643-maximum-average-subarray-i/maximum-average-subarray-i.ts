function findMaxAverage(nums: number[], k: number): number {
    let maxAvg: number = Number.MIN_SAFE_INTEGER;
    let sum = nums.slice(0, k).reduce((a,v) => a + v, 0)
    for (let i = 0; i <= nums.length - k; i++) {
        let avg = sum / k;
        maxAvg = Math.max(maxAvg, avg);
        // Sets up the next values
        sum -= nums[i];
        sum += nums[i+k];
    }
    /*
        [1,12, -5,-6,50,3]
                *
        2 < 6 - 4 
    */          

    return maxAvg;
};