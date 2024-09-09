//Problem 02 : Find out the max of three Numbers?

//Answer:
const Tim= 55;
const Sin= 88;
const Blu=44;


if(Tim>Sin && Tim>Blu){
    console.log('Tim gets the highest marks ',Tim);
}

else if(Sin>Tim && Sin>Blu){
    console.log('Sin gets the highest marks ',Sin);
}
else{
    console.log('Blu gets the highest marks ',Blu);
}

//function 

function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log('Number1 is the max ', num1);

    }
    else if(num2>num3 && num2>num1){
        console.log('Number2 is the max ',num2);
    }
    else{
        console.log('Number3 is the max ',num3);
    }
}

const maxNumber= maxOfThree(75,66,88);
console.log(maxNumber);