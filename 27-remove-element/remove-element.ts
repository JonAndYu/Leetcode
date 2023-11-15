function removeElement(nums: number[], val: number): number {
    let kPtr = 0;
    let right = nums.length - 1;
    const swap = (i: number, j: number, nums: number[]): void => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    };
    let count = 0;
    
    while (kPtr <= right) {
        // Once this ends kPtr is on a 
        while (kPtr <= right && nums[kPtr] !== val) {
            kPtr++;
            count++;
        }
        
        if (kPtr <= right) {
            swap(kPtr, right, nums);
            right--;
        }
    }
    
    return count;
};

/*
    [1,1,1, k, 1, 1, k, 2, 2,2,2,2]
    
*/