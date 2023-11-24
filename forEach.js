const nums = [3,7,4,2,5,7]

// function print(n){
//     console.log(n);
// }

// nums.forEach(function (n){
//     console.log(n);
// })

const students = [
    {
        name: "ALICE",
        aage: 25,
        scroe : 40
    },
    {
        name: "Anna",
        aage: 20,
        scroe : 30
    },
    {
        name: "Home",
        aage: 29,
        scroe : 10
    },
    {
        name: "Tom",
        aage: 21,
        scroe : 30
    }
]

for (const sc of students) {
    console.log(`score of ${sc.name} is ${sc.scroe}`);
}

students.forEach(function(n) {
    console.log(`score of ${n.name} is ${n.scroe}`);
});