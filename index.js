'use strict'

function CollatzConjecture (number) {
  var result = []

  // Push the initial value to result's array
  result.push(number)

  // Until number = 1, do...
  while (number != 1) {
    // If the number is even
    // Divide by 2
    if (number % 2 === 0) {
      number /= 2
    } else {
      // Otherwise, the number is odd, right?
      // So, multiply it by 3 and add 1
      number = (number * 3) + 1
    }

    // Push everything to result's array
    result.push(number)
  }

  // Log the result array...
  console.log(result)
  // ... and its length
  console.log(result.length)
}
