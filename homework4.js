// string-includes
function implementIncludes(str, substring) {
    const newStr = str.split(substring).join('t');
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === 't') {
            return true
        }

    }
    return false
}




// String-indexof
function implementIndex(str, indexstr, start) {
    for (let i = start; i < str.length; i++) {
        if (str[i] === indexstr)
            return i
    }
    return -1
}


// string-replaceAll
function implementReplaceAllStr(str, substr, changeStr) {
    let result = "";
    const newStr = str.split(substr).join("|");
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "|") {
            result += changeStr;
        } else {
            result += newStr[i];
        }
    }

    return result;
}






// Array methods
function implementIncludesArr(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true
        }
    }
    return false
}


// 2
function implIndexofArr(arr, item, start) {
    for (let i = start; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}


function impSliceArr(arr, start, end) {
    let result = []
    for (let i = start; i < end; i++) {
        result.push(arr[i])
    }

    return result
}