/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPtr = 0, tPtr = 0;

    while (sPtr < s.length && tPtr < t.length) {
        if (t[tPtr] === s[sPtr]) {
            sPtr++;
        }
        tPtr++;
    }
    return sPtr === s.length;
};