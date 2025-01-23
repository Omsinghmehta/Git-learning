// let a:number=10;
// let b:string="rohit";
// // a="rohit";
// let c:boolean=true;
// let big:bigint=157278382863n;
// let ab:null=null;
// let cd:undefined=undefined;
// console.log("for watch use: tsc --watch ,,for coming out:CTRL C ");
// const ho:number=20;
// let x=10; type inference (not assign the data type)
// x="hi"; not allowed
// let a:any=12;//
// let b:unknown="orhit";
// // if(typeof b =="string")
// console.log(a.toUpperCase());

// let arr:number[]=[2,3,4,5];
// let a:(string | number)[]=[2,"webkitURL",2];
// let tuple:[number,string,number]=[2,"jdbd",2];// fixed size array
// type n={
//     name :string,
//     age:number,
//     bal:number
// };
// let obj:n={
//     name:"ehvd",
//     age:29,
//     bal:22
// };
// let obj1:{ name :string, age:number, bal:number}={
//     name:"ehvd",
//     age:29,
//     bal:22
// };
// console.log(obj1);
// interface admin{  // comipiled fast & use this than "type" method
//     name:string,
//     age:number,
//     bal:number
// };
// interface admin{
//     id:number
// }
// let cust : admin={
//     name :"string",
//     age:2,
//     bal:33,
//     id:22
// }
// interface admin{  // comipiled fast & use this than "type" method
//     name :string,
//     age:number,
//     bal?:number
// };

// let cust : admin={
//     name :"string",
//     age:2
//     // bal:33, can be eliminate
// };
// console.log(cust).
// interface admin{  // comipiled fast & use this than "type" method
//     name :string,
//     age:number,
//     bal:number
// };

// let cust : Required<admin>={
//     name :"string",
//     age:2,
//     bal:33
// };
// console.log(cust)
// partial : all become optional
// required:all required
// readonly:cant modified
// function greet (a:number,b:number):number
// {
// return a+b;
// }
// function greet2 (a:string="jit"):void
// {
// console.log(a);
// }

// function greet2 (a?:string):void
// {
// console.log(a || "mohan");
// }
// greet2();
// let fun =(a:number , b:number):void=>{
//     console.log("hello");
// }

// function fun(a:number , callback:(num:number)=>void):void{
//     console.log(a+67);
// }
// fun(12,(order)=>{
//  console.log("hi");
// });
// let fun =(...a:number[]):void=>{
//     console.log("hello");
// }
// interface admin{  
//     name:string,
//     age:number,
//     bal:number
// };
// interface peraon extends admin{
//     id:number
// }
// let cust : peraon={
//     name :"string",
//     age:2,
//     bal:33,
//     id:22
// }

// use of "super" to call extend class constructor
// function fun<T>(num:T):T{
//  return num;
// }

// console.log(fun("rohiy"))
// console.log(fun(20))
// interface admin<T>{  
//     name:string,
//     age:number,
//     bal:T
// };
// let ob1:admin<number>=
// {
//     name:"sjd",
//     age:23,
//     bal:67
// };

