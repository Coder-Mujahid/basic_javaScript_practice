// const names="md mujahid islam";
// console.log(names.includes('mujahid'));
// console.log(names.includes('md'));
// console.log(names.includes('islam'));
// console.log(names.includes('name'));


// var names="mujahidul islam"
// console.log(names.toLocaleLowerCase());
// console.log(names.toUpperCase());
// console.log(names.toLowerCase());
// console.log(names.toLocaleUpperCase());

// var names="md mujahidul islam";
// console.log(names.split(''));
// console.log(names.split(' '));

// var names="md mujahidul islam";
// console.log(names.slice(''));
// console.log(names.slice(' '));
// console.log(names.slice(1,5));


// var arr1=[1,2,3,4,5]
// var arr2=[0,9,8,7,6]
// console.log(arr1.concat(arr2));

// console.log(Math.pow(1,3));
// console.log(Math.pow(5,6));
// console.log(Math.pow(7,8));

// var num=10
// var num1=2
// console.log(Math.abs(num-num1));
// console.log(Math.abs(num+num1));
// console.log(Math.abs(num*num1));
// console.log(Math.abs(num/num1));


// console.log(Math.round(2.40));
// console.log(Math.round(2.80));
// console.log(Math.floor(2.60));
// console.log(Math.ceil(3.60));

// var number=Math.random()*100;
// var number2=Math.random()*100;

// var rendom=Math.round(number)
// var rendom1=Math.round(number2)

// var total=rendom+rendom1

// console.log(rendom,'+',rendom1,'=',total);
// console.log(`${rendom} + ${rendom1} = ${total}`);



// var arr2=[0,9,8,7,6]
// console.log(Math.max(...arr2));

// var arr2=[11,22,33,44,55]
// console.log(Math.min(...arr2));



// function and object-----------------------------------------------------

// function add(a=0){
//     console.log(a);
// }
// add();
// add(5);
// add(10);



// const add=function(a=5){
//     console.log(a);
// }
// add();
// add(5);
// add(6);

// // arrow functin
// const add=(a)=>{
//     console.log(a-20);
//     console.log(a+20);
//     // this function must needed return function
//     return a;
// // }
// add(10);


// const data={
//     name:"mujahid islam",
//     roll:400314,
//     age:22,
//     year:2023

// }

// console.log(Object.keys(data));
// console.log(Object.values(data));

// console.log(data.name);
// console.log(data.roll);
// console.log(data.age);
// console.log(data.year);

// for of loop only work on arry---------------------------------------
// var arr=[1,2,3,4,5,6,7,8,9,0]
// for(var i of arr ){
//     console.log(i);
// }

// for in loop only work on object-------------------------------------
// const data={
//         name:"mujahid islam",
//         roll:400314,
//         age:22,
//         year:2023

//     }

// for(var i in data){
//     console.log(i);
//     console.log(data[i]);

// }
// not execute
// const add=i.length
// const add1=data[i]
// console.log(`${add} = ${add1}`);


// var data=[
//     {
//         name:"mujahid islam",
//         roll:400314,
//         age:22,
//         year:2023
//     },
//     {
//         name:"nirob islam",
//         roll:400315,
//         age:22,
//         year:2023
//     },
//     {
//         name:"samim islam",
//         roll:400314,
//         age:22,
//         year:2023
//     },
//     {
//         name:"mahmud islam",
//         roll:400314,
//         age:22,
//         year:2023
//     }
// ]

// const out=data.map(i=>i)
// console.log(out);

// const foreach=(data.forEach(i=>console.log(i)))
// console.log(foreach);

// reduse--------------------------------

// const arr=[1,2,3,4,5,6]
// // reduse method without function
// console.log(arr.reduce((a , b)=> a+b,0));

// // reduse methode with function
// console.log(arr.reduce(add));
// function add(a,b){
//     return a+b;
// }

// filter----------------------------------

// filter method without function
// const arr=[1,2,3,4,5,6,7,8,9]
// // console.log(arr.filter(i=>i>5));

// // filter method with function
// console.log(arr.filter(filterf));
// function filterf(i){
//     return i>5;
// }


// find-------------------------------------

// // find method without function
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr.find(i => i > 2));

// // find method with function
// console.log(arr.find(findf));
// function findf(i){
//     return i>5;
// }

// ternary operator js---------------------
// // ternary operator with function
// var i='mujahid';
// function ternary(i){
//     return (i ? 'mujahid':'false');
// }
// console.log(ternary(i));
// // ternary operator with function
// console.log(i ? 'mujahid':'false');

