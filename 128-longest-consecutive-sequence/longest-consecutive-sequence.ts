function longestConsecutive(nums) {
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
}