/* Type assertion in TypeScript is a way to tell the TypeScript compiler that you know more about the type of a value than it does.
    1. using <>
    2. using as keyword
*/
// let inbox : any = '150';
var inbox = 150;
var total = inbox + 18;
console.log(total);
// inbox = '150';
total = inbox + 18;
console.log(total);
var message = 'Hello harry, glad to see u here!';
var len = message.length;
console.log(len);
var isSent = true;
if (isSent) {
    console.log('Message sent successfully!!!');
}
