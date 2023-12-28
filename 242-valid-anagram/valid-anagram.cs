public class Solution {
    public bool IsAnagram(string s, string t) {
        IDictionary<char, int> sCharCount = new Dictionary<char, int>();

        foreach (char c in s) 
        {
            if (sCharCount.TryGetValue(c, out int count)) {
                sCharCount[c] = count + 1;
            } else {
                sCharCount.Add(c, 1);
            }
        }

        foreach (char c in t) 
        {
            if (sCharCount.TryGetValue(c, out int count))
            {
                if (count == 0) return false;
                sCharCount[c] = sCharCount[c] - 1;
            } else {
                return false;
            }
        }

        return sCharCount.All(pair => pair.Value == 0);


    }
}