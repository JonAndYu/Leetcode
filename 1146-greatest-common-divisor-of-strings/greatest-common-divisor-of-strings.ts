function gcdOfStrings(str1: string, str2: string): string {
    function isValid(k): boolean {
        let len1 = str1.length, 
            len2 = str2.length;
        if (len1 % k > 0 || len2 % k > 0) return false;
        let base = str1.substring(0, k);
        return str1.split(base).join('') === '' && str2.split(base).join('') === '';
    }

    let len1 = str1.length, 
        len2 = str2.length;

    for (let i = Math.min(len1, len2); i >= 0; i--) {
        if (isValid(i)) return str1.substring(0, i);
    }

    return "";
};