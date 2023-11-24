let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let newNum = nums.filter((n) => {
    return n % 2 === 0
})

//implicit return

let newNum1 = nums.filter(n => (n % 2 === 0))

console.log(`newNum ${newNum}`);
console.log(newNum1);


const students = [
    {
        nickName: "Ann",
        score: 50,
        class: "A"
    },
    {
        nickName: "Aum",
        score: 40,
        class: "B"
    },
    {
        nickName: "Aoi",
        score: 20,
        class: "C"
    },
    {
        nickName: "Ast",
        score: 10,
        class: "D"
    }
]

let studentNew = students.filter((s) => {
    return s.score >= 10
}).map(n => ({
    name: n.nickName,
    final_score: n.score
}))

console.log(studentNew);

// implicit map
// let student = studentNew.map((e) => (
//     {
//     name: e.nickName,
//     final_score: e.score

// }))
// // console.log(studentNew);
// console.log(student);