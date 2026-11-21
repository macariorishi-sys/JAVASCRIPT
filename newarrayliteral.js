const arr=new Array(3)
arr[0]=1
console.log(arr)
arr[1]=3
arr[2]=7
console.log(arr)
arr[3]="hai"
console.log(arr)
arr[5]=false
console.log(arr)
console.log("Length of the array:", +arr.length)
console.log(arr.at(3))
console.log(Array.isArray(arr))
var a=5
console.log(Array.isArray(a))
arr[0]=100
console.log(arr)
var sum = 0;
for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "number") {
        sum = sum + arr[i];
    }
}
console.log("Sum of the array:", sum);
console.log(arr)
console.log(arr[-1])
console.log(typeof arr)
var a=10
console.log(typeof a)