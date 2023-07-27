const simpleCalculator = (num1,num2,opeSyntext)=>{

    if (opeSyntext === "+") {
        return num1 + num2
    } 
    if (opeSyntext === "-") {
        return num1 - num2
    } 
    if (opeSyntext === "*") {
        return num1 * num2
    } 
    if (opeSyntext === "/") {
        return num1 + num2
    } 
    if (opeSyntext === "/") {
        return num1 + num2
    } 
}

console.log(simpleCalculator(2,3,"*"));