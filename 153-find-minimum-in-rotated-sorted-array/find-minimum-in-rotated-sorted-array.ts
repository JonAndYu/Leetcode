function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    // If left === right, we have found the minimum element
    return nums[left];

};

/*
    [3,4,5] left of pivot point
    [1,2] right of pivot point


    [3,4,5,1,2]
    l    m   r
*/