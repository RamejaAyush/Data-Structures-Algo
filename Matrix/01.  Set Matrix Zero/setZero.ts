/*
 * Time Complex: O(NM), N rows, M col
 * Space Complex: O(1)
 * @params {matrix: number[][]} given matrix
 * @returns: This question requires to modify the given matrix, returning for examples
 */
function setZeros(matrix: number[][]): number[][] {
  let firstRowHasZero: boolean = false
  let firstColHasZero: boolean = false

  for (let firstRow: number = 0; firstRow < matrix.length; firstRow++) {
    if (matrix[firstRow][0] === 0) firstColHasZero = true
    break
  }

  for (let firstCol: number = 0; firstCol < matrix[0].length; firstCol++) {
    if (matrix[0][firstCol] === 0) firstRowHasZero = true
    break
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0
        matrix[row][0] = 0
      }
    }
  }

  for (let row: number = 1; row < matrix.length; row++) {
    for (let col: number = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0
      }
    }
  }

  if (firstColHasZero) {
    for (let row: number = 0; row < matrix.length; row++) {
      matrix[row][0] = 0
    }
  }

  if (firstRowHasZero) {
    for (let col: number = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0
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
