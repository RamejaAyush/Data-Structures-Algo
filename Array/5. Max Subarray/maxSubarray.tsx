/*
 * Time Complex: O(N) number of elements in the array
 * Space Complex: O(1)
 * @params {nums: number[]} given array
 * @return {maxSum: number} sum of max sub array
 */
function maxSubArray(nums: number[]): number {
  let maxSum: number = -Infinity
  let currentSum: number = 0

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum
}

const test1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
const test2 = maxSubArray([1])
const test3 = maxSubArray([5, 4, -1, 7, 8])
console.log(test1, test2, test3)
