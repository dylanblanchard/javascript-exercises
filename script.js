// javascript functions problem set (148)

// write isEven() function, looks at numeric argument and returns true if even
function isEven(x) {
    if (x % 2 === 0) {
        return (true);
    }
    return (false);
}

// fancier way
function isEven(num) {
    return num % 2 === 0
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);

// write factorial() which takes a numeric argument and returns factorial of that number

function factorial(num) {
    // define result variable
    var result = 1;
    // calculate factorial and store value in result
    for (var i = 2; i <= num; i++) {
        result *= i;
        // this is short version of result = result * i
    }
    return result;
}

factorial(5);
factorial(2);
factorial(10);
factorial(0);

// write function that takes kebab-cased-string and turns it into snake_cased
function kebabToSnake(str) {
    var snake = str.replace(/-/g, "_");
    return (snake);
}

kebabToSnake("hello-world");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");