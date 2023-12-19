public class Solution {
public int[] TwoSum(int[] nums, int target)
{
    IDictionary<int, int> map = new Dictionary<int, int>();

    int[] indices = new int[2];

    for (int i = 0; i < nums.Length; i++)
    {
        int goal = target - nums[i];
        if (map.ContainsKey(goal))
        {
            indices[0] = i;
            indices[1] = map[goal];
            return indices;
        }
        map.TryAdd(nums[i], i);
    }

    return indices;
}
}