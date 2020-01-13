// Print all numbers between -10 and 19

var num1 = -10;

while (num1 < 19) {
    console.log(num1);
    num1++;
}

// Print all even numbers between 10 & 40
var num2 = 12;

while (num2 < 38) {
    console.log(num2);
    (num2 = (num2 + 2))
}
// Print all odd numbers between 300 & 333
var num3 = 301;

while (num3 < 331) {
    console.log(num3);
    (num3 = (num3 + 2))
}

// Print all numbers divisible by 5 and 3 between 5 & 50

var num4 = 5;

while (num4 <= 50) {
    if (num4 % 3 === 0 && num4 % 5 === 0) {
        console.log(num4);

    }
    num4 += 1;
}