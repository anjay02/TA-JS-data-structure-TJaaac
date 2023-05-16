// 1. Create an array named numbers and store 5 number values in it
let number = [53,98,65,45,9487]
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum = 0;
for (let i = 0; i < number.length; i++){
    sum += number[i];
}
//3. Calculate the average of array items and print it to the console using console.log()
let average = sum/number.length;
console.log(average);
// 4. Find the highest number in the array and print it to the console using console.log()
let biggestNum = number[0];
for (let value of number){
    if (value > biggestNum){
        biggestNumv = value
    }
}
console.log (biggestNum);
// 5. Find the lowest number in the array and print it to the console using console.log()
let smallestNum = number[0];
for(let value of number){
    if (value < smallestNum){
      smallestNum = value;
    }
}
console.log(smallestNum);

// 6. Find the even numbers in the array and print them to the console using console.log()
for (let value of number){
    if(value % 2 == 0){
     console.log(value)
    }
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let value of number){
    if(value % 2 !== 0){
     console.log(value)
    }
}

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let value of number){
    if(value % 5 == 0 ){
        console.log(value)
    }
}
// 9. Log all the element of the array one by one
for (let value of number){
    console.log(value);
}
// 10. Find all the number in the array that is divisible by 3
for(let value of number){
    if(value % 3 == 0 ){
        console.log(value)
    }
}