/* if */
let flag: boolean = true
if(flag) {
    console.log('true')
} 

/* if else */

let x:number =10, y:number = 20;
if(x>y){
console.log("x is gr than y");
} else{
console.log("y is gr than x");
}

/* if else if */
let a: number = 100;
let b: number = 200;
let c: number = 300;
if(a>b && a>c){ // && - short circuit operator -> if first conditions is false, it will break without checking second condition
    console. log("a is greatest");
} else if(b>c){
    console.log("b is greatest");
} else {
    console.log("c is greatest");
}

/* ternary operators */
let i: number = 100;
let j: number = 50;
i>j ? console.log('i is gt j') : console.log('j is gt i')

let browser: string = "safari";
(browser === "chrome") ? console. log("launch chrome"): browser === "firefox" ? console. log("launch firefox"): console. log("please pass the right browser");

