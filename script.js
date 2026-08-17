//Number methods
// let num = 356;
// let num2 = 757.984765;
// let score = "34";

// console.log(num + 34);
// console.log(num.toString() + 34);
// console.log(num2.toFixed(4));
// console.log(parseInt(score) + 10); 

// let a = 27;
// let b = 5;
// let c = 15; 

// console.log(a +  b);
// console.log(a % b);


//logical

// let uniform=true;
// let ID =  false;
// let textbook = true;

// console.log(uniform && ID && textbook)
// console.log(uniform || ID || textbook)
// console.log((uniform && ID) || textbook)

// // unary
// console.log(++a);
// console.log(--a);

// let age = 45;
// let vote = age < 18 ? "you can vote" : "you cannot vote";

// console.log(vote);

// prompt and alert
// alert("Hello Everyone");
// alert("Jesus is king");

// let newage = prompt("Enter your age");
// let newvote = newage >= 18 ? "you can vote" :"You cannot vote";
// // alert(newvote); 


// let a = parseInt(prompt("Enter your first number"));
// let b = parseInt(prompt("Enter your second number"))
// alert(a + b)


// // conditionals
// if (5 > 7) {console.log("5 is the greatest number");
// } else{
//     console.log("7 is the greatest number");
// }


// let num = 5;
// if(num > 5){
//     console.log("Round to 1");
// } else if (num == 4) {
//     console.log("round to 1");
// } else{
// console.log("round to zero");
// }



// // template literal
// let userAccess = prompt("what are you wearing");
// if (userAccess === "shoe") {
//     alert("you can enter");
// } else if (userAccess === "sandals"){
//     alert("you can enter with your sandals");
// } else if (userAccess === "injury"){
//     alert ("you can enter");
// } else {
//     alert("you cannot enter")
// }





//  write a prompt that tells a user if they are eligble to vote

// const userAge = parseInt(prompt("enter your age"));
// if (userAge > 18){
//     alert(`your age is ${userAge} and you can vote`);
// } else if(userAge < 1){
//     alert ("Age can't be negative value");
// } else if (isNaN(userAge)) {
//     alert ("you can only enter a number");
// } else{
//     alert(`sorry are ${userAge} and you are not eligible to vote`);
// }


// wrie a program that determine the greater of three numbers
// const numOne = parseInt(prompt("Enter your first number"));
// const numTwo = parseInt(prompt("Enter ypur second number"));
// const numThree = parseInt(prompt("Enter your Third number"));

// if (numOne > numTwo && numThree){
//     alert(`${numOne} is the greatest number`);
// } else if (numTwo > numOne && numThree) {
//     alert(`${numTwo} is the greatest number`);
// } else if (numThree == numTwo && numOne) {
//     alert("The numbers are equal")
// }

// write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

// const Age =parseInt(prompt("Please Enter Your Age"))

// if( Age < 12){
//     alert(`Since your Age ${Age} is less 12 your ticket price is N5`);
// } else if (Age < 18){
//     alert(`Since your Age ${Age} is less 18 your ticket price is N10`);
// } else if(Age < 60){
//     alert(`Since your Age ${Age} is less 60 your ticket price is N20`);
// } else if(isNaN(Age)){
//     alert(`${Age} can't be a letter`);
// } else{
//     alert(`Since your Age ${Age} is  60 and above your ticket price is N15`);
// }
 
        





//  Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// let ProductPrice =parseInt(prompt("Enter the Product Price"))
// if ( ProductPrice < 0){
//     alert(`Your Product Price  ${ProductPrice} can't be less than 0`)

// }else if(ProductPrice <=99){
//     alert(`Your Product Price is ${ProductPrice} and you are eligible to 10% discount`)
// }else if(ProductPrice >= 100){
//     alert(`Your Product Price is ${ProductPrice} and you are eligible to 20% discount`)
// }else if(isNaN(ProductPrice)){
//     alert( `Product Price is invalid`)
// }else{
//     alert(`Your Product Price  ${ProductPrice} you have 0% discount`)
// }


// // Loops
// for (let num = 1; num <= 20; num++){
//     console.log(num);
// }
  
// // while
// let b = 1;
// while(b <=50){
//     console.log(b);
    //   b++;
// } 


// // do while
// let c= 10;
// do{
//     console.log(c);
//     c++;
// } while (c <= 20);


// // show only odd numbers
// for(let a= 1; a <= 50; a++){
//     if(a % 2=== 1) {
//         console.log(a);
//     }
// }

// show only even numbers
// for(let a= 1; a <= 50; a++){
//     if(a % 2=== 0) {
//         console.log(a);
//     }
// }


// write a loop that prints out the 2 times multiplication table from 2x1 to 2x20

// for ( a = 1; a <= 20; a++) {
//     let b = `2 x ${a} = $(a * 2)`;
//     console.log(b);
// }


// write a loop that prints out the multiplication table from one to twelve 1x12 to 20x12
// for(a =1; a <=20; a++) {
//     for (b = 1; b <= 12; b++) {
//         let c = `${a} x ${b} = ${a * b}`;
//         console.log(c)
//     }
// }


// functions in js
// function username(myName){
//     console.log(myName);
// }

// username("victory")

// 2nd option
const username = (yourname) => {
    console.log(yourname);
}


username("jennifer")













    






























    




































