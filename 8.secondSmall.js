const numArr = [233,432,4532,45,2,32,5,6,7]

const secondSmallest = (arr)=>{

    const result = arr.sort((a,b)=>a-b)
    return result[1]

}

console.log(secondSmallest(numArr));