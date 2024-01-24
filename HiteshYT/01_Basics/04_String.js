const name="Bibek"
let age=23
console.log(`${name} is ${age} year old programmer`);

const gamename= new String("BibekGhosh"); //converted into char array

console.table(
    [gamename, gamename.length,gamename.charAt(3), gamename.indexOf('G'), gamename.toUpperCase()]
);

let newName="             Bibekkkkk    ";
console.log(newName.trim());

var url="https://bibekghosh.tech/projects";
console.log(url.replace('tech',"com"));
console.log(url.includes("bibek"));