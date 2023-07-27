
/**
 * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

* Example Input: "hello world" Example Output: "dlrow olleh"

 */

const nameStr = 'Md Hasib Imam Hridoy'

const strReverse = (str) => {

    let reverserStr = ""
    const arrayOfStr = str.toLowerCase().split("")

    for (let index = (arrayOfStr.length - 1); index >= 0; index--) {
        const element = arrayOfStr[index];
        reverserStr += element

    }

    return reverserStr.split(" ").join(" ")

}

console.log(strReverse(nameStr));