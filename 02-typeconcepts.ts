/* Type inference */
const first_name = 'Harry'; // type=string can be determined at compile time
let last_name = 'Potter';

/* Type annotation */
let patronus: string = 'Stag'; // specifying the type=string using colon(:) symbol


/* Typescript is statically typed language */
let points: number;
points = 250;
// points = 'Two Fifty points' // we are not able to set value


/*  null, undefined */
let wand; // undefined
console.log(wand)
wand = null; // null
console.log(wand)

let house: undefined = undefined; // type=undefined
let house_caption:null = null; // type=null


/* any -> can be re-declared with different data types */
let skills:any;
skills = 100;
skills = false;
skills = 'quiditch';


/* void -> function doesn't return any value */
function sayFirstName():void {
    console.log(`${first_name} is void!`)
    // return first_name; // void should not return anything
    return; // but can return blank

}
function sayLastName() {
    console.log(`${last_name} is also void!`)
    return first_name; // this void may or may not return
}
function getSkills():any {
    console.log(`${skills} is also void!`)
    return skills; // any may or may not return
}
function getPoints():number {
    return points; // should have return, if we specify return type
}


