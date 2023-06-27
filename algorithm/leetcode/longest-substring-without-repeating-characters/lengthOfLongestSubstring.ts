function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0
  }

  let i = 0
  let len = s.length
  let results = []
  let current = 0
  for (i; i < len; i++) {
    let char = s[i]
    let result = (results[current] = results[current] || [])
    if (result.includes(char)) {
      ++current
      result = (results[current] = results[current] || [])
    }
    result.push(char)
  }

  console.log(results)
  results = results.map(item => item.length)
  const sorted = results.sort((a, b) => b - a)
  return sorted[0]
}

console.log(lengthOfLongestSubstring('abcabcbb') === 3)
console.log(lengthOfLongestSubstring('bbbbb') === 1)
console.log(lengthOfLongestSubstring('aab') === 2)
console.log(lengthOfLongestSubstring('dvdf') === 3)
console.log(lengthOfLongestSubstring('pwwkew') === 3)