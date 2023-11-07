## Brute Force Approach

Keeping things basic, Running two nested loops, let's assume outter loop is `i` and inner loop is `j`.

so, if `i` pointer goes from `0 -> arr.length - 1`\
and if `j` pointer goes from `i + 1 -> arr.length - 1` \

now we can create couples which contains the index of element which sums upto the given target.

### Code

```
/*
 * Two Sum Brute Force
 * Complexity: {time: O(N^2), space: O(1)}
 * @params {nums: given array of integers}
 * @params {target: integer}
 * @returns {array of indexs [integers]}
 */
const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j]

      if (sum === target) return [i, j]
    }
  }

  return []
}
```

### Complexity Breakdown

In our program, there are two nested loops which are Targeting the array. We are not storing anything so, space becames constant.

Time Complexity: `O(N^2)`\
Space Complexity: `O(1)`

### Improvements

Interviewer will ask to improve the algorithm in `O(N)` Time Complexity.

## Optimized Approach

Looking at our brute force approach we can easily assume that we have to solve the problem with 1 loop, So, question comes how?
If `nums[i] + nums[j] === sum` and if `sum === target` gives the answer. so, what about `nums[j] === target - nums[i]` so, now we are looking for the diff. instead of the sum.\

now, how can we know when we got the result?

we can store our current as a key and index of current as a value pair in the hashmap. so, if later in the loop, the diff. is in our hashmap we can return at what index we found that perticular index.

### Code

```
/*
 * Two Sum Optimized
 * Complexity: {time: O(N), space: O(N)}
 * @params {nums: given array of integers}
 * @params {target: integer}
 */
const twoSumOptimized = (nums, target) => {
  const hashmap = new Map()

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    const diff = target - current

    if (hashmap.has(diff)) return [hashmap.get(diff), i]

    hashmap.set(current, i)
  }

  return []
}
```

### Complexity Breakdown

We have come with a solution with 1 loop, so, time will be linear. but now as we have a hashmap, that is a scaling data structure, so, space also becames linear.

Time Complexity: `O(N)`\
Space Complexity: `O(N)`
