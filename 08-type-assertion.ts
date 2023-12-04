/* Type assertion in TypeScript is a way to tell the TypeScript compiler that you know more about the type of a value than it does. 
    1. using <>
    2. using as keyword
*/


// let inbox : any = '150';
let inbox : any = 150;
let total = <number>inbox + 18;
console.log(total);
// inbox = '150';
total = (inbox as number) + 18;
console.log(total);

let message: any = 'Hello harry, glad to see u here!';
let len = (message as string).length;
console.log(len);

let isSent: any = true;
if(isSent as boolean) {
    console.log('Message sent successfully!!!')
}