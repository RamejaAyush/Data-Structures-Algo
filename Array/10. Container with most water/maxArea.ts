/*
 * Time Complex: O(N), have to iterate over the whole array
 * Space Complex: O(1)
 * @param {height: number[]} given array
 * @return {maxArea: number} returns the max area
 */
function maxArea(height: number[]): number {
  let maxArea: number = 0
  let left: number = 0
  let right: number = height.length - 1

  while (left < right) {
    let currentHeight = Math.min(height[left], height[right])
    let currentWidth = right - left
    let currentArea = currentHeight * currentWidth
    maxArea = Math.max(maxArea, currentArea)

    if (height[left] <= height[right]) left++
    else right--
  }

  return maxArea
}

const test1 = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
const test2 = maxArea([1, 1])
console.log(test1, test2)
