const arr = [1, 3, 4, 2, 2]

let slow = arr[0]

console.log(`slow: ${slow}, inc: ${arr[slow]}, more: ${arr[arr[slow]]}`)
