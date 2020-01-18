// 163 array problem sets

// exercise 1
function printReverse(arr) {
    for (i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4]);



// exercise 2 - write function to see if all things in a array are uniform
// needs a loop to compare first var vs second

function isUniform(arr) {
    var num1 = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== num1) {
            return false;
        }
    }
    return true;
}

isUniform([1, 1, 1, 1]);
isUniform([a, b, b, c]);

// sum array 

function sumArray(arr) {
    var total = 0;
    arr.forEach(function (element) {
        total += element;
    })
    return total;
}

sumArray([1, 2, 3, 4]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100]);

// max array - returns biggest number
function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

max([1, 2, 3, 4]);
max([10, 3, 4, 10]);
max([100, -5]);