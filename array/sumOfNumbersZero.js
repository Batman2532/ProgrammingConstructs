let arr = [2,4,-5,3,-6,11];
n=arr.length;
let found =false;
for (let i=0; i<n-2; i++) 
    { 
        for (let j=i+1; j<n-1; j++) 
        { 
            for (let k=j+1; k<n; k++) 
            { 
                if (arr[i]+arr[j]+arr[k] == 0) 
                { 
                    console.log("triplet is ("+arr[i]+","+arr[j]+","+arr[k]+")" );
                    found = true; 
                } 
            } 
        } 
    } 
if(found == false)
{
    console.log("bot such three numbers found");
}
