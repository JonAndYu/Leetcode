interface StackTuple {
  temperature: number;
  index: number;
}

function dailyTemperatures(temperatures: number[]): number[] {
    // We fill zero cause it's base case
    let result = new Array(temperatures.length).fill(0);
    let stack: StackTuple[] = []; // Decreasing monotonic stack.
    /*
        Before each item is added, we'd check the stack.
        IF the latest item in the stack has a lesser temperature.
        We know how many days before the stack item has a day with
        a warmer temperature
    */

    temperatures.forEach((temp, i) => {
        if (stack.length === 0) {
            stack.push({
                temperature: temp,
                index: i
            });
        } else {
            while (stack.length > 0 && stack[stack.length - 1]['temperature'] < temp) {
                const { temperature, index } = stack.pop();
                result[index] = i - index;
            }
            stack.push({
                temperature: temp,
                index: i
            });   
        }
    });
    return result;
};