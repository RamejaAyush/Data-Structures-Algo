const removeDuplicatesBF = (nums: number[]): number => {
  let i: number = 0

  while (i < nums.length) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      for (let j = i + 1; j < nums.length; j++) {
        nums[j] = nums[j + 1]
      }
      nums.length--
    } else {
      i++
    }
  }

  return nums.length
}

const removeDuplicatesOP = (nums: number[]): number => {
  if (nums.length === 0) return 0

  let writePointer: number = 1

  for (let readPointer: number = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[writePointer - 1]) {
      nums[writePointer] = nums[readPointer]
      writePointer++
    }
  }

  return writePointer
}

const ans = removeDuplicatesOP([1, 1, 2])
console.log(ans)
