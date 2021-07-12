function func(a, b){
    return a+b;
}

console.log(func("My age is ", 23));

// global & local scope

var num = 10; // global variable
function func1(){
    var num1 = 5; // local variable 
}

function func2(){
    var num = 15; // num will be unchanged because num is a global variable, it cannot be reasigned in function 
    console.log(num); // correct
    console.log(num1); // error
}

func2();

// example

var arr = [1,2,3,4,5];

function func(arr, item){
    arr.push(item);
    return arr.shift();
}

console.log(JSON.stringify(arr));
console.log(func(arr, 6));
console.log(JSON.stringify(arr));
/*
JSON.stringify() is used to convert into string
for example, array, object etc
*/

// map()
// array.map(function)

const arr = [1, 2, 3, 4, 5];
const newarr = arr.map(i => i*i); // square function is called for each element of the array using map()
console.log(newarr);

// filter()
// array.filter(function)

const age = [12, 55, 32, 4];
const adult = age.filter(age => age>=18);
console.log(adult);

// reduce()
// array.reduce(function)

const arr = [1, 2, 3, 4];
const reduce = (a, b) => a+b;
const sum = arr.reduce(reduce);
console.log(sum);
