const promt=require('prompt-sync')();
const n = promt('Enter number')

let harmonicNo = 0;
for(let i =1;i<=n;i++)
{
    harmonicNo = harmonicNo+1/i;
}
console.log(n+"th harmonic number = "+ harmonicNo);