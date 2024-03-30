// Function to filter out prime numbers from an array of numbers
function getPrimes(arr) {

    // Function to check if a number is prime
    function isPrime(num) {

      // If the number is less than 2, it's not a prime number
      if (num < 2) return false;

      // If the number is 2, it's a prime number
      if (num === 2) return true;
      
      // Loop through the numbers from 2 to the square root of the input number
      for (let x = 2; x <= Math.sqrt(num); x++) {

        // If input number is divisible by any number in the loop, it's not a prime number
        if (num % x === 0) return false;
      }
      // If input number passes all checks, it's a prime number
      return true;
    }

    // Use array filter method to filter out prime numbers only from the input array
    return arr.filter(isPrime);
}

// Example:
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 2, 3, 5, 7