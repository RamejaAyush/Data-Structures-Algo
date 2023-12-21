/*
 * Time Complex: O(N)
 * Space Complex: O(N)
 * @param {nums: number[]} Array of numbers
 * @return {result: number[]} Array which contains the product except self
 */
function product(nums: number[]): number[] {
  const length: number = nums.length
  const prefix: number[] = new Array(length).fill(0)
  const suffix: number[] = new Array(length).fill(0)
  const result: number[] = new Array(length).fill(0)

  let prefixProduct: number = 1
  for (let p = 0; p < length; p++) {
    prefix[p] = prefixProduct
    prefixProduct *= nums[p]
  }

  let suffixProduct: number = 1
  for (let s = length - 1; s >= 0; s--) {
    suffix[s] = suffixProduct
    suffixProduct *= nums[s]
  }

  for (let i = 0; i < length; i++) {
    result[i] = prefix[i] * suffix[i]
  }

  return result
}

/*
 * Time Complex: O(N)
 * Space Complex: O(N)
 * @param {nums: number[]} Array of numbers
 * @return {result: number[]} Array which contains the product except self
 */
function alternateProduct(nums: number[]): number[] {
  const length: number = nums.length
  const result: number[] = new Array(length).fill(1)
  let prefix: number = 1
  let suffix: number = 1

  for (let i = 0; i < length; i++) {
    result[i] *= prefix
    result[length - 1 - i] *= suffix
    prefix *= nums[i]
    suffix *= nums[length - 1 - i]
  }

  return result
}

const test = alternateProduct([1, 2, 3, 4])
console.log(test) // [ 24, 12, 8, 6 ]
