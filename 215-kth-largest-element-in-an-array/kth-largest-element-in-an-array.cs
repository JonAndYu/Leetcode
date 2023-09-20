public class Solution {
    public int FindKthLargest(int[] nums, int k) {
        PriorityQueue<int, int> pq = new PriorityQueue<int, int>(
            nums.Select((num) => (num, -num))
        );

        while (k-- > 1 && pq.Count > 0)
        {
            pq.Dequeue();
        }

        return pq.Count > 0 ? pq.Dequeue() : -1;
    }
}