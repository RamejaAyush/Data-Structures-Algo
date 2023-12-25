/*
 * Time Complex: O(log N) because of binary search
 * Space Complex: O(1)
 * @param {nums: number[]} given array
 * @param {target: number} given target
 * @returns {index: number} return the index if found else -1
 */
function findInArray(nums: number[], target: number): number {
  let left: number = 0,
    right: number = nums.length - 1

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2)

    if (nums[mid] === target) return mid
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}

const test1 = findInArray([4, 5, 6, 7, 0, 1, 2], 0)
const test2 = findInArray([4, 5, 6, 7, 0, 1, 2], 2)
const test3 = findInArray([1], 0)

console.log(test1, test2, test3)
