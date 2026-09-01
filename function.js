// const square=number=>number*number;
// console.log(square(10));
/************************************************************/
// const add=(a,b)=>a+b;          //arrow function
// console.log(add(3,6))
/********************************************************** */
// function g(name="rishi"){
//     console.log(name)
// }
// g()
// g("don")
/********************************************************** */
function display(result){            //callback function
    console.log(result);
}
function cal(a,b,callback){
    callback(a+b);
}
cal(10,20,display)
/********************************************************** */
