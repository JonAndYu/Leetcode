function maxProduct(nums: number[]): number {
    if (nums === null || nums.length === 0) return 0;
    
    let maxProductSoFar = nums[0];
    let minProductSoFar = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            // Swap maxProductSoFar and minProductSoFar
            [maxProductSoFar, minProductSoFar] = [minProductSoFar, maxProductSoFar];
        }
        
        maxProductSoFar = Math.max(num, maxProductSoFar * num);
        minProductSoFar = Math.min(num, minProductSoFar * num);
        
        result = Math.max(result, maxProductSoFar);
    }
    
    return result;
}