const arr=[6,4,7,3,4,33,23,43,5];
let max=arr[0];
for (let index = 0; index < arr.length; index++) {
        if(max<arr[index]){
            max=arr[index]
        }
}

console.log(max);