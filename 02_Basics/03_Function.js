function sayMyName(){
    console.log("Bibek ghosh");
}
// console.log(sayMyName); //Reference
// console.log(sayMyName()); //Function call

function addTwoNumber(numberOne,numberTwo){
    return numberOne+numberTwo;
}

const result=addTwoNumber(7,9);
console.log(result);

function userLoginMessage(username="someOne"){  
    return `${username} is just LogIN`;
}
console.log(userLoginMessage("bibek"));

function totalSum(...numbers){
    return numbers;
}

console.log(totalSum(3,4,5,6,7));

const user={
    name:"Bibek",
    price:432,
}
function handleObject(passingObject){
    return `${passingObject.name} is ordered worth RS ${passingObject.price}`;
}
console.log(handleObject(user));

console.log(handleObject({name:"Ghosh",price:500}));