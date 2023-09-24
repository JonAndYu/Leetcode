function reverseStr(s: string, k: number): string {
    function swap(i , j, arr) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    function swapArray(start, end, arr) {
        while (start < end) {
            swap(start, end, arr);
            start++;
            end--;
        }
    }
    let ans: string[] = s.split('');

    if (ans.length < k) {
        swapArray(0, ans.length-1, ans);
    } else {
        for (let i = 0; i < ans.length; i += 2*k) {
            let start = i;
            let end = i + k - 1;
            swapArray(start, end, ans);
        }
    }

    return ans.join('');
};