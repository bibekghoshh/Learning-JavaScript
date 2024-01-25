let num=9494344;
let numberOfDigit=0;
while(num>0){
    let rem=num%10;
    numberOfDigit++;
    num=parseInt(num/10);
}

console.log(numberOfDigit);