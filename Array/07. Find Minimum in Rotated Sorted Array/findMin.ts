/*
 * Time Complex: O(log N) because of binary search
 * Space Complex: O(1)
 * @param {nums: number[]} given array
 * @returns {element: number} returns the min element in the array
 */
function findMin(nums: number[]): number {
  let left: number = 0,
    right: number = nums.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return nums[left]
}

const test1 = findMin([3, 4, 5, 1, 2])
const test2 = findMin([4, 5, 6, 7, 0, 1, 2])
console.log(test1, test2)
