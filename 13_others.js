// parseInt()
// takes a string and converted into an integer

// string to integer

var a = parseInt("4");
var b = parseInt("5");
console.log(a+b);

// use of radix in parseInt
// radix specify the base of the number

var a = parseInt("1010", 2); // parseInt(str, base)
console.log(a);

// ternary operator
// used to represent conditional statements in a single line
// condition ? statement-if-true : statement-if-false;

function func(num){
    if (num>0){
        return "positive";
    } else if(num<0){
        return "negative";
    } else {
        return "zero";
    }
}
console.log(func(0));

// or

function func(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(func(0));

// prevent object manipulation
// Object.freeze(obj name)

function Obj(){
    const PI = {
        pi: 3.14,
    };
    Object.freeze(PI); // it will freez PI object and the change has made in try section can not work
    try{
        PI.pi = 54;
    } catch (e){
        console.log(e);
    }
    return PI.pi;
}
const pi = Obj();
console.log(pi);

// arrow function
// an anonymous function (which function doesnot have a name) can be converted into arrow function

var num = function(){
    return new Date();
}

// in arrow function
const num = () => new Date();

// arrow function with parameter

var add = function(a, b){
    return (a+b);
}
console.log(add(2, 3));

// in arrow function
const add = (a, b) => (a+b);
console.log(add(2, 3));

// rest operator
// it allows us to create function that can take variable number of arguments
// function func_name(...arg_name){}

function func(...num){
    var sum = 0;
    for(var i of num){
        sum += i;
    }
    return sum;
}
console.log(func(2,4)); // output: 6
console.log(func(2,4,6)); // output: 12

// spread operator
// it is used to expand already existed array
// [...array_name]

var arr1 = ["Jan", "Feb", "Mar", "Apr"];
var arr2, arr3;
arr2 = arr1; // it means arr2 is same as arr1. after this, if we change arr1,  arr2 will also change
arr3 = [...arr1]; // it means arr3 is a copy of arr1. after copy, if we change arr1, arr3 will be same as before
arr1[0] = "Null";
console.log(arr2);
console.log(arr3);

// destructuring assignment to assign valiables from objects

var myself = {
    name: "Suaib",
    age: 23,
    address: "Mymensingh"
}
var name = myself.name;
var age = myself.age;
var address = myself.address;

// or
const {name: a, age: b, address: c} = myself; // desturcturing assignment
console.log(name+" "+age+" "+address);
console.log(a+" "+b+" "+c);

// destructuring assignment with nested objects

var myself = {
    name: {
        fullname: "Suaib Mahmud",
        surname: "Palash"
    }
}
var name = myself.name.surname;

// or
const {name: {surname: a}} = myself;
console.log(name);
console.log(a);