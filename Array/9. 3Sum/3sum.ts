/*
 * Time Complex: O(N^2), nested loops, n is the number of elements in the array
 * Space Complex" O(1)
 * @param {nums: number[]} given array
 * @returns {triplets: number[][]} contains all the unique triplets
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)
  const triplets: number[][] = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left: number = i + 1,
        right: number = nums.length - 1
      let sum: number = -nums[i]

      while (left < right) {
        let currentSum: number = nums[left] + nums[right]

        if (currentSum === sum) {
          const triplet = [nums[i], nums[left], nums[right]]
          triplets.push(triplet)

          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        } else if (currentSum < sum) left++
        else right--
      }
    }
  }

  return triplets
}

const test1 = threeSum([-1, 0, 1, 2, -1, -4])
const test2 = threeSum([0, 1, 1])
const test3 = threeSum([0, 0, 0])
console.log(test1, test2, test3)
