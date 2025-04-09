// function sayHello(){
//   let you=prompt("Your name?");
//   console.log("Hello",you+"!");
// }

// sayHello();





// let varContainingFunction = function() {
//   let varInFunction = " I'm in function";
//   console.log("hi there ", varInFunction);
// };
// varContainingFunction();





// function add( a,b)  {
//   return a+b ;

// }

// console.log(add(5,10));






// function tester(para1,para2){
//   return para1 +" " + para2;
// }
// const arg1="argument 1";
// const arg2="argument 2";

// console.log(tester(arg1,arg2));








// function addTwoNumbers(x,y){
//   console.log(x+y);
// }

// let a=parseInt(prompt("Enter 1st number"));
// let b=parseInt(prompt("Enter 2nd number"));

// addTwoNumbers(6,7);




// function addTwoNumbers(x=2,y=3){
//   console.log(x+y);
// }
// addTwoNumbers();
// addTwoNumbers(6,6);
// addTwoNumbers(2);




// function addTwoNumbers(x,y=3){
//   console.log(x+y);
// }
// addTwoNumbers(5,6,8,9);







// Arrow function are great for sending function around as parameter and using as shorter 

// (param1,param2) => body of the function;



// function doingStuff(x){
//   console.log(x);
// }

// its arrow function
// let doingArrowStuff= x => console.log(x);
// doingArrowStuff("Hello");


// let addTwoNumbers= (x,y) => console.log(x+y);
// addTwoNumbers(10,30);


// const arr =["squirrel" , "alpaca" , "buddy"];
// arr.forEach(e => console.log(e));


// Spread OPERATORno
// let spread =["so", "much" ,"fun"];
// let message1 =["Javascript" , "is" , spread, ];
// let message =["Javascript" , "is" , ...spread, ];
// console.log(message1);
// console.log(message);


// application of spread oprator
//  function addTwoNumbers(x,y){
//   console.log(x+y);

//  }
//  let arr=[5,9];
//  addTwoNumbers(...arr);





//  function addTwoNumbers(x,y,a,b){
//   console.log(x+y+a+b);

//  }
//  let arr=[5,9];
//  let arr1=[10,99]
//  addTwoNumbers(...arr,...arr1);


//  REST PARAMETER

// function someFunction(param1, ...param2){
//   console.log(param1,param2);
// }

// someFunction("hii", "mr" , "Mohan","nothing");





//  return tpyes

// function addTwoNumbers(x,y){
//   console.log(x+y);
// }
// let result=addTwoNumbers(5,9);
// console.log(result);


// let addTwoNumbers= (x,y)=> console.log(x+y);
// // addTwoNumbers(2,3);



// let resultArr=[];
// for(let i=0;i<10;i++){
//   let result=addTwoNumbers(i,2*i);
//   resultArr.push(result);
// }
// console.log(resultArr);





// let addTwoNumbers= (x,y)=>x+y;

// let resultArr=[];
// for(let i=0;i<10;i++){
//   let result=addTwoNumbers(i,2*i);
//   resultArr.push(result);
// }
// console.log(resultArr);


// LOCAL VARIABLES IN FUNCTIONS

// function testAvailibility(){
//   let y ="Local variable!";
//   console.log (" Available here",y);
// }

// testAvailibility("hii");
// console.log("Not available here:",y);

// function testAvailibility(){
//   let y="I'll return";
//   console.log("Available here:",y);
//   return y;
// }

// let z=testAvailibility();
// console.log("outside the function:",z);
// console.log("not available here:",y);



//     LET versus var variables

// function doingStuff(){
//   if(true){
//     var x=
//   }
// }



// function doingStuff(){
//   if(true){
//     console.log(x);
//     var x="local";
//   }
// }

// doingStuff();


// const scope  ,its a block scope

// function doingStuff() {
//   if (true) {
//     console.log(x);
//       const x = "local";
//   }
// }

// doingStuff();


// GLOBAL VARIABLE

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:",globalVar);

// function creatingNewFunction(x){
//   console.log("")
// }






// let x="global";

// function doingStuff(){
//   let x="local";
//   console.log(x);
// }

// doingStuff();
// console.log(x);





// let x="global";

// function doingStuff(x){
//   console.log(x);
// }

// doingStuff("param");





// function confuseReader(){
//   x="Guess my scope....";
//   console.log("inside the func",x);
// }

// confuseReader();
// console.log("outside the func",x);





// Immediate invoked function expression
// iife imediately invoked function expression
// (); is used to invoke the function 


// (function (){
//   console.log("IIFE");
// }
// ) ();




// Arrow func 
// (
//   ()=>{
//     console.log("run right away");
//   }
// ) ();




//                            RECURSION FUNCTION 


// function getRecursive(nr){
//   console.log(nr);
//   if(nr>0) getRecursive(--nr);
// }

// getRecursive(3);




function logRecursive(nr){
  console.log("Getting started:", nr);

  if(nr>0) logRecursive(nr-1);
  else console.log("done with recursion");

  console.log("ended",nr);
}

logRecursive(3);

