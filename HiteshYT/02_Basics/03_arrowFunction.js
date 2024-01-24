// console.log(this);

function bibek(){
    const name="Ghosh";
    console.log(this.name); //only works in objects
}
// bibek();

const ghosh=()=>{
    let name="bibek";
    console.log(this);
}
ghosh();

const addTwoNo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwoNo(4,5));
let result=addTwoNo(5,6);
console.log(result);

//implicit arrow funtion

const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(9,8));

//immediatley invoked Funtion

(function js(){console.log("learning Javascript is Fun");})();
(()=>{console.log("Javascript");})();

((name)=>{console.log(`my name is ${name}`);})("Bibek");