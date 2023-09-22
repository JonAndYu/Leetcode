function sortedSquares(nums: number[]): number[] {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let leftSquared: number = nums[left] * nums[left];
        let rightSquared: number = nums[right] * nums[right];
        if (leftSquared > rightSquared) {
            res.push(leftSquared);
            left++;
        } else {
            res.push(rightSquared);
            right--;
        }
    }
    return res.reverse();
};