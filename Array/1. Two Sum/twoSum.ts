/*
 * Time Complex: O(N): Number of element in the nums array
 * Space Complex: O(N): Hashmap
 * @param {nums: number[]} Array of numbers
 * @param {target: number} given target
 * @return {number[] | null}
 */
function twoSum(nums: number[], target: number): number[] | null {
  const hashmap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let diff = target - current

    if (hashmap.has(diff)) return [hashmap.get(diff), i]
    hashmap.set(current, i)
  }

  return null
}

const test1 = twoSum([2, 7, 9, 11, 13], 11)
console.log(test1)
