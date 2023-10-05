function letterCombinations(digits: string): string[] {
    let keyboard = {
        "0": [],
        "1": [],
        "2": ['a','b','c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        '7': ["p",'q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    }

    function recurse(s: string) {
        if (s.length === 0) return [];
        if (s.length === 1) return keyboard[s] || [];
        
        let first = keyboard[s.substring(0, 1)];
        let rest = recurse(s.substring(1));

        let res = [];

        for (const c1 of first) {
            for (const c2 of rest) {
                res.push(c1 + c2);
            }
        }
        return res;

    }
    return recurse(digits);

};