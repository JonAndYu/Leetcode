function isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let sFreq = s.split('').reduce((acc, v) => (acc[v] = (acc[v] ?? 0) + 1, acc), {});

        for (let c of t) {
            if (sFreq.hasOwnProperty(c) && sFreq[c] > 0) {
                sFreq[c]--;
            } else {
                return false;
            }
        }
        return true;
    }