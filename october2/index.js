// function generator


// !  why ?

// function sum(a,b){
//     return a+b ;

//     return a +b 
// }

// console.log(sum(2,3))
//  ! how ? 

// function* sum(a,b){
//  console.log("ths sum of a,b is ")
//     yield a+b ;

//     console.log("the multiplation is ")
//     yield a *b;
    
//     console.log("the multiplation is ")
//     yield a;
//     // return a+ b
// }

// let res = sum(2,10);


// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)


//!   rest parameter function 

// function sum(a,b,...c){
//     let sum = 0
//     c.forEach((el)=>{
//         sum+= el
//     })
//     console.log(a+b+sum )
// }

// sum(4,5,4,5,6,7,8,5,6,7,8)

// let arr = [3,4,5,6,7]

// let arr5 =[...arr] ;

// arr5.push(40);


// @BRO✨ : 1. Function Declaration
// 2. Function Expression
// 3. Anonymous Function
// 4. IIFE
// @Siddhant🤞  : 1. Arrow function
// 2. first class function
// 3. higher order function
// 4. callback function
// @nitesh kushwaha : 1. Generator function
//    2. Rest Parameter function
//    3. Default Parameter function

// @ayush : 1. Pure and impure function

//`
//  2.First order fnction
// 3.Constructor function
// 4.Async function

// default parameter 

// let user = (name="John Doe",age=18 ,adress,rollono )=> console.log(name ,age,adress,rollono) ;


// user("ayush",21,"kolkata","1234")

// let res = (function (){
//     let privatevar  ;
//     return {

//         getter:function(){
//             return privatevar
//         } ,
//         setter:function(val){
//        privatevar = val ;
//         }
//     }
// }
// )();

// console.log(res.getter())

// res.setter(20)
// console.log(res.getter())


