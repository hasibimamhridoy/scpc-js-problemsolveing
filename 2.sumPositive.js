/**
 * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19

 */

const numArr = [2, -5, 10, -3, 7]

const sumIfPositive = (arr) => {

    const positive = arr.filter(num=>num>0)
    const result = positive.reduce((total, currentVaue) => total + currentVaue,0)
    return result

}
