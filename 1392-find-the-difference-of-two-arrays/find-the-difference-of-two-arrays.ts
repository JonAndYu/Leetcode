function findDifference(nums1: number[], nums2: number[]): number[][] {
    let oneSet = new Set(nums1);
    let twoSet = new Set(nums2);


    for (let element of oneSet) {
        if (twoSet.has(element)) {
            twoSet.delete(element);
            oneSet.delete(element);
        }
    }

    return [[...oneSet], [...twoSet]];

};