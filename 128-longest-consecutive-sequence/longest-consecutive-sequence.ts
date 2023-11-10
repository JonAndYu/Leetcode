function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // Start of a sequence
        if (!set.has(num - 1)) {
            let currSeq = 1;
            while (set.has(num + 1)) {
                num++;
                currSeq++;
            }
            count = Math.max(count, currSeq)
        }
    }

    return count;
};

/*
if (nums.length < 2) return nums.length;

    const numSet = new Set<number>(nums);

    let maxLength = 0;
    let currentLength = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
*/
