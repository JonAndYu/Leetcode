function productExceptSelf(nums: number[]): number[] {
    let output = new Array<number>(nums.length);

    // Set the prefix of the first index
    output[0] = 1;

    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i-1] * nums[i - 1];
    }

    let postfix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= postfix;
        postfix *= nums[i];
    }

    return output;
};

/*
    [1,2,3,4]

    output array [1, 1, 2, 6]
    postfix array [24, 12, 4, 1]
*/