// 1. Given an array.Write a recursive function that returns the sum of it. (Hint: arr.pop())
function recsum(arr, sum = 0) {
    if (arr.length) {
        let res = arr.pop()
        return recsum(arr, sum += res)
    }
    return sum
}


// 2. Given a number.Write a recursive function that reverse the number.Return the new
// number.
function reverseNum(n) {
    let num;
    let reversed = '';
    let result;
    const recurse = (n) => {
        for (let i = 0; i < n; i++) {
            num = n % 10;
            reversed += num
            result = parseInt(n / 10)
            recurse(result);
            if (result === 0) {
                break;
            }
        }
        return reversed;
    };
    return recurse(n);
}

// 3. Given a string, compute recursively(no loops) a new string where all appearances of & quot; pi & quot;
// have been replaced by & quot; 3.14 & quot;.

function replaceRecurs(str, item, repItem) {
    let result = ''
    lengt = str.length
    const newStr = str.split(item).join(repItem)
    if (str.length) {
        result = newStr.split(lengt - 1).join()
        return result
    }

    return replaceRecurs(str, item, repItem)
}

replaceRecurs('picsart pipelines', 'pi', '3,14')

// 4.Given a string.Return true, if it is mirror symmetric to its middle symbol.

function recSym(str) {

    let middleIndex = Math.floor((str.length - 1) / 2)
    let midleitem = str[middleIndex]
    let current1 = str.slice(0, middleIndex + 1).split('').reverse().join('')
    console.log(current1)
    let current2 = str.slice(middleIndex + 1)
    console.log(current2)
    if (current1 === current2) {
        return true
    } else {
        return false
    }
}




// 5. Given an array of nested arrays.Write a recursive function that flattens it. (Hint create
// function that concats arrays).


function recConcat(arr, result = []) {
    let merged = arr.flat(Infinity)
    result.concat(merged)
    if (result.length) {
        result.pop()
        return recConcat(arr, result)
    }
    return merged
}


// 6. Given a number.Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number.Repeat that process if needed
// and return the result.

function recSumDig(num) {
    let sum = 0
    let current = num.toString()
    let arr = current.split('')

    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]
        if (sum >= 10) {
            let sum2 = 0
            let current2 = sum.toString()
            let arr2 = current2.split('')
            for (let j = 0; j < arr2.length; j++) {
                sum2 += +arr2[j]
            }
            return sum2

        }
    }
    return sum
}