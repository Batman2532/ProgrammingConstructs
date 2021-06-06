let min = 0;
let max = 0;
for (i=0;i<5;i++)
{
    twoDigitNumber = Math.floor(Math.random()*1000);
    console.log(twoDigitNumber); 
    if(i == 0)
    {
    min = twoDigitNumber;
    max = twoDigitNumber;
    }
    else{
    if(min>twoDigitNumber)
    {
        min = twoDigitNumber;
    }
    if(max<twoDigitNumber)
    {
        max = twoDigitNumber;
    }
}
}
console.log("minimum number  is : "+min);
console.log("maximum number  is : "+max);