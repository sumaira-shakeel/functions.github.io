// Basic Functions
//syntex keywords name()statement
//Basic functions
// function greeting(name:string){
//     console.log( `Hello ${name} welcome to my party`);
// }
//        greeting("Sumaira");


//parameters
// function sub(num1:number,num2:number){
//     console.log(num1-num2);
// }
// sub(10,5);
//types of parameters-----------
//1.optional parameters-----------------
// function greet(name?:string){
//     if(name){
//         console.log(`Hello ${name}`);
//     }else{
//         console.log("Hello friends!");
//     }
    
// }
// greet("sumaira");//default parameters
// greet();//optional parameters
//Return-------------
//Example #1direct console karane ka tareeka---
// function  additions(num1:number,num2:number){
//     return num1+num2;
// }
// console.log(additions(10,5));
//Example #2 variable me store karane ka tareeka

// function guest(name:string){
//     return`Hello ${name}`;
// }
// let guestName:string = guest("Sumaira");
// console.log(guestName);


//examlpe#3 direct console me function ko call karaya he 
// function myCar(name:string,model?:number){
//     return `My car is ${name} and model is ${model}.`;


// }
// console.log(myCar("Toyota",2022));
// // Example 4 is me variable me store kar ke console karvaya he;
// function myCar(name:string,model:number):string{
//     return`My car is ${name} and model is ${model}`
// }
// let carData:string =  myCar("Toyota",2023);
// console.log(carData);

// function overloading--------------------
// aik single function k liye multiple functions signature function overloading allow krta he 
//over loading signature kia he example
//overload signature
// function addition(arg1:string,arg2:string):string
// function addition(arg1:number,arg2:number):number
// function addition(arg1:boolean,arg2:boolean):boolean
// function addition(arg1:number,arg2:string):string




// implimentation signatures

// function addition(arg1:any,arg2:any):any{    // use of data type any is not a good practice in type script 
//     return arg1 +  " " + arg2

// }
// console.log(addition("sumaira","sami"));
// console.log(addition(5,3));
// console.log(addition(true,false));
// console.log(addition(2,"sana"));



