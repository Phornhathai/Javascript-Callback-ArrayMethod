const nums = [5,3,4,8,9]

// let result = 0
// for (let i = 0; i < nums.length; i++) {
//     result += nums[i]
    
// }

// let result = nums.reduce((prevValue, currentValue)=> {
//     console.log(prevValue, "prevValue");
//     console.log(currentValue, "currentValue");
//     return prevValue + currentValue
// },0)

// console.log(result);

let min = nums.reduce((prev,crr)=>{
    console.log(prev, "Previous");
    console.log(crr, "Current");

    if(prev < crr){
        return prev
    }else{
        return crr
    }
},0)

console.log(min);
