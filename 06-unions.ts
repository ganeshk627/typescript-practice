let id: (string | number);
id = 'Seven';
id = 7;
// id = true;

function printId(id:(string | number)) : (string | number) {
    if(typeof(id)==='string') {
        return id+'_string';
    } else if(typeof(id)==='number') {
        return id+'_number';
    }
    return 0;
}

console.log(printId(id))
console.log(printId('Seven'))
console.log(printId('6'))
// console.log(printId(true))
