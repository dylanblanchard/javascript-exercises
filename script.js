// for loops

//   for (init; condition; step) {
//run some code
//  }

// Print all numbers between -10 and 19
for (var i = -9; i < 19; i++) {
    console.log(i);
}

// Print all even numbers between 10 & 40
for (var i = 12; i < 40; i = i + 2) {
    console.log(i);
}

// Print all odd numbers between 300 & 333
for (var i = 301; i < 333; i = i + 2) {
    console.log(i);
}

// Print all numbers divisible by 5 and 3 between 5 & 50
for (var i = 5; i < 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}