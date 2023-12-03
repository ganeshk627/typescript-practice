/* Typles Vs Arrays 
    1. Tuple:
        * A tuple is a collection of objects that are ordered and immutable (cannot be changed).
        * Fixed Size but data can be pushed using .push() method
        * Duplicates allowed
    
    2. Arrays:
        * An array is used to store multiple values in a single variable.
        * We could add values at runtime using .push() method
        * Duplicates allowed
*/

let student: [string, string] = ['Harry', 'Potter'] // no other data or datatypes allows otherthan mentioned
let details: [string, number, string] = ['Gryfindor', 7, 'Hedwig']
console.log(student) // Output : ["Harry", "Potter"]
console.log(details) // Output : ["Gryfindor", 7, "Hedwig"]

// Accessing the elements by index
console.log(student[0]) // Output : Harry
console.log(details[1])
student.push('Weasley')
console.log(student) // Output : ["Harry", "Potter", "Weasley"]
details.push(1000)
console.log(details) // Output : ["Gryfindor", 7, "Hedwig", 1000]


/* Array of Tuples */
let students: [string, string][] = [['Harry', 'Potter'], ['Hermoine', 'Granger'], ['Ron', 'Weasley']]
for (const item of students){
    console.log(`${item[0]} ${item[1]}`)
}
students.push(['Fred', 'Weasley'])
students.push(['Fred', 'Weasley'])
console.log(students)


/* Initialize Tuples and Pushing later */
// const houses: [string, string] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
const houses: [string, string] = ["Gryffindor", "Hufflepuff"]
console.log(houses)
houses.push("Ravenclaw")
console.log(houses)
houses.push("Ravenclaw", "Slytherin")
console.log(houses)


