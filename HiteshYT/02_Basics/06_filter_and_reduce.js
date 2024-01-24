const number=[4,5,6,7,8,64,98,34,48,45];
const lang=["javascript","Python","Ruby","Java"];

let b=number.filter((nums)=>{return nums>50});
console.log(b);

let c=number.filter((nums)=> nums < 10);
console.log(c);

let n=[];
number.forEach((num)=>{
    if(num<10){
        n.push(num);
    }
})
console.log(n);

const books=[
    {
        title:"one",genre:"History",publish:"1987",price:340
    },
    {
        title:"two",genre:"suspence",publish:"1999",price:432
    },
    {
        title:"three",genre:"geo",publish:"1932",price:231
    }
];



let d=books.filter((book)=>{return book.genre==="History"});
console.log(d);

let no=number.map((n)=>n+10);
console.log(no);

//chaining

const newNums=number.map((n)=>n*4).map((n)=>n+10).filter((n)=>n<40);
console.log(newNums);

//reduce
const number1=[4,5,6,7,8,64,98,34,48,45];

// let ab=number1.splice(2,3);
// console.log(ab);
// console.log(number1);
// let noo=number1.join(" ");
// console.log(noo);

const arr=[1,2,3,4];

const initalValue=0;
let result=arr.reduce((accumulator,currentvalueofArray)=> accumulator+currentvalueofArray,initalValue);
console.log(result);

let pricetopay=books.reduce((acc,item)=>acc+item.price,0);
console.log(pricetopay);