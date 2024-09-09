//Problem 01: Find out which number is the max?

//Answer:

const disha=56;
const salman=77;

if(disha>salman){
    console.log('Disha will eat the strawberry');
}

else{
    console.log('Salman will eat the mango');
}

//function
function getmax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1=getmax(96,98);
const max2=getmax(66,99);

const max=getmax(max1,max2);//maximum number between num1 & num2

console.log('max of two is : ',max);



