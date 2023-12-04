/* any */
let num: any = 2.14

let anything: any;
anything = 123;
anything = 'Hi';
anything = false;

let details: any[] = ['ganeshk', 627]
details.push(true)

function isAccend(a: number, b:number) {
    if(a>b){
        return 'No';
    } else {
        return 1;
    }
}
console.log(isAccend(1,2))
console.log(isAccend(3,3))
console.log(isAccend(2,1))


/* void */
let something: void;
// something = 'Hello';
// something = 7;
// something = false;
// something = null;
something = undefined;

function textme(message: string): void{
    console.log(message)
    return; //this return can be accepted by void
}
textme('Hi!')


/* void */
let nothing: never;
// nothing = 'never';
// nothing = true;
// nothing = 0;
// nothing = {};
// nothing = [];

function throwError(message: string): never {
    // return;
    throw new Error(message) // should throw error
}
throwError('Should throw error!!!')

function repeat(): never {
    while (true) {console.log('repeat uh!!!')} // never can be used with this syntax only
}

// function condition(): never {
//     if(true){
//         console.log('condition')
//     }
// }

