/*
 * Time Complex: O(N)
 * Space Complex: O(1)
 */
function rotate(matrix: number[][]): number[][] {
  let length: number = matrix.length

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length / 2; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][length - 1 - j]
      matrix[i][length - 1 - j] = temp
    }
  }

  return matrix
}

const test1 = rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
test1.forEach((row) => {
  console.log(row)
})
