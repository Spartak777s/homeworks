// 1.Declare 2 variables a and b, such that a & gt; b, and define values for them.
let res
function calculator(a, b) {
    let sum = a + b
    let difference = a - b
    let product = a * b
    let quotient = a / b
    let remainder = a % b
    res =`Sum: ${sum}, difference: ${difference}; product:  ${product}; quotient: ${quotient}, remainder: ${remainder}`
    return res
}





// Print your name and age in the following format: “My name is ____, I am ____
function presentation(name,age){
    return `My name is ${name}, I am ${age}`
}




// Declare a variable with defined value.Print the last digit of the number.
function lastDig(num1) {
    let res = num1.toString()
    console.log(res)
    return res.slice(-1)
}


// Check whether a given number is negative.Print “yes”, if it is negative, print “no”
// otherwise.
function checkingNeg(num2) {
    if (num2 >= 0) {
        console.log('no')
    } else {
        console.log('yes')
    }
}


// For a given three digit number calculate the sum of its digits.
function digSum(num3) {
    let res = num3
    let sum = res.split('')
    let result = 0
    for (i = 0; i < sum.length; i++) {
        result += +sum[i]

    }
    return result
}