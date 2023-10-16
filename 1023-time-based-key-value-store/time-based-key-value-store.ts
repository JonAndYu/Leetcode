type Tuple = [string, number]; // Define the tuple type

class TimeMap {
    private _map: Map<string, Tuple[]>;

    constructor() {
        this._map = new Map<string, Tuple[]>();
    }

    set(key: string, value: string, timestamp: number): void {
        if (!this._map.has(key)) {
            this._map.set(key, []);
        }
        this._map.get(key)?.push([value, timestamp]);
    }

    get(key: string, timestamp: number): string {
        let res = "";
        //binary search
        let values = this._map.get(key);

        let left = 0;
        let right = (values?.length || 0) - 1;

        while (left <= right) {
            let mid = Math.floor((left+right) / 2);
            let [mVal, mTime] = values[mid];

            if (mTime > timestamp) {
                right = mid - 1; 
            } else if (mTime <= timestamp) {
                left = mid + 1;
                res = mVal
            }
        }
        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */