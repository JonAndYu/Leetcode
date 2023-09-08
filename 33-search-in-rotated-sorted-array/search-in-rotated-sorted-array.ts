/*
    A Linear approach would simply be iterating through the array till the target is found, but
    since thios array is essentially sorted, a binary search could be applied to potentially reduce 
    runtime to O(logn).

    Example: [4,5,6,7,0,1,2]
        1. left = 0, right = 5, mid = 2.
        2. If they were in 1..i..i+1,n then we can compare nums[i] with i to see but that isn't true here.
        3. If the midpoint is greater than the right most value then we are at the pivoted part of the
            array. If the target is small
        3. If the midpoint is smaller than the right most value, then 

    [4,5,6,7,0,1,2]
    l        m   r

    If m < nums[0] we know that we're on the side with the smaller numbers.
    Additionally, if target < nums[0] then we know we should search the right hand side.

    if m 
*/
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Return immediately when you find the target.
        }

        // If left half [low..mid] is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else // If right half mid..high is sorted
        {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid -1
            }
        }
    }

    return -1; // Return -1 if the target is not found.
}