// // // variables -> is a container that hols a data

// // // let
// // let x = 5
// // let y = 4
// // console.log(x);
// // console.log(y)




// // // const
// // const k =5
// // console.log(k)





// // // var


// // var f = 56
// // console.log(f)


// // // datatypes

// // // string
// // let name = "feisal"
// // console.log(typeof name)

// // console.log("name")
// // console.log(name)

// // // numbers
// // let age = "34"
// // console.log( typeof age)




// // // Boolean
// // isStudent = true
// // console.log(typeof isStudent)

// // let numbers = [4,6] ;

// // console.log(typeof numbers)

// // // operators
// // // arithmetic operators
 
// // // +, -,/,*,%, ++, --, **
// // let teachers = 56
// // let student = 67
// // let remain = student - teachers

// // console.log(remain)


// // let productPrice = 600
// // let quantity = 5

// // let total = productPrice * quantity

// // console.log("cash paid:", total)



// // let t = 20
// // let s = 3
// // let g = t % s

// // console.log(g)



// // let m = 7
// // m ++

// // console.log(m)

// // let h = 4 ** 2

// // console.log(h)

// // // logical operators 
// // // and , or ,

// // // and

// // isStudent = true
// // isEmployed = false

// // person = isEmployed && isStudent 
// // console.log(person)

// // // or
 
// // canAged = true
// // canWork = false

// // adult = canAged || canWork
// // console.log(adult)
// // comparison
// // // ==,===,!=, !==, >, <, >=, <=

// // console.log(10 >= 10)


// // inputs

// // let name = prompt("what is your name")

// // console.log( "hellow" , ''  + name)



// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your first number: ", function(number1) {
//     rl.question("Enter your second number: ", function(number2) {

//         const result = Number(number1) + Number(number2);

//         console.log("The sum is: " + result);

//         rl.close();
//     });
// });


// conditinal statement
// if , else, else if
// let marks = 49

// if (marks >= 80 ){
//     console.log("you scored A")
// }else if (marks >= 70){
// console.log("you scored B")

// }else if(marks >=60){

//     console.log("you scored C")
// }else if (marks >=50){
//     console.log("you scored D")
// }else{

//     console.log("you failed the test")
// }


let marks = 69


if (marks >=80 && marks <=99){
    

    console.log("A");

}else if(marks >=60 && marks <=79){
    console.log("B")

}else if (marks >=40 && marks  <=59){

    console.log("C");
}else if (marks >=30 && marks <=39){
    console.log('D')
}else{
    console.log("you have failed please try again")
}



