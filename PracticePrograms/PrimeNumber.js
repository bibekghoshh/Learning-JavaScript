const num=23;
const divide=parseInt(num/2);
// console.log(divide);
let i;
for(i=2;i<divide;i++){
    if(num%i===0){
        // console.log(num);
        // console.log(i);
        break;
    }
}
if(i===divide){
    console.log("Number is Prime");
}else{
    console.log("Number is not prime");
}