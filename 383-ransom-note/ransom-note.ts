function canConstruct(ransomNote: string, magazine: string): boolean {
    let freqMap: Record<string, number> = magazine.split('').reduce((acc, c) => {
        acc[c] = (acc[c] || 0) + 1;
        return acc;
    }, {});

    for (const c of ransomNote) {
        if (c in freqMap && freqMap[c] > 0) {
            freqMap[c]--;
        } else {
            return false;
        }
    }
    return true;
};