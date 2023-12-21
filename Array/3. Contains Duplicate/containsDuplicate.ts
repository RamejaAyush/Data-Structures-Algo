/*
 * Time Complex: O(N) number of elements in the array
 * Space Complex: O(N) Creating set using the array
 * @param {nums: number[]} array of numbers
 * @returns {boolean} true if contains duplicate
 */
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
}

const test = containsDuplicate([1, 2, 3, 1])
const test2 = containsDuplicate([1, 2, 3, 4])
console.log(test, test2)
