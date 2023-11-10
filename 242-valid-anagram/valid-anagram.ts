function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let sFreqMap = s.split('').reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {});
    let tFreqMap = t.split('').reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {});

    for (let char in sFreqMap) {
        if (sFreqMap[char] !== tFreqMap[char]) return false;
    }
    return true;
};