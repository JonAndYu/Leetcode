/* 
    We can divide intervals[i] into three parts: 
        - interval[i] < newInterval -> [interval[i], newInterval]
        - interval[i] > newInterval -> [newInterval, interval[i]]
        - isOverlap(interval[i], newInterval) ->
            - start = Min(interval[i], newInterval)
            - end = Max(interval[i], newInterval)
*/
function insert(intervals: number[][], newInterval: number[]): number[][] {
    let res = [];
    let i = 0, n = intervals.length;
    const isOverlap = (start, end, newStart, newEnd) => {
        return end >= newStart && start <= newEnd;
    }

    // interval[i] < newInterval -> [interval[i], newInterval]
    while (i < n && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i]);
        i++;
    }

    // isOverlap(interval[i], newInterval) ->
    //      - start = Min(interval[i], newInterval)
    //      - end = Max(interval[i], newInterval)
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    res.push(newInterval);

    // interval[i] > newInterval -> [newInterval, interval[i]]
    while (i < n) {
        res.push(intervals[i]);
        i++;
    }
    return res;
};