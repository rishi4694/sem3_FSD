// try catch
// try{
//     let a=10;
//     console.log(a);
//     console.log(b);
// }
// catch(error){
//     console.log("error is: " + error.message);
// }
// finally{
//     console.log("this is finally block");
// }
 
// custom error
function checkAge(age){
    if(age<18){
        throw new Error("age is less than 18");
    }   
}
checkAge(15);
