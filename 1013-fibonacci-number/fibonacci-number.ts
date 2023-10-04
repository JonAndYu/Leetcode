function fib(n: number): number {
    let fib = Array(n + 1).fill(0);
    fib[1] = 1;

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}