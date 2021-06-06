let repeatingDigitArr = new Array();
for(let i = 1; i<100;i++)
{
    if(Math.floor(i/10) == i%10)
     repeatingDigitArr.push(i);
    }
console.log("numbers which repeats digits are : "+repeatingDigitArr);