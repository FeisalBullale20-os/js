// // // // variables -> is a container that hols a data

// // // // let
// // // let x = 5
// // // let y = 4
// // // console.log(x);
// // // console.log(y)




// // // // const
// // // const k =5
// // // console.log(k)





// // // // var


// // // var f = 56
// // // console.log(f)


// // // // datatypes

// // // // string
// // // let name = "feisal"
// // // console.log(typeof name)

// // // console.log("name")
// // // console.log(name)

// // // // numbers
// // // let age = "34"
// // // console.log( typeof age)




// // // // Boolean
// // // isStudent = true
// // // console.log(typeof isStudent)

// // // let numbers = [4,6] ;

// // // console.log(typeof numbers)

// // // // operators
// // // // arithmetic operators
 
// // // // +, -,/,*,%, ++, --, **
// // // let teachers = 56
// // // let student = 67
// // // let remain = student - teachers

// // // console.log(remain)


// // // let productPrice = 600
// // // let quantity = 5

// // // let total = productPrice * quantity

// // // console.log("cash paid:", total)



// // // let t = 20
// // // let s = 3
// // // let g = t % s

// // // console.log(g)



// // // let m = 7
// // // m ++

// // // console.log(m)

// // // let h = 4 ** 2

// // // console.log(h)

// // // // logical operators 
// // // // and , or ,

// // // // and

// // // isStudent = true
// // // isEmployed = false

// // // person = isEmployed && isStudent 
// // // console.log(person)

// // // // or
 
// // // canAged = true
// // // canWork = false

// // // adult = canAged || canWork
// // // console.log(adult)
// // // comparison
// // // // ==,===,!=, !==, >, <, >=, <=

// // // console.log(10 >= 10)


// // // inputs

// // // let name = prompt("what is your name")

// // // console.log( "hellow" , ''  + name)



// // const readline = require("readline");

// // const rl = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// // rl.question("Enter your first number: ", function(number1) {
// //     rl.question("Enter your second number: ", function(number2) {

// //         const result = Number(number1) + Number(number2);

// //         console.log("The sum is: " + result);

// //         rl.close();
// //     });
// // });


// // conditinal statement
// // if , else, else if
// // let marks = 49

// // if (marks >= 80 ){
// //     console.log("you scored A")
// // }else if (marks >= 70){
// // console.log("you scored B")

// // }else if(marks >=60){

// //     console.log("you scored C")
// // }else if (marks >=50){
// //     console.log("you scored D")
// // }else{

// //     console.log("you failed the test")
// // }


// let marks = 69


// if (marks >=80 && marks <=99){
    

//     console.log("A");

// }else if(marks >=60 && marks <=79){
//     console.log("B")

// }else if (marks >=40 && marks  <=59){

//     console.log("C");
// }else if (marks >=30 && marks <=39){
//     console.log('D')
// }else{
//     console.log("you have failed please try again")
// }

// // functios

// // function => a block of code that performs certain task
// function hellow(){
//     console.log("hellow feisal");


// }
// hellow();

// function greet(name){

//     console.log("hi"  + name);
// }
// greet("feisal")


// function add(a, b){
//     console.log(a + b);


// }
// add(25,30);

// function checkNumber(number){
//     if(number % 2 === 0){
//         console.log("is even")


//     }else{
//         console.log("is an odd number")
//     }


// }
// checkNumber(4);
// checkNumber(7);

// function checkAge(age){
//     if(age >=18){
//         console.log("You are eligible to vote")
//     }else{
//         console.log("You are still a minor")
//     }

// }
// checkAge(28);
// checkAge(14);
// checkAge(17);
// checkAge(19);

// function area(length, width){
// result = length * width
// console.log(result);
// }
// area(25, 15);
// area(10, 18);
// area(12, 23);
// area(14, 15);
// area(25, 15);
// area(10, 18);
// area(12, 23);
// area(14, 15);
// area(25, 15);
// area(10, 18);
// area(12, 23);
// area(14, 15);
// area(25, 15);
// area(10, 18);
// area(12, 23);
// area(14, 15)
// // two types of functions
// // arrow function
// function add(a,b){
// console.log(a + b);


// }
// add(23,56);

// const add = (a,b) =>{
//     return a+b
// }

// console.log(add(10,34));



// // callback function

// is a function that calls another function

// function moha(name){
//     console.log( "hellow", name);
    
// }
// function feisal(){
//     console.log("hi feisal");
// }
// moha( "ibrahim", feisal() );


function kunasi(name){
    console.log( "hi", name);
}
function ismail(){
    console.log("hello kunasi")
}
kunasi("ismail", ismail());

function kunasi(name){
    console.log( "how are you", name);
}
function ismail(){
    console.log("i am fine kunasi")
}
kunasi("ismail", ismail());


function add(a,b ,callback){
    let result = a +b
    callback(result);
    console.log(result);


}
function answer(callback){
    console.log("answer" );
    
}
add(34,45, answer);

// arrays is a list of characters[]
// let x = 6
// let t = 9
// let r = 8
// let y = 5

// console.log(x);
// console.log(t);
// console.log(r);
// console.log(y);
//  let numbers = [6,9,8,5];
//  console.log(numbers);

//  console.log(numbers.length);

// //  indexing
// console.log(numbers[1]);
// console.log(numbers[3])

// replacing  of array

// let countries = ["kenya", "somalia", "togo"];



// // adding to an array at the emd 
// // push
//  countries .push() = "tanzania";
// console.log(countries);
// let countries = ["kenya", "somalia", "togo"];

// // Adding to an array at the end
// // push()
// countries.push("uganda");

// console.log(countries);


// countries .pop();
// console.log(countries)


// countries .unshift("chad");
// console.log(countries)

// countries.shift();
// console.log(countries);

// console.log(countries[2])








