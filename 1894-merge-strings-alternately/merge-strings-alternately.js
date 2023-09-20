/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // word1.
    let concat = "";

    let turn = false;
    let w1Ptr = 0;
    let w2Ptr = 0;

    while (w1Ptr < word1.length && w2Ptr < word2.length) {
        if (!turn){
            // Word1
            concat += word1[w1Ptr];
            w1Ptr++;
        } else {
            //Word2;
            concat += word2[w2Ptr];
            w2Ptr++;
        }
        turn = !turn;
    }

    if (w1Ptr < word1.length) {
        concat += word1.substring(w1Ptr);
    }
    
    if (w2Ptr < word2.length) {
        concat += word2.substring(w2Ptr);
    }
    return concat;
};