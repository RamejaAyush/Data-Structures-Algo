# Approach

we have to find the best time to buy and sell the stock. so, let's assume first element in the prices array is the min prices. then iterate over the array, if `arr[current] < minPrice` we will assign the minPrice to current element. Basically we have to keep a track of the lowest price. and if we didn't get the minPrice we will calculate the current profit and check if it is greater than maxProfit we will assign current profit to the maxProfit variable.

### code

```
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
```

### Complexity Breakdown

As this question requires to compare each element in the prices array, so time Complexity will be linear, talking about space Complexity, it will be constant as we are not storing anything.
