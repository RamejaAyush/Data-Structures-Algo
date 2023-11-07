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
