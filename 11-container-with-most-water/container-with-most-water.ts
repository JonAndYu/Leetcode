function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    
    let res = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(res, area);
        if (height[left] > height[right]) right--;
        else left++;
    }
    return res;
};