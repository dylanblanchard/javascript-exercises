var num = 6;
var gue = Number(prompt("Guess a number between 1 and 10?"));

if (gue == num) {
    console.log("Dang! That's right");
}

if (gue < 1 || gue > 10) {
    console.log("come on now, colour between the lines")
    var gue = Number(prompt("Guess a number between 1 and 10?"));
}

if (gue < num) {
    console.log("Nope, guess higher");
    var gue = Number(prompt("Guess a number between 1 and 10?"));
}

if (gue > num) {
    console.log("Nope, guess lower");
    var gue = Number(prompt("Guess a number between 1 and 10?"));
}