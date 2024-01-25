const n=5;
let num1=0;
let num2=1;
let febo=[];

for (let index = 0; index < n; index++) {

    let ans=num1+num2; 
    num1=num2;
    num2=ans;
    febo[index]=num1;
}
console.log(febo);

