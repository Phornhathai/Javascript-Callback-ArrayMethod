//function express
const newObj = students.map(function (s){
    return {
        fistname : s.name,
        score : s.score
    }
})
console.log(newObj);

//arrow function
let new2 = students.map((s) => {
    console.log(`score of ${s.name} is ${s.score}`);
})

let animal = ["tiger","lion","cat","dog"]

//function express
let newAnimal = animal.map(function (params) {
    return params.toUpperCase()
})

//implicite return
let newAnimal1 = animal.map((params) => (
     params.toUpperCase()
))

console.log(newAnimal);