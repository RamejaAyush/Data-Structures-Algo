function sortColors(nums: number[]): void {
  let low = 0
  let mid = 0
  let high = nums.length - 1

  while (mid <= high) {
    switch (nums[mid]) {
      case 0:
        ;[nums[low], nums[mid]] = [nums[mid], nums[low]]
        low++
        mid++
        break
      case 1:
        mid++
        break
      case 2:
        ;[nums[mid], nums[high]] = [nums[high], nums[mid]]
        high--
        break
    }
  }
}

// Example usage:
const colors = [2, 0, 2, 1, 1, 0]
sortColors(colors)
console.log(colors)
