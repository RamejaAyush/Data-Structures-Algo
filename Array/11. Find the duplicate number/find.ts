/* 
  Time: O(N^2)
  Space: O(1)
*/
const findDuplicate = (nums: number[]): number => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return nums[i]
    }
  }

  return -1
}

const findDuplicateOptimized = (nums: number[]): number => {
  let slow: number = nums[0]
  let fast: number = nums[0]

  do {
    slow = nums[slow]
    fast = nums[nums[fast]]
    console.log(`current, slow: ${slow}, fast: ${fast}`)
  } while (slow !== fast)

  slow = nums[0]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
    console.log(`later, slow: ${slow}, fast: ${fast}`)
  }

  return slow
}

const ans: number = findDuplicateOptimized([1, 3, 4, 2, 2])
console.log(ans)
