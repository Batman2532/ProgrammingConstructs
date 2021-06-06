const promt=require('prompt-sync')();
const n = promt('Enter number')

let twoPowerN = 2;
console.log( "value for power : 0  is  = "+ twoPowerN );
for(let i=1;i<n;i++)
{
     twoPowerN = twoPowerN*2; 
console.log( "value for power : "+i + "  is  = "+ twoPowerN );
}