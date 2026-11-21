var n = 5
var fact1 = 1;
for (var i = 1; i <= n; i++) {
    fact1 = fact1 * i;
}
console.log("Factorial using For Loop:", fact1);
var fact2 = 1;
var j = 1;
while (j <= n) {
    fact2 = fact2 * j;
    j++;
}
console.log("Factorial using While Loop:", fact2);
var fact3 = 1;
var k = 1;
if (n >= 0) {
    do {
        fact3 = fact3 * k;
        k++;
    } while (k <= n);

    console.log("Factorial using Do-While Loop:", fact3);
} else {
    console.log("Invalid Number");
}
