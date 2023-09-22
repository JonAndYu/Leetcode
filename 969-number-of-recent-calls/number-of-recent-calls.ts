class RecentCounter {
    private counter: number[];

    constructor() {
        this.counter = [];
    }

    public ping(t: number): number {
        this.counter.push(t);
        return this.requestGetter(t);
    }

    private requestGetter(t: number): number {
        return this.counter.reduce((acc, val) => val >= t - 3000 ? acc + 1 : acc, 0);
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */