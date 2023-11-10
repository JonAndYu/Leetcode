function groupAnagrams(strs: string[]): string[][] {
    const anagramGroups: Map<string, string[]> = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join("");

        if (anagramGroups.has(sortedStr)) {
            anagramGroups.get(sortedStr).push(str);
        } else {
            anagramGroups.set(sortedStr, [str]);
        }
    }
    return Array.from(anagramGroups.values());
};

