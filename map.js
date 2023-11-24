const num = [6,2,3,8]

const students = [
    {
        name: "ALICE",
        aage: 25,
        score : 40
    },
    {
        name: "Anna",
        aage: 20,
        score : 30
    },
    {
        name: "Home",
        aage: 29,
        score : 10
    },
    {
        name: "Tom",
        aage: 21,
        score : 30
    }
]


const result = num.map(function(n){
    return n * n
})

console.log(result);

