function groupAnagrams(strs: string[]): string[][] {
    /*
        Time Complexity: O(n)
        Space Complexity: O(n)

        Checks if two strings are anagrams of eachother
    */
    function isAnagram(s: string, t: string) {
        if (s.length !== t.length) return false;

        let sFreq = s.split('').reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {});

        for (let c of t) {
            if (sFreq.hasOwnProperty(c) && sFreq[c] > 0) {
                sFreq[c]--;
            } else {
                return false;
            }
        }
        return true;
    }

    /*
        Time Complexity: O(nlogn)
        Space Complexity: O(1)

        Sorts a list of strings by length in ascending order.
    */
    function sortStrings(strs: string[]): string[] {
        return strs.sort((a, b) => a.length - b.length);
    }

    strs = sortStrings(strs);

    const groups: string[][] = [];
    const visited: boolean[] = new Array(strs.length).fill(false);

    for (let i = 0; i < strs.length; i++) {
        if (!visited[i]) {
            const group:string[] = [strs[i]];

            for (let j = i + 1; j < strs.length; j++) {
                if (strs[j].length > strs[i].length) break;
                if (!visited[j] && isAnagram(strs[i], strs[j])) {
                    group.push(strs[j]);
                    visited[j] = true;
                }
            }

            groups.push(group);
        }
    }
    return groups;
};

