let value1= "1000";

(function(){
    let value1 = "0";
    console.log(value1);
})()


let result = (function(){
    let value1 = "1";
    return value1;
})

console.log(value1);

(function(param1) {
    let value1 = param1;
    console.log(`${value1}`);
})("2");