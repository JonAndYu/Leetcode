function sortArray(nums: number[]): number[] {
    return mergeSort(nums, 0, nums.length - 1);
};

function merge(arr: number[], l: number, m: number, r: number): void {
  let n1 = m - l + 1,
      n2 = r - m;

  let arr1 = arr.slice(l, l + n1);;
  let arr2 = arr.slice(m+1, m+1+n2);

  let i = 0, // idx of arr1
      j = 0, // idx of arr2
      k = l; // idx of initial arr

  // If there's an element in both arrays
  while (i < n1 && j < n2) {
    if (arr1[i] > arr2[j]) {
      arr[k] = arr2[j];
      k++;
      j++;
    } else {
      arr[k] = arr1[i];
      i++;
      k++;
    }
  }

  // If there are elements in arr1 but not arr2
  while (i < n1) {
    arr[k] = arr1[i];
    k++;
    i++;
  }

  // If there are elements in arr2 but not arr1
  while (j < n2) {
    arr[k] = arr2[j];
    k++;
    j++;
  }

}

function mergeSort(arr:number[], l: number, r: number) {
  if (l >= r) return arr;

  let m = Math.floor(l + (r - l) / 2);

  mergeSort(arr,l,m);
  mergeSort(arr,m+1,r);
  merge(arr,l,m,r);
  return arr;
}