function backspaceCompare(s: string, t: string): boolean {
    function createStack(s: string): number[] {
        let stack = [];

        for (const c of s) {
            if (c !== '#') {
                stack.push(c);
            } else {
                stack.pop();
            }
        }
        return stack;
    }

    const sStack = createStack(s);
    const tStack = createStack(t);

    return JSON.stringify(sStack) === JSON.stringify(tStack);
};