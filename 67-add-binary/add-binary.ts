function addBinary(a: string, b: string): string {
    function add(d1: string, d2: string, remainder: string): Record<string, string> {
        let count = 0;
        if (d1==='1') count++;
        if (d2==='1') count++;
        if (remainder==='1') count++;
        if (count ===3) return {"val": '1', "remainder": '1'};
        if (count ===2) return {"val": '0', "remainder": '1'};
        if (count===1) return {"val": '1', "remainder": '0'};
        return {"val": '0', "remainder": '0'};
    }
    let i = a.length-1;
    let j = b.length-1;
    let ans = [];

    let remainder = '0';

    while (i >= 0 || j >= 0) {
        const d1 = i >= 0 ? a.charAt(i) : '0';
        const d2 = j >= 0 ? b.charAt(j) : '0';
        const { val: currVal, remainder: currRemainder } = add(d1, d2, remainder);
        ans.push(currVal);
        remainder = currRemainder;
        i--;
        j--;
    }

    if (remainder === '1') ans.push('1');

    return ans.reverse().join('');
};