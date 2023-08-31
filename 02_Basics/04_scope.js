var c=300;
if(true){
    let a=10;
    var b=23;
    const c=35;
}
// console.log(a,b,c);

//Scope chaining

(function one(){
    let a=100;
    console.log(a);
    function two(){
        let b=a*3;
        console.log(b);
        function three(){
            const c=b-a;
            console.log(c);
        }
        three();
    }
    two();
})()

//hosting


addone(6);

function addone(n){
    console.log(n+1);
}
const bibek=3904;
console.log(bibek);