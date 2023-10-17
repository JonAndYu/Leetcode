function wordBreak(s: string, wordDict: string[]): boolean {
    const memo: Record<string, boolean> = {};
    
    function backtrack(s: string): boolean {
        if (!s || s.length === 0) return true;
        if (s in memo) return memo[s];

        let ans = false;

        for (const word of wordDict) {
            if (s.startsWith(word)) {
                ans = backtrack(s.substring(word.length))
                memo[s] = ans;
                if (ans) break;
            }
        }
        return ans;
    }
    return backtrack(s);
};