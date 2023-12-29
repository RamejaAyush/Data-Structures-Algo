/*
 * Time Complex: O(NM), N rows, M col
 * Space Complex: O(1)
 * @params {matrix: number[][]} given matrix
 * @returns: This question requires to modify the given matrix, returning for examples
 */
function setZeros(matrix: number[][]): number[][] {
  let firstRowContainsZero: boolean = false
  let firstColContainsZero: boolean = false

  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColContainsZero = true
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowContainsZero = true
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix.length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0
        matrix[0][col] = 0
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix.length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0
      }
    }
  }

  if (firstRowContainsZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0
    }
  }

  if (firstColContainsZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0
    }
  }

  return matrix
}

const test1 = setZeros([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
])
console.log(test1)
