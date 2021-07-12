var arr1 = ["Palash", 23]; // single-dimention array
var arr2 = [["Palash", 23], ["Deloear", 24]]; // nested array (multi-dimention array)

// modify array
var arr1[0] = "Suaib";
// for multi-dimentional array
var arr2[0][1] = 24; // [main array element position][selected array element position]

// push() function
var arr3 = [1,3,5,7,9];
arr3.push(2,4,6,8);
// in push(), the elements we push added in the array in the last position 

// pop() function
arr3.pop(6,8);
// in pop(), the last element of the array will be poped

// shift() function
arr3.shift();
// shift() will remove the first element of the array 

// unshift() function
arr3.unshift(0);
//  in unshift(), the elements we push added in the array in the first position 

console.log(arr1);