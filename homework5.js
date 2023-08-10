// 1.array find
function impFind(fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const resultOfFn = fn(this[i], i, this)
        if (resultOfFn) {
            result.push(this[i])
            break;
        }
    }
    return result
}

arr.impFind = impFind




// 2.array Map
function impMap(fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))

    }

    return result
}
arr1.impMap = impMap




// 3.array FindIndex

function impFindIndex(fn) {
    const result = []
    for (let i = 0; i < this.length; i++) {
        const resultOfFn = fn(this[i], i, this)
        if (resultOfFn) {
            result.push(i)
            break
        }
    }
    return result
}
let arr1=[1,2,3,4,5,6]
arr1.impFindIndex=impFindIndex



// 4.array reduce

function impReduce(fn) {
    let current = 0
    for (let i = 0; i < this.length; i++) {
        fn(current = current + this[i])
    }
    return current
}
arr.impReduce = impReduce
// arr.impReduce((acc, item) => acc + item)