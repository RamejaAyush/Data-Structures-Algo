function maxProduct(nums: number[]): number {
  let maxSoFar: number = nums[0]
  let minSoFar: number = nums[0]
  let max: number = maxSoFar

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i]
    let tempMax = Math.max(current, maxSoFar * current, minSoFar * current)
    minSoFar = Math.min(current, minSoFar * current, maxSoFar * current)
    maxSoFar = tempMax
    max = Math.max(max, maxSoFar)
  }

  return max
}

const test1 = maxProduct([2, 3, -2, 4])
const test2 = maxProduct([-2, 0, -1])
console.log(test1, test2)
