public class SmallestInfiniteSet {
    private PriorityQueue<int, int> pq;
    private ISet<int> set;
    private int NUM = 1000;

    public SmallestInfiniteSet() {
        IEnumerable<int> infiniteSet = Enumerable.Range(1, NUM);
        pq = new PriorityQueue<int, int>(
            infiniteSet.Select(v => (v, v))
        );

        set = new HashSet<int>(infiniteSet);

    }
    
    public int PopSmallest() {
        if (pq.Count > 0) {
            int smallest = this.pq.Dequeue();
            set.Remove(smallest);
            return smallest;
        }
        return -1;
    }
    
    public void AddBack(int num) {
        if (set.Contains(num)) return;

        set.Add(num);
        pq.Enqueue(num, num);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.PopSmallest();
 * obj.AddBack(num);
 */