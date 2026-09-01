// console.log("java");
// setTimeout(()=>{
//     console.log("after time out");
// },3000);

let count=1;
let timer=setInterval(()=>{
    console.log(count);
    count++;
    if(count==6){
        clearInterval(timer);
    }
},1000);