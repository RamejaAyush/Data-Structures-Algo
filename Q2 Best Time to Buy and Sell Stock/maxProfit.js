/*
 * Best time to buy and sell the stock
 * Complexity: {time: O(N), space: O(1)}
 * @params {prices: given array of integers which are prices}
 * @returns {maxProfit: integer}
 */
const maxProfit = (prices) => {
  let maxProfit = 0
  let minPrice = prices[0]

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }

  return maxProfit
}

const res = maxProfit([7, 1, 5, 3, 6, 4])
console.log(res)
