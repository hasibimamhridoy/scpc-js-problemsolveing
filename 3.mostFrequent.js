const numArr = [3, 5, 2, 5, 3, 3, 1, 4, 5, 3]

const mostFrequent = (arr) => {

    const frequencyObj = {}

    arr.forEach(num => frequencyObj[num] = (frequencyObj[num] || 0) + 1)
    
    let maxFrequency = 0;
    let mostFrequentElement;

    for (let element in frequencyObj) {
        if (frequencyObj[element] > maxFrequency) {
            maxFrequency = frequencyObj[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement

}


