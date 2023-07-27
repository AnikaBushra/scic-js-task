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

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    if (operator == '+') {
        return num1 + num2;
    }
    if (operator == '-') {
        return num1 - num2;
    }
    if (operator == '*') {
        return num1 * num2;
    }
    if (operator == '/') {
        return num1 / num2;
    }
}

calculator(33, 3, '/')


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function randomChar(string) {
    const random = Math.floor(Math.random() * string.length);
    return string.charAt(random);
}

function getRandomPassword(input) {
    const uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
    const number = '1234567890';
    const specialChar = '!@#$%^&*';
    const allChar = uppercaseChar + lowercaseChar + number + specialChar;

    let password = ''

    password += randomChar(uppercaseChar)
    password += randomChar(lowercaseChar)
    password += randomChar(number)
    password += randomChar(specialChar)

    const remaining = input - password.length;
    console.log(remaining);


    for (let i = 0; i < remaining; i++) {
        password += randomChar(allChar);
    }
    console.log(password);
    return password;

}
getRandomPassword(8)

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function getInt(romanNum) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let result = 0;
    const romanUppercase = romanNum.toUpperCase();

    for (let i = 0; i < romanNum.length; i++) {

        const first = symbols[romanUppercase[i]]
        const second = symbols[romanUppercase[i + 1]];
        if (first < second) {
            result += second - first
            i++
        }
        else {
            result += first;

        }
        // console.log(romanUppercase, first, second, result);
    }
    return result
}
getInt('xxi')


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallest(array) {
    let smallest = Math.min(...array);
    let newArray = []
    let secondSmall;
    for (let i = 0; i < array.length; i++) {
        if (smallest !== array[i]) {
            newArray.push(array[i])
            secondSmall = Math.min(...newArray);
        }
    }

    return secondSmall
}
secondSmallest([3, 5, 2, 5, 3, 3, 1, 4, 5]);