var x = 45000;
console.log(x);

if (!Number.isFinite(x) || x < 0) {
    console.log("INVALID INPUT");
} else if (x < 5000) {
    console.log("NO DISCOUNT");
    console.log("Final price: " + x);
} else if (x < 10000) {
    console.log("10% DISCOUNT");
    console.log("Final price: " + (x - x * 10 / 100));
} else if (x < 25000) {
    console.log("15% DISCOUNT");
    console.log("Final price: " + (x - x * 15 / 100));
} else if (x < 50000) {
    console.log("20% DISCOUNT");
    console.log("Final price: " + (x - x * 20 / 100));
} else {
    console.log("30% DISCOUNT");
    console.log("Final price: " + (x - x * 30 / 100));
}