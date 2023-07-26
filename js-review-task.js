// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reversedString(string) {
    let array = []
    for (let i = string.length - 1; i >= 0; i--) {
        const arrayItem = string[i]

        array.push(arrayItem)


    }
    const reversed = array.join('')
    return reversed;
}

reversedString('hello world');

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
function sumOfPositiveArray(array) {
    let sum = 0;
    for (let item of array) {
        if (item >= 0) {
            sum = sum + item;
        }

    }
    return sum;
}
sumOfPositiveArray([2, -5, 10, -3, 7])


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function frequentElement(array) {

    let maxCount = 0;
    let maxElement;


    for (let item of array) {
        for (let item2 of array) {
            // console.log(item, item2);
            if (item == item2) {
                let count = 0;
                count++;
                if (count > maxCount) {
                    maxCount = count;
                    maxElement = item;
                }

            }
        }
    }

    // console.log(maxElement);
    return maxElement

}

frequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])

// Task 4:Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers

function addValues(array, target) {
    let newArray;
    for (let element of array) {
        for (let element2 of array) {
            let sum = element + element2;
            if (sum === target && element < element2) {
                newArray = [array.indexOf(element), array.indexOf(element2)]
                // console.log(newArray);


            }
        }
    }
    return newArray;
}

addValues([1, 3, 6, 8, 11, 15], 9)