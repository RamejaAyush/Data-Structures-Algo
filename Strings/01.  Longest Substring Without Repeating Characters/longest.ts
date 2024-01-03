/*
 * Time Complex: O(N)
 * Space Complex: O(1)
 */
function longest(s: string): number {
  const hashmap = new Map()
  let longestSubString: number = 0
  let p1: number = 0

  for (let p2 = 0; p2 < s.length; p2++) {
    let current: string = s[p2]
    let lastSeenCharVal: number = hashmap.get(current)

    if (lastSeenCharVal >= p1) p1 = lastSeenCharVal + 1

    hashmap.set(current, p2)
    longestSubString = Math.max(longestSubString, p2 - p1 + 1)
  }

  return longestSubString
}

function longestOptimized(s: string): number {
  let p1: number = 0,
    p2: number = 0,
    longest: number = 0

  const set = new Set()
  while (p2 < s.length) {
    if (!set.has(s[p2])) {
      set.add(s[p2++])
      longest = Math.max(longest, set.size)
    } else set.delete(s[p1++])
  }

  return longest
}

const test1 = longestOptimized('abcbdac')
console.log(test1)
