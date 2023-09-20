function topKFrequent(nums, k) {
    // Step 0: Initialize all variables
    let res = [];
    //let freqMap = {};

    // Step 1: Create a frequency map of all elements in nums.
    // Time Complexity: O(n)
    // Space Complexity: O(n)

    let freqMap = nums.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    // Step 2: Covert then sort array based on their value.
    // Time Complexity: O(nlogn)
    // Space Complexity: O(2n) => O(n)
    let sortedFreqs = Object.entries(freqMap).map(([key, value]) => { 
        return {
            [key] : value,
        }
    }).sort((a, b) => Object.values(b)[0] -Object.values(a)[0]);

    // Step 3: Iterate k times 
    for (let i = 0; i < k; i++) {
        res.push(Object.keys(sortedFreqs[i])[0]);
    }

    return res;
};
