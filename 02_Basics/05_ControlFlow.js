if(2=="2"){
    console.log(true);
}
if(2==="2"){
    console.log(true);
}else{
    console.log(false);
}

function empty(){};
const emptyobj={};
if(Object.keys(emptyobj).length===0){
    console.log("Object is empty");
}

//nullish coalesing operator(??)

var a=4??2;
var b=null??10;
var c=null??20??40;
console.log(a,b,c);

//For loop

for(let i=0;i<=10;i++){
    // console.log(i);
}

//Higher order array loops

const arr=[10,2,3,4,5];

for(let i of arr){
    console.log(i);
}

const greating="Hello Developer";

for(let iteration of greating){
    console.log(iteration);
}

//Maps

const map = new Map();
map.set('IN',"India");
map.set('USA',"America");
map.set('USA',"America");
map.set('POK',"Pakistan");
console.log(map);

for(let key of map){
    console.log(key);
}

for(let [key,value] of map){
    console.log(`key of ${key} is ${value}`);
}

const exten={
    js:"Javascript",
    py:"Python",
    cpp:"C++",
    rb:"Ruby"
};

for(let i in exten){
    console.log(i);
    console.log(Object(i));
}

// console.log(exten.js);

const coding=["js","py","rb","cpp","java"];
coding.forEach(function(value){
    console.log(value);
})

coding.forEach(function(item,index,arr){
    console.log(item, index, arr);
})