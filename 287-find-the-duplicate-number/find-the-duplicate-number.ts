// Sorting is out of the table.
function findDuplicate(nums: number[]): number {
    nums.sort((a,b) => a-b);
    let left = 1;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        let count = 0;

        for (const num of nums) {
            if (num <= mid) {
                count++;
            }
        }

        if (count <= mid) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
/*

*/