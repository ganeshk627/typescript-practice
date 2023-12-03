/* Arrays */
const summa = [] // empty array declaration
console.log(summa)
const houses: string[] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"] //string array
console.log(houses)
console.log(houses[1])
const harry = [
    "Harry Potter",
    7,
    "Hedwig"
] // mixed array
console.log(harry)
const broom = "Thunderbolt VII";
// houses.push(100)
harry.push(broom) // adds one element to the end of the array
console.log(broom, " is pushed!")
console.log(harry)
let popped = harry.pop() // removes one element from the end of the array
console.log(popped + " is popped!")
console.log(harry)
console.log("First item: " + harry[0])
console.log("Last item: " + harry[harry.length - 1])


/* Generic Array */
let quiditch: Array<string> = ['Snitch', 'Seeker', 'Beater', 'Quaffle', 'Chaser']
let points: Array<number> = [50, 100, 50]
let misc: Array<any> = ['Negative Points', 10, 100, false, null, undefined]
let players: Array<Array<any>> = [[['Seekers', 1], ['Chasers', 3], ['Beaters', 2], ['Keepers', 1]], [['Snitch', 1], ['Quaffle', 1], ['Bludgers', 3]]];


/* Multi Type Array */
// let refined_points: (string | number)[] = ['Negative Points', 10, 100, false, null, undefined]
let refined_points: (string | number)[] = ['Negative Points', 10, 100]
let number_or_boolean: (number | boolean)[] = [-1, 0, 10, 100, true, false]


/* Declare and Initialize */
let horcruxes: string[];
horcruxes = [
    "Voldemort's Snake Nagini",
    "Rowena Ravenclaw's Lost Diadem",
    "Helga Hufflepuff's Cup",
    "Salazar Slytherin's Locket",
    "Marvolo Gaunt's Ring",
    "Tom Riddle's Diary",
    // "Harry Potter",
]


/* Iterating the Arrays */
// 1. Index based for loop
for(let i=0; i<quiditch.length; i++) {
    console.log(quiditch[i])
}
// 2. for in loop
for(let index in horcruxes) {
    console.log(`${index} : ${horcruxes[index]}`)
}


