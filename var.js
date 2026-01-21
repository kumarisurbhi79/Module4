// variable
//easy

// let Name = "surbhi";
// console.log(Name);

// let age = 43;
// console.log(age);

// let x = 5;
// let y = 10;
// sum = x+y;
// console.log(sum);

// let isstudent = true;
// console.log(isstudent);

// let name = "Surbhi", age = 20, isStudent = true;
// console.log(name, age, isStudent);

// let myVar;  // value assign nahi ki
// console.log(myVar);

// let city = "Patna";
// console.log(city);

// let example
// let age = 20;
// console.log(age);  // 20
// age = 21;           // value change kar sakte ho
// console.log(age);  // 21

// // const example
// const country = "India";
// console.log(country); // India
// country = "USA";   // Error! const me value change nahi hoti


// let num = 5;
// console.log(num * 2);  // 10


// var example
// var x = 10;
// if(true){
//     var x = 20;  // same variable ko block ke andar overwrite kar diya
//     console.log("Inside if with var:", x); // 20
// }
// console.log("Outside if with var:", x); // 20 (change ho gaya)

// // let example
// let y = 10;
// if(true){
//     let y = 20;  // block ke andar naya variable ban gaya
//     console.log("Inside if with let:", y); // 20
// }
// console.log("Outside if with let:", y); // 10 (original variable safe)


//medium

// let name = "Surbhi";
// console.log("Length of name:", name.length);


// let num = Number(prompt("Enter a number:"));

// let num = 5;
// if(num > 0){
//     console.log("Positive number");
// } else if(num < 0){
//     console.log("Negative number");
// } else {
//     console.log("Number is zero");
// }


// let marks = 40;   // yaha apne marks daalo

// if (marks >= 33) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }


// let num1 = 20;
// let num2 = 30;

// let average = (num1 + num2) / 2;
// console.log("Average:", average);


// let sentence = "NavGurukul is a great place to learn ";
// let words = sentence.split(" ");   // space ke basis par tod diya
// console.log("Word Count:", words.length);


// {
//     let x = 50;  
//     console.log("Inside block:", x); // Accessible
// }

// console.log("Outside block:", x); //  Error: x is not defined



// let score = 50;
// score += 20;   // same as: score = score + 20
// console.log("Updated Score:", score);


// let str = "123";
// let num1 = Number(str);
// let num2 = parseInt(str);
// let num3 = +str;
// console.log(num1, num2, num3); // sabhi ka result: 123
// console.log(typeof num1); // "number"



// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;
// console.log("a =", a, ", b =", b);



//hard

// console.log(a);  // Output: undefined (kyunki sirf declare hua hai)
// var a = 10;
// console.log(a);  // Output: 10


// let celsius = 25;
// let fahrenheit = (celsius * 9/5) + 32;

// console.log(celsius + "°C = " + fahrenheit + "°F");


// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log("First Fruit:", fruits[0]);
// console.log("Second Fruit:", fruits[1]);
// console.log("All Fruits:", fruits);


// let name = "Surbhi";
// let age = 21;

// let sentence = "My name is " + name + " and I am " + age + " years old.";
// console.log(sentence);



//conditional statement
//hard

// let n = 3;
// if(n<0){
//     console.log("negative number")
// }else{
//     console.log("positive number")
// }


// let n = 4;
// if(n%2==0){
//     console.log("even number")
// }else{
//     console.log("odd number")
// }


// let age = 18;
// if(age<18){
//     console.log("minor")
// }else{
//     console.log("adult")
// }

// let a = 3;
// let b = 5;
// if(a<b){
//     console.log("b is greater")
// }else{
//     console.log("greater is a ")
// }

// let tempertaure = 10;
// if(tempertaure>30){
//     console.log("hot day")
// }else{
//     console.log("cold")
// }


// let password = "admin123";
// let userinput = "admin123";
// if(password==userinput){
//     console.log("access granted")
// }else{
//     console.log("access defined")
// }


// let a = 3;
// let b = 6;
// let c = 5;
// if(a<b && a<c){
//     console.log("a is smallest")
// }else if(b<c && b<a){
//     console.log("b is smallest")
// }else{
//     console.group("c is smallest")
// }


// let year = 2000;
// if(year%4===0 && year%100!==0 || year%400===0){
//     console.log("leapyear")
// }else{
//     console.log("noleapyear")
// }


// let marks = 45;
// if(marks>=90){
//     console.log("a grade")
// }else{
//     console.log("b grade")
// }


// let num = 40;
// if(num%5==0){
//     console.log("yes");
// }else{
//     console.log("no")
// }

//medium


// let dayNumber = 3; 

// if (dayNumber === 1) {
//     console.log("Sunday");
// } else if (dayNumber === 2) {
//     console.log("Monday");
// } else if (dayNumber === 3) {
//     console.log("Tuesday");
// } else if (dayNumber === 4) {
//     console.log("Wednesday");
// } else if (dayNumber === 5) {
//     console.log("Thursday");
// } else if (dayNumber === 6) {
//     console.log("Friday");
// } else if (dayNumber === 7) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid day number");
// }



// let units = 250;
// let bill = 0;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + (units - 100) * 7;
// } else {
//     bill = (100 * 5) + (100 * 7) + (units - 200) * 10; //1700
// }

// console.log("Total Bill: " + bill);


//Triangle Validity Check
//Triangle tabhi valid hota hai jab sum of any two sides > third side ho.

// let a = 5;
// let b = 6;
// let c = 10;

// if (a + b > c && a + c > b && b + c > a) {
//     console.log("Triangle valid hai");
// } else {
//     console.log("Triangle valid nahi hai");
// }


// let balence = 5000;
// let withdrawamount = 3000;

// if(withdrawamount <= balence){
//     balence = balence - withdrawamount;
//     console.log("withdraw successful");
//     console.log("remaining balence is:", balence);
// }else{
//     console.log("insufficient balence")
// }


// let marks = 82;
// if(marks>=90){
//     console.log("a grade")
// }else if(marks>=75){
// console.log("Grade: B");
// } else if (marks >= 50) {
//     console.log("Grade: C");
// } else if (marks >= 33) {
//     console.log("Grade: D");
// } else {
//     console.log("Fail");
// }


// let light = "red"; 

// if (light === "red") {
//     console.log("Stop");
// } else if (light === "yellow") {
//     console.log("Ready to go");
// } else if (light === "green") {
//     console.log("Go");
// } else {
//     console.log("Invalid color");
// }


// let num1 = 10;
// let num2 = 20;

// if (num1 === num2) {
//     console.log("Numbers are equal");
// } else {
//     console.log("Numbers are not equal");
// }



// let age = 17;  

// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }



// let bill = 600;   // total bill amount
// let discount = 0;
// let finalAmount = bill;

// if (bill >= 500) {
//     discount = bill * 0.20;         // 20% discount
//     finalAmount = bill - discount;  // final amount after discount
// }

// console.log("Original Bill: ₹" + bill);
// console.log("Discount: ₹" + discount);
// console.log("Final Amount to Pay: ₹" + finalAmount);



//hard

// let a1 = 10, b1 = 25, c1 = 15;
// let largest;

// if (a1 >= b1 && a1 >= c1) {
//   largest = a1;
// } else if (b1 >= a1 && b1 >= c1) {
//   largest = b1;
// } else {
//   largest = c1;
// }
// console.log("Largest:", largest);


// let weight = 68;   // kg
// let height = 1.75; // meter

// let bmi = weight / (height * height);

// if (bmi < 18.5) {
//   console.log("Underweight");
// } else if (bmi < 24.9) {
//   console.log("Normal");
// } else if (bmi < 29.9) {
//   console.log("Overweight");
// } else {
//   console.log("Obese");
// }


// let age = 20;

// if (age >= 0 && age <= 12) {
//   console.log("Child");
// } else if (age <= 17) {
//   console.log("Teen");
// } else if (age <= 59) {
//   console.log("Adult");
// } else if (age >= 60) {
//   console.log("Senior");
// } else {
//   console.log("Invalid age");
// }
// // Example: age = 20 => "Adult"


// let a = 12, b = 4;
// let op = "/"; // "+", "-", "*", "/"

// if (op === "+") {
//   console.log(a + b);
// } else if (op === "-") {
//   console.log(a - b);
// } else if (op === "*") {
//   console.log(a * b);
// } else if (op === "/") {
//   if (b !== 0) console.log(a / b);
//   else console.log("Error: Division by zero");
// } else {
//   console.log("Invalid operator");
// }
// // Example: op="/" => prints 3



// let marks = 82;
// let result;

// if (marks >= 90) {
//   result = "Full scholarship";
// } else if (marks >= 75) {
//   result = "50% scholarship";
// } else if (marks >= 60) {
//   result = "25% scholarship";
// } else {
//   result = "No scholarship";
// }

// console.log(result);
// Example: marks = 82 => "50% scholarship"



//operator
//easy

// let a = 20;
// let b = 6;

// console.log("Addition (+): " + (a + b));       // 20 + 6 = 26
// console.log("Subtraction (-): " + (a - b));    // 20 - 6 = 14
// console.log("Multiplication (*): " + (a * b)); // 20 * 6 = 120
// console.log("Division (/): " + (a / b));       // 20 / 6 = 3.333...




// let x = 20;
// let y = 6;
// console.log("Modulus (%): " + (x % y));   // 20 % 6 = 2
// //or
// let x = 20, y = 6;
// console.log(x % y);   // 2


// let x = 5;

// console.log(x++); // 5 (pehle print, phir +1)
// console.log(x);   // 6

// console.log(++x); // 7 (pehle +1, phir print)

// console.log(x--); // 7 (pehle print, phir -1)
// console.log(x);   // 6

// console.log(--x); // 5 (pehle -1, phir print)




// console.log(2 ** 3); // 8   (2³)
// console.log(5 ** 2); // 25  (5²)




// let first = "Hello";
// let second = "World";

// console.log(first + " " + second); // Hello World


// console.log(5 < 10);    // true
// console.log(10 > 20);   // false

// console.log(5 == "5");  // true   (sirf value check karta hai, type nahi)
// console.log(5 === "5"); // false  (value same hai, lekin type alag hai: number vs string)


// let marks = 75;
// let result = (marks >= 33) ? "Pass" : "Fail";
// console.log(result);


// let total = 50;
// total += 20;  // same as: total = total + 20
// console.log(total);  // 70



//medium

// let a = 10;
// let b = 5;
// let operator = "+";  // try "+", "-", "*", "/"

// if (operator === "+") {
//     console.log(a + b);
// } else if (operator === "-") {
//     console.log(a - b);
// } else if (operator === "*") {
//     console.log(a * b);
// } else if (operator === "/") {
//     console.log(a / b);
// } else {
//     console.log("Invalid operator");
// }



// console.log(5 == "5");   // true   (sirf value check, type convert ho jata hai)
// console.log(5 === "5");  // false  (value same hai, lekin type alag: number vs string)

// console.log(null == undefined);  // true
// console.log(null === undefined); // false



// console.log(null + 1);      // 1
// console.log(undefined + 1); // NaN


// let a = 20, b = 6;
// console.log("Remainder:", a % b);  // 20 % 6 = 2



// let x = 10;
// x *= 2;   // same as: x = x * 2
// console.log(x);  // 20

// x /= 4;   // same as: x = x / 4
// console.log(x);  // 5


// let isRaining = false;

// if (!isRaining) {
//     console.log("You can go outside");
// } else {
//     console.log("Take an umbrella ☔");
// }



// let a = 25, b = 40;
// let largest = (a > b) ? a : b;
// console.log("Largest:", largest);  // 40




// console.log("apple" < "banana");   // true
// console.log("cat" > "bat");        // true
// console.log("Zoo" < "apple");      // true (Z < a, kyunki capital letters ke codes chhote hote hain)



// let x = 5;

// // Pre-increment (++x) → pehle value badhao, fir use karo
// console.log(++x);  // 6 (pehle 5+1, fir print)

// // Post-increment (x++) → pehle use karo, fir value badhao
// let y = 5;
// console.log(y++);  // 5 (pehle print, fir +1 hota hai)
// console.log(y);    // 6



//hard

// console.log(3 + 4 * 2);    // 11   -> * pehle hota hai (4*2=8) phir + => 3+8=11
// console.log((3 + 4) * 2);  // 14   -> parentheses force kar dete hain pehle +, phir *


// console.log("5" * 2); // 10
// console.log("5" + 2); // "52"   (+ with string => concatenation)


// //nesterd ternary operator
// let marks = 85;

// let grade = (marks >= 90) ? "A+" 
//            : (marks >= 75) ? "A" 
//            : (marks >= 50) ? "B" 
//            : "Fail";

// console.log("Grade:", grade);  // A




// console.log(5 & 3);  // 1   (0101 & 0011 = 0001)
// console.log(5 | 3);  // 7   (0101 | 0011 = 0111)



// console.log("5" == 5);   // true   (value compare karta hai, type convert kar deta hai)
// console.log("5" === 5);  // false  (value same hai, lekin type alag: string vs number)



// let a = 10, b = 5;

// if ((a + b > 12) && (a - b < 10)) {
//     console.log("Condition true");
// } else {
//     console.log("Condition false");
// }



// let n=20;
// let count=0;
// for(let i=1; i<=n; i++){
//     // console.log(i);
//     count++
// }
// console.log(count)



// let no =30;
// let pass = no>=40 ?"pass":"fail";
// console.log(pass)

// let arr=[1,2,3,4,5,7];
// for(let i=1; i<=7; i++){
//   if(!arr.includes(i)){
//       console.log(i)
//   }
// }

// a={a:12,b:13,c:3}
// console.log(a.b);


// let marks = 50;

// if (marks >= 60) {             // Outer if check
//     if (marks >= 75) {         // Inner if check
//         console.log("Good grade");
//     } else {
//         console.log("Average grade");
//     }
// } else {
//     console.log("Fail");       
// }

// let age = 20;

// if (age >= 18) {
//     if (age >= 60) {
//         console.log("Senior Adult");
//     } else {
//         console.log("Adult");
//     }
// } else {
//     console.log("Minor");
// }




// let age = 3;
// let pass =age>=18 ? "adult":"minor";
// console.log(pass)