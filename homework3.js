// 1. Given an array.Determine whether it consists only from uniques or not.
function uniqueOrNot(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return 'not unique'
            }
        }
    }
    return 'unique'
}
const arr1 = [1, 2, 3, 4, 5, 6]
console.log(uniqueOrNot(arr1));



// 2. Given an array of integers.All numbers are unique.Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

const numbers = [2, 6, 8, 9, 4, 1, 23]

function arrSequance(numbers) {
    let count = 0
    const max = Math.max(...numbers)
    let min = Math.min(...numbers)
    for (min; min <= max; min++) {
        if (!(numbers.find((el) => el === min))) {
            count++
        }

    }
    return count
}

console.log(arrSequance(numbers))

// 3.
// Write a constructor function called CoffeeShop, which has three instance properties:
// 1. name: a string(basically, of the shop)
// 2. menu: an array of items(of object type), with each item containing the item(name
// of the item), type(whether food or a drink) and price.
// 3. orders: an empty array
// and seven methods:
// 1. addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu.Otherwise, return & quot;This item is currently unavailable! & quot;
// 2. fulfillOrder: if the orders array is not empty, return & quot;The { item } is ready! & quot;. If the
// orders array is empty, return & quot;All orders have been fulfilled! & quot;
// 3. listOrders: returns the list of orders taken, otherwise, an empty array.
// 4. dueAmount: returns the total amount due for the orders taken.
// 5. cheapestItem: returns the name of the cheapest item on the menu.
// 6. drinksOnly: returns only the item names of type drink from the menu.
// 7. foodOnly: returns only the item names of type food from the menu.
//     IMPORTANT: Orders are fulfilled in a FIFO(first -in, first - out) order.

??