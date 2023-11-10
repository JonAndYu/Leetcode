function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const output = new Array<number>(n);
    let totalProduct = 1;

    // Calculate the product of all elements to the left of each element
    for (let i = 0; i < n; i++) {
        output[i] = totalProduct;
        totalProduct *= nums[i];
    }

    totalProduct = 1; // Reset the total product

    // Calculate the product of all elements to the right of each element
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= totalProduct;
        totalProduct *= nums[i];
    }

    return output;
}
