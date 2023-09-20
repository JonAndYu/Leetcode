public class Solution {
    public int[][] KClosest(int[][] points, int k) {
        PriorityQueue<int[], double> pq = new PriorityQueue<int[], double>(
            points.Select(point => (point, Math.Sqrt(Math.Pow(point[0], 2) + Math.Pow(point[1], 2))))
        );

        int[][] res = new int[k][];

        for (int i = 0; i < k; i++)
        {
            res[i] = pq.Dequeue();
        }
        return res;
    }
}