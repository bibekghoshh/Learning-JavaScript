let date= new Date();

console.log(date);
console.log(date.toString());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getTime());

console.log(typeof date);

let myDate=new Date(2023,0,23);
console.log(myDate.toDateString());

let formatDate=new Date("2023-01-14");
console.log(formatDate.toString());

let myTime=Date.now();
console.log(myTime);

console.log(date.toLocaleString('default',{
    weekday:'long',
}));