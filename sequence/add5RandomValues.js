let sum = 0;
let average = 0;
for (i=0;i<5;i++)
{
    twoDigitNumber = Math.floor(Math.random()*100);
    console.log(twoDigitNumber); 
    sum += twoDigitNumber;
}
average = sum/5;
console.log("sum  is : "+sum);
console.log("average  is : "+average);