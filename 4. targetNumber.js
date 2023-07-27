const findTwoNumbersWithSum = (sortedArray, target) => {

    let left = 0;
    let right = sortedArray.length - 1;
  
    while (left < right) {
      const sum = sortedArray[left] + sortedArray[right];
      console.log(sum);
  

      if (sum === target) {
        return [left, right];
      }

      else if (sum < target) {
        left++;
      }

      else {
        right--;
      }
    }
  
    return [];
  }