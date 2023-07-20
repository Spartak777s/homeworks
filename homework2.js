// Given a string.Check whether the string is palindrome or not.
function chekingPalindrome(str) {
    let size = str.length
    for (let i = 0; i < size / 2; i++) {
        if (str[i] !== str[size - 1 - i]) {
            return 'no'
        }
    }
    return 'yes'
}



// 2.Given a string and symbols.Change first symbol by the second one in the string.

function replaceString(str, l1, l2) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === l1) {
            newStr += l2
        } else {
            newStr += str[i]
        }

    }
    return newStr
}


// 3.Print the following number pattern(write a function)
function printPyramid(deep) {
    let n = deep;
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += j;
        }
        string += "\n";
    }
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 1; j <= n - i; j++) {
            string += j;
        }
        string += "\n";
    }
return string
}


// 4.Print following pattern(write a function)
function printPattern2(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j < i; j++) {
            spaces += " ";
        }
        console.log(spaces + "*");
    }
}


// 6.Print following pattern(write a function)
function printPattern(rows, cols) {
    let pattern = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            pattern += '*  ';
        }
        pattern += '\n';
    }
    return pattern
}