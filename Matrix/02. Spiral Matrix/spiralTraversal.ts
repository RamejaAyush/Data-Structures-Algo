/*
 * Time Complex: O(MN) Row X Col
 * Space Complex: O(MN) same
 * @param {matrix: number[][]} given matrix
 * @return {traversal: number[]} traversal resultant array
 */
function spiralTraversal(matrix: number[][]): number[] {
  if (matrix.length === 0) return []

  const traversal: number[] = []
  let left: number = 0,
    top: number = 0,
    right: number = matrix[0].length - 1,
    bottom: number = matrix.length - 1

  while (top <= bottom && left <= right) {
    // left -> right
    for (let topRow = left; topRow <= right; topRow++) {
      traversal.push(matrix[top][topRow])
    }
    top++

    // top -> bottom
    for (let lastCol = top; lastCol <= bottom; lastCol++) {
      traversal.push(matrix[lastCol][right])
    }
    right--

    // right -> left
    if (top <= bottom) {
      for (let lastRow = right; lastRow >= left; lastRow--) {
        traversal.push(matrix[bottom][lastRow])
      }
      bottom--
    }

    // bottom -> top
    if (left <= right) {
      for (let firstCol = bottom; firstCol >= top; firstCol--) {
        traversal.push(matrix[firstCol][left])
      }
      left++
    }
  }

  return traversal
}

const test1 = spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])
console.log(test1)
