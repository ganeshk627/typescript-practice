/* any */
var num = 2.14;
var anything;
anything = 123;
anything = 'Hi';
anything = false;
var details = ['ganeshk', 627];
details.push(true);
function isAccend(a, b) {
    if (a > b) {
        return 'No';
    }
    else {
        return 1;
    }
}
console.log(isAccend(1, 2));
console.log(isAccend(3, 3));
console.log(isAccend(2, 1));
/* void */
var something;
// something = 'Hello';
// something = 7;
// something = false;
// something = null;
something = undefined;
function textme(message) {
    console.log(message);
    return; //this return can be accepted by void
}
textme('Hi!');
/* void */
var nothing;
// nothing = 'never';
// nothing = true;
// nothing = 0;
// nothing = {};
// nothing = [];
function throwError(message) {
    // return;
    throw new Error(message);
}
throwError('Should throw error!!!');
