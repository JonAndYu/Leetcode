function threeSum(nums: number[]): number[][] {
    nums.sort((a,b) => a-b);
    let n = nums.length;

    const triplets = [];

    for (let i = 0; i < n; i++) {
        while (i > 0 && nums[i] === nums[i-1]) i++;
        let firstNum = nums[i];

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let secondNum = nums[left];
            let thirdNum = nums[right];

            let sum = firstNum + secondNum + thirdNum

            if (sum === 0) {
                triplets.push([firstNum, secondNum, thirdNum]);
                while (left < right && nums[left] === nums[left+1]) left++;
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return triplets;
};