const arr=[5,3,6,7,8,23,53];
const arr2=new Array(2,4,5,6,7);

arr.push(43);
// console.log(arr);

arr.pop();
// console.log(arr);

arr.unshift(45);
// console.log(arr);

arr.shift();
// console.log(arr);

// console.log(arr.includes(8));
// console.log(arr.indexOf(53));

const newArr=arr.join();

const location=["Bankura","Amarkanan","durgapur","India"];
const name=["bibek","Ghosh","Uttam","Usha"];

// location.push(name);
// console.log(location);

const arr3=location.concat(name);
console.log(arr3);

const arr4=[...location,...name];
console.log(arr4);

let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3));