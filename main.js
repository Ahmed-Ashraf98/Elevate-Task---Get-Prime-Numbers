/**
 * @summary: Loop from 1 to the passed number and check if this number is prime or not
 * @param: number
 * @returns: true if number is prime otherwise false
 */
const isPrime = function (num) {
  // all natural numbers are divisible by 1 and the number itself. so we will start the count=2
  let count = 2;
  // prime numbers are divisible by only 1 and the number itself.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count === 2 ? true : false;
};

/**
 * @param: number
 * @summary: takes a number and print it in console
 */
const printNum = function (num) {
  console.log(num);
};

/**
 * @param : message text
 * @summary: log into console an error message
 */
const errorMsg = function (msg) {
  console.error(msg);
};

/**
 * @param: n --> the number
 * @summary: Check if the passed param is number or not
 * @returns: True if number otherwise False
 */
const isNumber = (n) => typeof n === "number";

/**
 * @param: n --> the first number
 * @param: m --> the second number
 * @summary: takes 2 numbers (n,m) then print all prime numbers between them
 */
function getPrimeNumbers(n, m) {
  // if one or both params are not number then don't continue
  if (!isNumber(n) || !isNumber(m)) {
    errorMsg("The two prams should be number");
    return;
  }

  let startNum = n < m ? n : m;
  let endNum = m > n ? m : n;

  for (startNum++; startNum < endNum; startNum++) {
    let currNum = startNum;
    if (isPrime(currNum)) {
      printNum(currNum);
    }
  }
}

getPrimeNumbers(7, 20);
