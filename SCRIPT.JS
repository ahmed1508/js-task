// P1: Print all even numbers from 1 to 10.  

// P2: Print the multiplication table of Prompted value, this value will be taken by prompt (up to 10 times).  

// P3: Find and print the sum of numbers from value a to value b , these values will be taken by prompt.

// P4: Print numbers from 10 down to 1.   

// P5: Print the square of prompted number.

// P6: Count and print how many even and odd numbers exist between Prompted value 1 and Prompted value 2.    

// P7: Calculate the factorial of a prompted number.  

// P8: Print a triangle of stars using loops.  

// P9: Print all prime numbers between prompted value 1 and prompted value 2  

// P10: Print all Odd numbers from prompted value 1 to prompted value 2 .

// for(
//     let i=2; i<=10; i += 2
    
// ){
//     console.log(i);
    
// }
// --------------------------------------------
// let table = Number(prompt("Enter table number"))
// for (let i = 1; i < 11 ; i++){
//     console.log(`${table} x ${i} = ${table * i}`);
// }
// --------------------------------------------
// let a = Number(prompt("Enter value a"))
// let b = Number(prompt("Enter value b"))
// let sum = 0
// for (let i = a; i <= b; i++){
//     sum += i
// }
// console.log(`The sum from ${a} to ${b} is ${sum}`);
//---------------------------------------------
// for (let i = 10; i >=1; i--)
// {
//     console.log(i);
    
// }
//---------------------------------------------
// let i = Number(prompt("Enter the number to find its square"));
// let square = i * i;
// console.log(`The square of ${i} is ${square}`);
//---------------------------------------------
// let a = Number(prompt("Enter starting value"));
// let b = Number(prompt("Enter ending value"));
// let even = 0;
// let odd = 0;
// for (let i = a; i <= b; i++){
//     if (i % 2 === 0){
//         even++;
//     } else {
//         odd++;
//     }
// }
// console.log(`Between ${a} and ${b}, Even numbers: ${even}, Odd numbers: ${odd}`);
//--------------------------------------------
// let num = Number(prompt("Enter a number to find its factorial"));
// let factorial = 1
// for (let i = 1; i <= num; i++){
//     factorial *= i
// }
// console.log(`The factorial of ${num} is ${factorial}`);
//---------------------------------------------         
// let rows = Number(prompt("Enter number of rows: "));

// for (let i = 1; i <= rows; i++) {
//   console.log("*".repeat(i));
// }
//---------------------------------------------
// cannot solve this problem
//---------------------------------------------
// let a = Number(prompt("Enter starting value"));
// let b = Number(prompt("Enter ending value"));
// for (let i = a; i <= b; i++){  
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }