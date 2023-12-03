/* Arrays */
var summa = []; // empty array declaration
console.log(summa);
var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]; //string array
console.log(houses);
console.log(houses[1]);
var harry = [
    "Harry Potter",
    7,
    "Hedwig"
]; // mixed array
console.log(harry);
var broom = "Thunderbolt VII";
// houses.push(100)
harry.push(broom); // adds one element to the end of the array
console.log(broom, " is pushed!");
console.log(harry);
var popped = harry.pop(); // removes one element from the end of the array
console.log(popped + " is popped!");
console.log(harry);
console.log("First item: " + harry[0]);
console.log("Last item: " + harry[harry.length - 1]);
/* Generic Array */
var quiditch = ['Snitch', 'Seeker', 'Beater', 'Quaffle', 'Chaser'];
var points = [50, 100, 50];
var misc = ['Negative Points', 10, 100, false, null, undefined];
var players = [[['Seekers', 1], ['Chasers', 3], ['Beaters', 2], ['Keepers', 1]], [['Snitch', 1], ['Quaffle', 1], ['Bludgers', 3]]];
/* Multi Type Array */
// let refined_points: (string | number)[] = ['Negative Points', 10, 100, false, null, undefined]
var refined_points = ['Negative Points', 10, 100];
var number_or_boolean = [-1, 0, 10, 100, true, false];
/* Declare and Initialize */
var horcruxes;
horcruxes = [
    "Voldemort's Snake Nagini",
    "Rowena Ravenclaw's Lost Diadem",
    "Helga Hufflepuff's Cup",
    "Salazar Slytherin's Locket",
    "Marvolo Gaunt's Ring",
    "Tom Riddle's Diary",
    // "Harry Potter",
];
/* Iterating the Arrays */
// 1. Index based for loop
for (var i = 0; i < quiditch.length; i++) {
    console.log(quiditch[i]);
}
// 2. for in loop
for (var index in horcruxes) {
    console.log("".concat(index, " : ").concat(horcruxes[index]));
}
