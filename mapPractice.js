const fullNames = [{first: 'Albus', last:'Dumbledore'},
{first: 'Harry', last: 'Potter'}, {first: 'Hermione', 
last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, 
{first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', 
last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];


const firstName = fullNames.map(function(n){
    return{
        firstName : n.first + " " + n.last
    }
})

console.log(firstName);