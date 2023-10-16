class TimeMap {
    private _map: Map<string, string[]>
    constructor() {
        this._map = new Map<string, string[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (this._map.has(key)) {
            const arr = this._map.get(key);
            arr[timestamp] = value;
        } else {
            const arr = Array(timestamp + 1).fill(undefined);
            arr[timestamp] = value;
            this._map.set(key, arr)
        }
    }

    get(key: string, timestamp: number): string {
        if (!this._map.has(key)) return "";

        let arr = this._map.get(key);

        // Search by performing a binary search

        /*
            If that wasn't the case, we need to perform binary search to effiicnetly
            find the elemnt that is 
        */

        for (let i = timestamp; i >= 0; i--) {
            if (arr[i] !== undefined) return arr[i]
        }

        return "";
    } 
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */