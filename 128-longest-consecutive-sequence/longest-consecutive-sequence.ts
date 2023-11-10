function longestConsecutive(nums: number[]): number {
    let set = new Set(nums);
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // Start of a sequence
        if (!set.has(num - 1)) {
            let currSeq = 1;
            while (set.has(++num)) currSeq++;
            count = Math.max(count, currSeq)
        }
    }

    return count;
};
