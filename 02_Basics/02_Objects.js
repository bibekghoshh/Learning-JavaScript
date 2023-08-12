const mySym=Symbol("key1");

const jsUser={
    name:"Bibek",
    age:23,
    location:"amarkanan",
    email:"bibek@google.com",
    [mySym]:"myKey1",
}
// console.log(jsUser.email);
// console.log(jsUser["name"]);

// console.log(jsUser);
// console.log(jsUser[mySym]);
jsUser.email="bibek@microsoft.com";
// Object.freeze(jsUser);
// console.log(jsUser);
jsUser.email="bibek@ibm.com";
// console.log(jsUser);

jsUser.greating=function(){
    console.log("Hello JS Developer");
}

// console.log(jsUser.greating());
// console.log(jsUser.greating);

jsUser.greetingTwo=function(){
    console.log(`hello JS developer, ${this.name}`);
}
// console.log(jsUser.greetingTwo());

// const linkedinUser= new Object(); //singleTon Decleation
const linkedinUser={};

linkedinUser.id=432;
linkedinUser.name="Ghosh Babu";
linkedinUser.isLoggedIn=false;
// console.log(linkedinUser);
// console.log(Object.keys(linkedinUser));
// console.log(Object.values(linkedinUser));
// console.log(linkedinUser.hasOwnProperty("isLoggedIn"));

const regularUser={
    email:"Bibek@gmail.com",
    fullName:{
        firstName:"Bibek",
        lastName:"Ghosh",
    },
    role:"Developer",
};
// console.log(regularUser.fullName.firstName);

const obj1={1:"a",2:"b",3:"d"};
const obj2={4:"g",5:"h",6:"e"};

const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

const user=[{name:"Sundar"},{role:"CEO"}];
// console.log(user[0].name);

const course={
    courseName:"javaScirpt fullstack",
    price:544,
    courseInstructor:"Bibek Ghosh",
};
const {courseInstructor}=course; //de-structureing
console.log(courseInstructor);

const {courseInstructor:instructor}=course; //de-structuring with Rename the Variable
console.log(instructor);
