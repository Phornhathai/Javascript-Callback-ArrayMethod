//function expression
const sum = function (x,y){
    return x + y
}

console.log(sum(4,7));

// multiple input
// arrow function

const sum1 = (x,y) => {
    return x + y
}
console.log(sum1(5,5));


// single input
const sum2 = (x) =>{
    return x * 2
}

console.log(sum2(3));

const sum3 = x => {
    return x * 2
}

console.log(sum3(3));

// No input
const hello = () =>{
    return "Hello World"
}

console.log(hello());