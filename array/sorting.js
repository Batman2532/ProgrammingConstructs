// finding second largest And second smallest number without sorting the array

let threeDigitNumbersArr = new Array();

for(let i =0;i<10;i++)
{
    let number = Math.floor(Math.random()*900)+100;
    threeDigitNumbersArr.push(number);
}
console.log(threeDigitNumbersArr);

let secondLargest = threeDigitNumbersArr[0];
let largest = threeDigitNumbersArr[0];
let secondSmallest = threeDigitNumbersArr[0];
let smallest = threeDigitNumbersArr[0];

for(let i =1;i<threeDigitNumbersArr.length;i++)
{
    if(secondLargest<threeDigitNumbersArr[i])
    {
        if(largest<threeDigitNumbersArr[i])
        {
            secondLargest = largest;
            largest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondLargest = threeDigitNumbersArr[i];
        }
    }

    if(secondSmallest>threeDigitNumbersArr[i])
    {
        if(smallest>threeDigitNumbersArr[i])
        {
            secondSmallest = smallest;
            smallest = threeDigitNumbersArr[i] 
        }
        else
        {
            secondSmallest = threeDigitNumbersArr[i];
        }
    }
}

console.log("Second smallest value is : "+secondSmallest);
console.log("Second largest value is : "+secondLargest);

// Sort the array and find second largest & second smallest numbers

let sortedArray = threeDigitNumbersArr.sort();

console.log("Second smallest value using array is : "+sortedArray[1]);
console.log("Second largest value using array is : "+sortedArray[sortedArray.length-2]);


// storing prime factors of an number  in an array

let primeFactorArr = new Array();
let number = 23100;
        //checking prime numbers before 420
for (let j = 2; j <= number/2; j++) {
    let flag = true;
    for (let i = 2; i <= j / 2; i++) {
        if (j % i == 0 ) {
            flag = false;
            break;
        }
    }
        //checking if prime number is a factor
    if (flag == true && number % j ==0)
        primeFactorArr.push(j);
}

console.log("prime factors of number : "+number + " are : "+primeFactorArr);