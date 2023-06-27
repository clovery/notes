function lengthOfLongestSubstring(s) {
    if (!s) {
        return 0;
    }
    var i = 0;
    var len = s.length;
    var results = [];
    var current = 0;
    for (i; i < len; i++) {
        var char = s[i];
        var result = (results[current] = results[current] || []);
        if (result.includes(char)) {
            ++current;
            result = (results[current] = results[current] || []);
            i = i - 1;
        }
        result.push(char);
    }
    console.log(results);
    results = results.map(function (item) { return item.length; });
    var sorted = results.sort(function (a, b) { return b - a; });
    return sorted[0];
}
console.log(lengthOfLongestSubstring('abcabcbb') === 3);
console.log(lengthOfLongestSubstring('bbbbb') === 1);
console.log(lengthOfLongestSubstring('aab') === 2);
console.log(lengthOfLongestSubstring('dvdf') === 3);
console.log(lengthOfLongestSubstring('pwwkew') === 3);
