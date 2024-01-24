let age="23"

let originalAge=Number(age);

console.log(originalAge);

let no="32bn"
let originalNo=Number(no);
console.log(originalNo); //NaN Not a Number because it contains
console.log(typeof originalNo);

let pin=133722
let stringPin=String(pin);
console.table([stringPin, typeof stringPin]);

let isLoggedIn=0
let boolIsLoggedin=Boolean(isLoggedIn);
console.table([boolIsLoggedin, typeof boolIsLoggedin]);