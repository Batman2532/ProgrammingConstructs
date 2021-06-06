const prompt = require('prompt-sync')();
const number = prompt('Enter Number: ');

if(number<10){
    console.log("unit");
}
else if(number<100){
    console.log("tenth");
}
else if(number<1000){
    console.log("hundrad")
}
else if(number<10000){
    console.log("thousand")
}
