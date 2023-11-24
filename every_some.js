// //every

// const animal = ["tiger" ,"lion" , "cat" , "dog"]

// let isAnimal = animal.every((e) => (e.length === 3))

// console.log(isAnimal);

// let isPass = animal.some((e) => (e.charAt(0)== 'A'))

// console.log(isPass);

let allEvens = (e) => {
    let isEven = e.every((e) => (e % 2 === 0))
    console.log(isEven);
}

allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false