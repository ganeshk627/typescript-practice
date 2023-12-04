/* if */
var flag = true;
if (flag) {
    console.log('true');
}
/* if else */
var x = 10, y = 20;
if (x > y) {
    console.log("x is gr than y");
}
else {
    console.log("y is gr than x");
}
/* if else if */
var a = 100;
var b = 200;
var c = 300;
if (a > b && a > c) { // && - short circuit operator -> if first conditions is false, it will break without checking second condition
    console.log("a is greatest");
}
else if (b > c) {
    console.log("b is greatest");
}
else {
    console.log("c is greatest");
}
/* ternary operator */
var i = 100;
var j = 50;
i > j ? console.log('i is gt j') : console.log('j is gt i');
var browser = "safari";
(browser === "chrome") ? console.log("launch chrome") : browser === "firefox" ? console.log("launch firefox") : console.log("please pass the right browser");
