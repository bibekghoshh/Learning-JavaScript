let num=349865;
let sum=0;
while(num>0){
    let rem=num%10;
    // console.log(rem);
    sum=sum+rem;
    num=parseInt(num/10);
}
console.log(sum);