class MinStack {
    private stack: any[];
    private minStack: any[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.minStack.push(val);
        } else {
            this.stack.push(val);
            this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
        }
    }

    pop(): void {
        this.minStack.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */