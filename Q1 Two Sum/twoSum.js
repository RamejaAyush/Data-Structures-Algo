/*
 * Two Sum Brute Force
 * Complexity: {time: O(N^2), space: O(1)}
 * @params {nums: given array of integers}
 * @params {target: integer}
 * @returns {array of indexs [integers]}
 */
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]

      if (sum === target) return [i, j]
    }
  }

  return []
}

/*
 * Two Sum Optimized
 * Complexity: {time: O(N), space: O(N)}
 * @params {nums: given array of integers}
 * @params {target: integer}
 */
const twoSumOptimized = (nums, target) => {
  const hashmap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    const diff = target - current

    if (hashmap.has(diff)) return [hashmap.get(diff), i]

    hashmap.set(current, i)
  }

  return []
}

const bruteforceRes = twoSumBruteForce([2, 7, 9, 11, 13], 11)
const optimizedRes = twoSumOptimized([2, 7, 9, 11, 13], 11)
console.log(bruteforceRes, optimizedRes)
