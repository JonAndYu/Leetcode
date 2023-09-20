/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // word1.
    let concat = "";

    let maxLength = word1.length > word2.length ? word1.length : word2.length;

    for (let i = 0; i < maxLength; i++) {
        if (word1.length > i) {
            concat += word1[i];
        }
        if (word2.length > i) {
            concat += word2[i];
        }
    }


    return concat;
};