// randrom fraction number (between 0 and 1)

var num = Math.random();
console.log(num);

// random whole number

var num = Math.floor(Math.random()*10);
console.log(num);

// random number between range

function randNum(min, max){
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

console.log(randNum(69,96)); 