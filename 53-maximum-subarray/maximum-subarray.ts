function maxSubArray(nums: number[]): number {
    let res = Number.NEGATIVE_INFINITY;
    let curr = 0;

    for (let num of nums) {
        // if curr array is a negative number
        if (curr < 0) {
            curr = 0;
        }
        curr += num;
        res = Math.max(res, curr);
    }

    return res;
};

/*
    [-2,1,-3,4,-1,2,1,-5,4]
    [-2]
    [-2, 1] -> [1]
    [1, -3, 4] -> [4]

    [4, -1, 1] -> 4
    [4, -1, 2] -> 5
    [4, -1, 0] -> 4
*/