const promt=require('prompt-sync')();
const number = promt('Enter number')

factorial = 1;
for(let i =2;i<=number;i++)
{
  factorial *=i;
}
console.log("factorial of "+number+ "  = "+factorial);