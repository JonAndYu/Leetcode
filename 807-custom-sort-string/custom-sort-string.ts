function customSortString(order: string, s: string): string {
    const set = new Set(...order.split(''));
    const freqMap = s.split('').reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    
    let res = [];
    for (const c of order) {
        if (c in freqMap) {
            while (freqMap[c]--) res.push(c);
            delete freqMap[c];
        }
    }
    for (const [key, val] of Object.entries(freqMap)) {
        while (freqMap[key]--) res.push(key);
    }
    
    return res.join('');
};