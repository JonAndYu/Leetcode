/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let res = Array(temperatures.length).fill(0);
    let stack = [] // Monotonic stack

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && stack[stack.length - 1][0]  < temperatures[i]) {
            let [_, stackIdx] = stack.pop();
            res[stackIdx] = i - stackIdx;
        }
        stack.push([temperatures[i], i]);
    }

    return res;
};