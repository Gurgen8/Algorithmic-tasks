/// Utils 

const reducer = (arr) => {
    const result = arr.reduce((accumlator, currentValue) => parseInt(accumlator + (+currentValue)));
    return result

}

const checkDuplicateElements = (arr) => {
    const set = new Set(arr);
    if (arr.length !== set.size) {

        alert('dublicate elements');

    } else {

        return arr;
    }
}

const createArray = (n) => {
    let arr = []
    for (i = 0; i <= n; i++) {
        arr.push(i)
    }
    return arr

}

const randomNumber = (n) => {
    return Math.floor(Math.random() * n);
}


const matrix = n => {
    if (typeof (n) === "number") {
        const matrix = [];
        for (row = 0; row < n; row++) {
            matrix[row] = [];
            for (col = 0; col < n; col++) {
                matrix[row].push(randomNumber(10));

            }
        }
        return matrix;
    } else {
        return "Incorect arguments"
    }
}



const arrSlice = (n, interval) => {
    const arr = matrix(n)
    console.log(arr)
    const arraySlice = arr.map(element => {
        if (interval === -1) {
            return (element.slice(n / 2))
        } else if (interval === 1) {
            return (element.slice(0, n / 2))

        }
    });

    return arraySlice
}


const getMinMaxElementinMatrix = (row, col) => {
    let rows = [], columns, r, c;
    let maxElement = Number.MIN_VALUE;
    let minElement = Number.MAX_VALUE;
    for (r = 0; r < row; r++) {
        columns = [];
        for (c = 0; c < col; c++) {
            columns.push(randomNumber(10));
        }
        rows.push(columns);
    }
    for (i = 0; i < r; i++) {
        for (j = 0; j < c; j++) {
            if (rows[i][j] > maxElement) {
                maxElement = rows[i][j];
            } else if (rows[i][j] < minElement) {
                minElement = rows[i][j];
            }
        }
    }

    console.log(rows, maxElement, minElement)
    return maxElement + minElement

}


function toArrayArgumnents(...args) {

    return args.map(arguments => {
        return arguments
    })

}




//////////////////////////////////////////////////////// EXAM /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. A three-digit number is given. Calculate and express the sum of three-digit digits.

const sumThreeDigit = (number) => {
    let sum = 0;
    if ((number + '').length === 3 && typeof (number) === 'number') {
        while (number) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum
    } else {

        return "invalid arguments"
    }
}


// 2. Three numbers are given. Arrange those numbers in ascending order.

const numbersOrder = (...args) => {

    const arr = toArrayArgumnents(args)[0]
    return arr.sort((a, b) => a - b)
}



// 3.  Three numbers are given. Express "Yes" if those numbers are arithmetic progression, և "NO" otherwise: 

const hasProgression = (...args) => {
    const numberArray = toArrayArgumnents(args)[0]
    let arthCount = 0;
    let geoCount = 0;
    for (let i = 0; i < numberArray.length - 2; i++) {
        if (numberArray[i + 1] - numberArray[i] === numberArray[i + 2] - numberArray[i + 1]) {
            arthCount++;
        }
        else if (numberArray[i + 1] / numberArray[i] === numberArray[i + 2] / numberArray[i + 1]) {
            geoCount++;
        }
        else {
            return "this series is not arithmetic or geometric";
        }
    }

    if (arthCount === numberArray.length - 2)
        return "Arthematic series";
    else if (geoCount === numberArray.length - 2)
        return "Geometric series";
}


// 4. A three-digit number is given. Express 1 if the digit of a three-digit number is equal to tens and the sum of hundreds of digits, otherwise express 0.

const sumDigits = (number) => {
    const str = number + ""
    let numberArray = [...str].map(item => parseInt(item, 10))
    if (typeof (number) === "number" && numberArray.length === 3) {
        if (numberArray[2] === numberArray[1] + numberArray[0]) {
            return 1
        } else {
            return 0
        }
    } else {
        return "invalid argument"
    }
}



// 5. three numbers are given. Express 1 if at least one of them is odd, otherwise 2.

function hasOddNumber() {
    const arr = [...arguments],
        oddNumbers = [];

    arr.map(number => {
        if (number % 2 === 0) {
            return
        } else {
            oddNumbers.push(number)
        }
    })

    if (oddNumbers.length) {
        return 1
    } else {
        return 0
    }
}



// 6. Three numbers are given, count the number of negatives from them

const negativeNumbersQty = (...args) => {
    let negativeCount = 0;
    const arr = toArrayArgumnents(...args);
    arr.forEach(number => {
        if (number < 0) {
            negativeCount += 1
        }
    })
    return negativeCount
}


// 7. Four numbers are given, count and express the sum of the positives.

const positiveNumbersSum = (...args) => {
    const arr = toArrayArgumnents(...args);
    let result = 0;
    arr.map(number => {
        if (number >= 0) {
            result += number
        } else {
            return
        }
    });
    return result
}


// 8. Four numbers are given, count and express the sum of the positives.

// const largestNumber = (a, b, c, d) => {
//     return Math.max(a, b, c, d)
// }

const largestNumber = (...args) => {
    let maximum = 0;
    const arr = toArrayArgumnents(...args);
    checkDuplicateElements(arr).forEach((element) => {
        if (maximum < element) {
            maximum = element;
        }
    });
    return maximum
}


// 9. The lengths of the sides of the triangle are given: a, b, c. Display "Yes" if the triangle is equal to "NO" otherwise.

const hasEqualTriangle = (a, b, c) => {

    if (a === b || a == c || b === c) {
        return "YES"
    } else {
        return "NO"
    }
}

// 10. Display "Yes" if the point with the given coordinates belongs to the first quarter, "NO" otherwise:

const hasOneQuartherInCoords = (x, y) => {

    if (x > 0 && y > 0) {
        return "Yes"
    } else {
        return "No"
    }
}


// 11. Display the number of the coordinate quarter to which the point with the given coordinates belongs

const getQuarther = (x, y) => {
    if (x > 0 && y > 0) {
        return 1
    } else if (x < 0 && y > 0) {
        return 2
    } else if (x < 0 && y < 0) {
        return 3
    } else if (x > 0 && y < 0) {
        return 4
    } else {
        return "Origin"
    }
}

// 12. Subtract the smaller of the given three numbers by the sum of the other two. Print the numbers received.

const minimuizeNumber = (...args) => {

    const arr = toArrayArgumnents(...args);
    const minimum =  Math.min.apply(null, arr);;
    const sumDigit = arr.filter(number => {
        return number !== minimum
    }).reduce((prev, next) => {
        return prev + next
    })

    return minimum + sumDigit

}


// 13. A three-digit number is given. Express 1 if the sum of the digits of a three-digit number is even, otherwise express 0

const isEvensNumberSum = (number) => {
    const arr = [...(number + "")]
    const result = reducer(arr);
    if (result % 2 === 0) {
        return 1
    } else {
        return 0
    }
}


// 14. Three different numbers are given, find, express the smallest value of them.

const minDigit = (...args) => {
    let min = 0;
    const arr = toArrayArgumnents(...args); 
    checkDuplicateElements(arr)
        .forEach((element) => {
            if ( element <min) {
                min = element;
            }
        });

    return min

}

// 18. Calculate the product of the given digits of the given number N.

const getProduct = (n) => {
    let product = 1;
    while (n != 0) {
        product *= (n % 10);
        n = Math.floor(n / 10);
    }
    return product;
}


// 19. Count the nth member of the Fibonacci sequence

//recursion--- no recoment
// const fibonachiNumbers = (n) => {
//     if (n < 2) {
//         return n
//     }
//     return fibonachiNumbers(n - 1) + fibonachiNumbers(n - 2);
// }

// Fn = Fn-1 + Fn-2, (for n >1)
const getFibonachhi = (n) => {
    var a = 1,
        b = 0,
        temp;

    while (n > 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}


// 20. . Calculate the sum of the first n members of the Fibonacci sequence.
const calculateFibonachiNumbers = (n) => {
    let arr = [];
    if (n <= 0) {
        return 0;
    }
    arr[0] = 0;
    arr[1] = 1;
    let sum = arr[1]
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        sum += arr[i];
    }

    return sum;
}


/// 21. Calculate the largest common divisor of 2 numbers.

const gcd_two_numbers = (x, y) => {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }

    return x;

}


// 22. Express the sum of all natural numbers on which the given natural N is divisible by no remainder number.

const amountOfNaturalDivisors = (number) => {
    var sum = 0;
    for (i = 1; i <= number; i++) {
        if (i % 2 === 0)
            sum += i;
    }
    return sum;
}


// 23. Express "Yes" for a given number N if the number is clear և "NO" otherwise.

const isPrime = (number) => {
    if (number <= 1) return false;
    if (number === 2) return true;
    else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return "NO";
        }
        return "Yes";
    }
}


// 24. Express the sum of all two-digit numbers that are multiples of 3 և 5.

const getSumbyTwoDigits = () => {

    let sum = 0;
    for (i = 10; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            sum += i
    }
    return sum

}


// 25. Express 18 multiples of the largest four-digit number.

const getLargetsNumMultiple_18 = () => {

    let result;

    for (i = 9999; i >= 1000; i--) {
        if (i % 18 === 0) {
            result = i
            break
        }
    }

    return result

}

// 26. Assign a value to the logical variable t if the entered natural number is N is 3 degrees և false otherwise. Express the value of t.

const isPower_of_Three = (number) => {
    let t;

    if (number <= 0)
        return false

    if (number % 3 == 0) {
        return isPower_of_Three(number / 3);
    }

    if (number == 1) {
        t = true;
    } else {

        t = false
    }

    return t;
}


// 27 . Calculate the sum of the first 10 prime numbers

const sumTenPrimeNumbers = () => {
    const arr = [];
    let i = 2
    while (arr.length < 10) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    };

    return reducer(arr);

}


// 28. Present the number of 10 given systems in 2 systems.

const convertToBinary = (number) => {
    let bin = 0;
    let rem, i = 1
    while (number != 0) {
        rem = number % 2;
        number = parseInt(number / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin
}


// 29. Present the number of the given 2 systems in each of the 10 systems. 

const convertDecimal = (number) => {
    let binStr = number + ''

    const decimal = reducer(
        binStr.split("").reverse()
            .map((val, i) => {
                if (val === "1") {
                    return Math.pow(2, i)
                } return 0
            })
    )

    return decimal
}


// 30. Display "Yes" if the entered   number N is a palindrome (read the same from right to left d)), և "NO" otherwise.


function isPalindrom(number) {
    number += ''
    for (let i = 0; i < number.length / 2; i++) {
        if (number[i] !== number[number.length - 1 - i]) {
            return 'No';
        }
    }
    return 'yes';
}



// 43. Invert the elements of a given mass containing n elements without using an additional mass. For example, in the case of 1 2 3 4 5 6 7 8 9 10 there will be 10 9 8 7 6 5 4 3 2 1.

const reverseArray = (n) => {
    // createArray(n).reverse()
    const arr = createArray(n)
    for (i = 0; i < arr.length / 2; i++) {
        let res = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = res
    }
    return arr
}


// 44. Arrange the elements of the vector containing n elements according to the ascending order.

const sortitVectorElemnts = n => {
    let arr = []
    /// random numbers
    for (i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 40));
    };
    return arr.sort((a, b) => a - b)

}

// 45. Calculate the number of unique digits in a one-dimensional array containing a given N element.

const getUniqElementCount = n => {
    var arr = [];
    const dublicateArray = []
    for (i = 0; i < n.length; i++) {
        if (arr.indexOf(n[i]) === -1) {
            arr.push(n[i]);
        } else {
            dublicateArray.push(n[i])
        }
    }
    return n.length - (2 * dublicateArray.length)
}

// 46. Calculate the longest growing mass of a one-dimensional mass containing a given N element the number of sub-sequence elements. For example, 2 1 3 5 4 7 8 9 10 -2 in this case will be 5

const findLongestConseqSubseq = arr => {
    n = arr.length
    let S = new Set();
    let ans = 0;
    for (let i = 0; i < n; i++)
        S.add(arr[i]);

    for (let i = 0; i < n; i++) {
        if (!S.has(arr[i] - 1)) {

            let j = arr[i];
            while (S.has(j))
                j++;
            ans = Math.max(ans, j - arr[i]);
        }
    }
    return ans;
}

// 51.  Given a two-dimensional array containing 4x5 elements, calculate, express the largest of that array and the sum of the smallest elements

getMinMaxElementinMatrix(4, 5)





// 52. In a two-dimensional array containing 5x5 elements, count 5 times the principal diagonal the number of elements.


// const diagonalSum = n => { 
//     const arr = matrix(n)
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (i === j  ) {
//                 result += arr[i][j];
//             };
//         };
//     };
//     console.log(arr)
//     return result;
// };

const getMatrixDiagonalCountFiveLength = n => {
    const arr = matrix(n)
    const fiveCountArray = []
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            if (i === j) {
                if (arr[i][j] !== 0 && arr[i][j] % 5 === 0)
                    fiveCountArray.push(arr[i][j])
            };
        };
    };
    console.log(arr)
    return fiveCountArray.length;
};




// 53. A 4x4 two-dimensional array is given. Calculate an odd that belongs to the range [c, d] number of numbers:

const getMatrxLastOwnElements = (n) => {
    let ownCount = [];
    const arr = arrSlice(n, -1)
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j <= arr.length; j++) {
            if (arr[i][j] % 2 === 1 && arr[i][j] !== 0)
                ownCount.push(arr[i][j])
        }
    }
    return ownCount
}

// 54. A 4x4 two-dimensional array is given. Get numbers in the range [c, d] of this array one-dimensional mass.


const get1DArray = (n) => {
    const arr = arrSlice(n, -1)
    const result = [];
    for (x = 0; x < arr.length; x++) {
        for (y = 0; y < arr[x].length; y++) {

            result.push(arr[x][y])

        }
    }
    return result
}



// 55. A two-dimensional mass of 5x5 size is given. Calculate the number of numbers equal to k in that array. 

const getMatrixNumbersOfEqaul_k = (n, k) => {

    const arr = matrix(n);
    let result = [];
    for (x = 0; x < arr.length; x++) {
        for (y = 0; y < arr[x].length; y++) {
            if (arr[x][y] === k) {
                result.push(arr[x][y])
            }
        }

    }

    return result.length
}


// 56. Given an integer n և a matrix of size n x n. Get և express a one-dimensional mass of which: the elements are obtained as an element equal to the principal diagonal of a given two-dimensional array from the containing line. It is assumed that the main diagonal has one element equal to zero.

const get1DArrayInDiagonal = (n) => {
    const arr = matrix(n)
    console.log(arr)
    const oneDimessionArr = []
    let index;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes(0)) {
            index = i
            break
        }
    };
    if (index) {
        const newArray = arr.slice(index)
        for (x = 0; x < newArray.length; x++) {
            for (y = 0; y < newArray[x].length; y++) {
                oneDimessionArr.push(newArray[x][y])

            }
        }
    }

    return oneDimessionArr
}



// 57. Determine և express the sum of the largest և smallest elements of a mass of 3x3.  


getMinMaxElementinMatrix(3, 3);




// 58. A 4x4 two-dimensional array is given. Calculate the elements belonging to the range [a, b] of that array arithmetic mean.

const getAritmathicMeanByMatrix = (n) => {
    const slice = arrSlice(n, 1)
    const oneDimessionArr = [];
    for (x = 0; x < slice.length; x++) {
        for (y = 0; y < slice[x].length; y++) {

            oneDimessionArr.push(slice[x][y])

        }
    }
    console.log(slice)
    return reducer(oneDimessionArr)

}


// 59. A one-dimensional mass of 4x4 size is given. Calculate the sum of the elements of the second line of that array

const getSumMatrixByTwoRow = (n) => {
    const arr = matrix(n)
    let twoRow
    arr.forEach((elements, i) => {
        if (i === 1) {
            twoRow = elements
        }
    })
    console.log(twoRow)
    return reducer(twoRow)
}



// 60. A one-dimensional mass of 5x5 size is given. Count the elements of the 2nd column of this array the product.


const prodMatrixTwoColumn = (n) => {
    const arr = matrix(n);
    let prod = 1;
    let twoColumn = [];
    arr.map(item => {
        twoColumn.push(item[1])

    })
    console.log(twoColumn)
    twoColumn.map(item => {
        prod *= item
    })

    return prod

}


// 61. A one-dimensional mass of 4x4 size is given. Calculate to express the largest element of the 3rd line of that array.

const getMatrixLargestElementInThreeRows = (n) => {

    const arr = matrix(n);
    let max;
    console.log(arr)
    arr.map((child, index) => {
        if (index === 2) {
            max = Math.max.apply(null, child);
        }
    })
    return max

}



// 62. A one-dimensional mass of nxm is given. Calculate the least squares of this mass the element.


const getMatrixMinElementInLastColumn = (n, m) => {

    let rows = [], columns, r, c;
    const lastColumn = []

    for (r = 0; r < n; r++) {
        columns = [];
        for (c = 0; c < m; c++) {

            columns.push(randomNumber(10));
            if (columns[m - 1] !== undefined) {
                lastColumn.push(columns[m - 1])

            }

        }
        rows.push(columns);
    }

    console.log(rows)

    return Math.min.apply(null, lastColumn);

}







// 69. Arrange the elements of the .n x n-sized matrix in a spiral

const getSpiralPattern = (n) => {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    return result;

}



// 70. Arrange the elements of the .n x n-sized matrix in a snake

const getSnakePattern = (n) => {
    let count = 0;
    const matrix = [];
    for (row = 0; row < n; row++) {
        matrix[row] = [];
        for (col = 0; col < n; col++) {
            if ((row % 2) === 0) {
                matrix[row].push(count);
            } else {
                matrix[row].unshift(count);
            }
            count++;
        }
    }
    return matrix;
}
