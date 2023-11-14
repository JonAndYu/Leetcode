function characterReplacement(s: string, k: number): number {
    function getMaxLength(map: Map<string, number>): number {
        return Math.max(...Array.from(map.values()));
    }

    let maxLength = 0;
    let freqMap: Map<string, number> = new Map<string, number>();
    let l = 0;

    // Sliding window: r - l + 1 = x <= k
    // If true we increment right.
    // If false we increment left until that is true.
    for (let r = 0; r < s.length; r++) {
        let char = s.charAt(r);

        freqMap.set(char, (freqMap.get(char) ?? 0) + 1);
        while (r - l - getMaxLength(freqMap) + 1 > k) {
            let lChar = s.charAt(l);
            l++
            freqMap.set(lChar, freqMap.get(lChar) - 1);
        }
        maxLength = Math.max(maxLength, r - l + 1);
    }

    return maxLength;
};