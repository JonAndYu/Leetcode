enum Color {
  Red = 0,
  White = 1,
  Blue = 2,
}
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // Variable definition
    let start = 0;
    let ptr = 0;
    let end = nums.length - 1;

    while (ptr <= end) {
        let color = nums[ptr];
        switch(color) {
            case Color.Red:
                [nums[start++], nums[ptr++]] = [nums[ptr], nums[start]];
                break;
            case Color.White:
                ptr++;
                break;
            case Color.Blue:
                [nums[end--], nums[ptr]] = [nums[ptr], nums[end]];
                break;
            default:
                throw new Error("Invalid color");
        }
    }

};
/*
DNF algorithm
    let start = 0;
    let ptr = 0;
    let end = nums.length - 1;

    everything before start is sorted (they're 0)
    everything after end is sorted (they're 2)

    We iterate through ptr if it's 0 we swap with start if it's 2 we swap with end. Then we'd increment/decrement.
*/