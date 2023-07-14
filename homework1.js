// 1. Given an array of numbers.Write a function to separate odd and even numbers in
// different arrays.
function evenOdd(arr) {
    let arrOdd = []
    let arrEven = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arrEven.push(arr[i])
        } else {
            arrOdd.push(arr[i])
        }
    }
    return `arrEven:${arrEven}, arrOdd:${arrOdd}`
}


// array1 = [12, 3, 6, 17, 0, 45]


// Write a function that calculates sum, difference, multiplication and division between
// given array elements depending on passed operation symbol.Write appropriate function
// for each operation.
function calculator(arr, symbol) {
    let result = arr[0]
    for (let i = 1; i < arr.length; ++i) {
        if (symbol === '+') {
            result += arr[i]
        } else if (symbol === '-') {
            result -= arr[i]
        } else if (symbol === '*') {
            result *= arr[i]
        } else if (symbol === '/') {
            result /= arr[i]
        }
    }
    return result
}

// calculator(arr12, '+')
// arr12=[2, 3, 4, 5]

// Write a function which receives two strings and removes appearances of the second
// string from the first one.
function removesymb(str, exp) {
    let removedStr = exp
    let result = ''
    for (let key in str) {
        // console.log(removedStr)
        if (!removedStr.includes(str[key])) {
            result += (str[key])

        }
    }
    return result
}


// 4. Given an object.Invert it(keys become values and values become keys).If there is
// more than key for that given value create an array.


function changeValueToKeyy(obj) {
    const resultObj = {};
    for (let key in obj) {
        if (!(obj[key] in resultObj)) {
            resultObj[obj[key]] = key;
        } else {
            let arr = [resultObj[obj[key]]];
            arr.push(key);
            resultObj[obj[key]] = arr
        }
    }
    return resultObj
}
obj = { b: '1', c: '2', d: '2', g: '3', j: '3' }






// 5. Given two objects.Write a function that performs shallow compare.
function shallowcopare(obj1, obj2) {
    for (let key in obj1) {
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (let key in obj2) {
        if (!(key in obj1) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}