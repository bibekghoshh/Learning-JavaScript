function PowerOfTwo(num){
    if(num<=1){
        return true;
    }
    while(num>1){
        if(num%2!==0){
            return false;
        }
        num=num/2;
    }
  return true;
}

console.log(PowerOfTwo(1));
console.log(PowerOfTwo(2));
console.log(PowerOfTwo(5));
console.log(PowerOfTwo(8));
console.log(PowerOfTwo(16));
console.log(PowerOfTwo(20));

