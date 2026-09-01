// let n=[10,20,30,40];
// n.push(50);
// n.pop();
// console.log(n);
// n.unshift(2);
// console.log(n);
// n.shift(5);
// console.log(n);
// console.log()






// let employee={
//     id:101,
//     name:"rishi",
//     salary:50000
// };
// let{id,name,salary}=employee;
// console.log(id);
// console.log(name);
// console.log(salary);





// rest operator

function sum(...num){
    let total=0;
    for(let n of num){
        total+=n;
    }
    console.log(total);
}
sum(10,20);