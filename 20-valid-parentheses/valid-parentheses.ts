function isValid(s: string): boolean {
    let stack = [];
    let brackets = {
        ']': '[',
        '}': '{',
        ')': '(' 
    }

    function isClosing(s) {
        return s in brackets;
    }

    for (let c of s) {
        if (isClosing(c)) {
            if (!stack.length) return false;
            let top = stack.pop();
            if (brackets[c] !== top ) return false;
        } else {
            stack.push(c);
        }
    }

    return stack.length === 0;
};