const moveZeros = (nums: number[]): number[] => {
  let writePointer: number = 0

  for (let readPointer: number = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== 0) {
      ;[nums[readPointer], nums[writePointer]] = [
        nums[writePointer],
        nums[readPointer],
      ]
      writePointer++
    }
  }

  return nums
}

const ans: number[] = moveZeros([0, 1, 0, 3, 12])
console.log(ans)
