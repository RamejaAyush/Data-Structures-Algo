/*
 * Time Complex: O(N) number of elements in the prices array
 * Space Complex: O(1)
 * @param {prices: number[]} given prices of each day
 * @return {maxProfit: number} max profit that can be achived
 */
function sell(prices: number[]): number {
  let maxProfit: number = 0
  let minPrice: number = prices[0]

  for (let i = 1; i < prices.length; i++) {
    let current: number = prices[i]

    if (current < minPrice) {
      minPrice = current
    } else {
      let currentProfit: number = current - minPrice
      maxProfit = Math.max(currentProfit, maxProfit)
    }
  }

  return maxProfit
}

const test1 = sell([7, 1, 5, 3, 6, 4])
const test2 = sell([7, 6, 4, 3, 1])
console.log(test1, test2)
