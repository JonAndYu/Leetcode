function evalRPN(tokens: string[]): number {
    if (tokens.length < 2) return Number(tokens[0]);

    let operation: Record<string, (a: number, b: number) => number> = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a*b,
        '/': (a, b) => Math.trunc(a/b)
    }

    let stack: number[] = [];

    for (let token of tokens) {
      if (token in operation) {
        if (stack.length > 1) {
          let b: number  = stack.pop();
          let a: number = stack.pop();
          stack.push(operation[token](a, b));
        } else {
          throw new Error("Invalid tokens array");
        }
      } else {
        stack.push(Number(token));
      }
    }
    
    if (stack.length !== 1) throw new Error("Invalid tokens array");
    return stack[0];
};