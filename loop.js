// let a=5
// let b=6
// let temp=a
// a=b
// b=temp
// console.log(a,b)


// let year=2023
// if(year%4===0 && year%100!==0 || year%400===0){
//     console.log("leapyear")
// }else{
//     console.log("npleapyear")
// }


// let n = 8;
// if(n>0){
//     console.log("positive")
// }else if(n==0){
//     console.log("zero")
// }else{
//     console.log("n")
// }

// let n=234;
// let reverse=0
// while(n>0){
//     r =n%10;
//     reverse=reverse*10+r
//     n=Math.floor(n/10)
// }
// console.log(reverse)


// let n=745578
// let count =0
// while(n>0){
//     n=Math.floor(n/10);
//     count++
// }
// console.log(count);



// let n=821;
// let sum = 0;
// while(n>0){
//     r=n%10
//     sum +=r
//     n=math.floor(n/10)
// }
// console.log(sum);


// for(let i=1; i<=10; i++){
//     console.log(i);
    
// }

// let n=10;
// let i = 1;
// while(i<=10){
//     console.log(n*i)
//     i++
// }



// let n=20;
// let i=0;
// let sum=0
// while(i<=n){
//     sum +=i
//     i++
// }
//  console.log(sum)


// let n  = 100;
// let i = 1;

// while(i <= n){
//     if(i % 2 === 0){   
//         console.log(i);
//     }
//     i++;
// }




// let n= 39;
// let sum = 0
// let i =0
// while(i<=n){
//     sum +=i
//     i++
// }
// console.log(sum)






// let n=20;
// let i=0;
// let sum=0;
// while(i<=n){
//     if(i%2==0){
//         sum +=i
//         console.log(i)
//     }
//     i++
// }


//loop
//easy


// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


// let i = 1;
// while (i <= 5) {
//   console.log("Count:", i);
//   i++;
// }


// let j = 1;
// do {
//   console.log("Number:", j);
//   j++;
// } while (j <= 5);



// let fruits = ["Apple", "Banana", "Mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }


// let str = "Hello";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }


// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(i=${i}, j=${j});
//   }
// }


// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;  
//   console.log(i);
// }
// // Output: 1 2 3 4


// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;  
//   console.log(i);
// }
// // Output: 1 2 3 4 6 7 8 9 10


// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }


// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }



//medium

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("Sum:", sum); // 5050



// let num = 7;
// for (let i = 1; i <= 10; i++) {
//   console.log(num*i);
// }


// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }


// let colors = ["Red", "Green", "Blue"];

// for (let color of colors) {
//   console.log(color);
// }


// let arr = [12, 45, 7, 89, 23];
// let max = arr[0];

// for (let num of arr) {
//   if (num > max) {
//     max = num;
//   }
// }
// console.log("Max:", max);


// let arr2 = [12, 45, 7, 89, 23];
// let min = arr2[0];

// for (let num of arr2) {
//   if (num < min) {
//     min = num;
//   }
// }
// console.log("Min:", min);


// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


//table
// for(let i = 1; i<=10;i++){
//   r= i*2;
//   console.log(r)
// }
//


// let n= 123;
// count =0;
// while(n>0){
//   r= n%10;
// count = count*10+r;
// n= Math.floor(n/10)

// }
// console.log(count)
// //reverse



// let n = 123;
// let sum = 0;

// while (n > 0) {
//   let r = n % 10;
//   sum += r;         // har digit add
//   n = Math.floor(n / 10);
// }

// console.log(sum);
// 1+2+3 = 6


// let n = 98765;
// let count = 0;
// while (n > 0) {
//   n = Math.floor(n / 10);
//   count++;
// }
// console.log(count);
// // 98765 => 5 digits




//hard


// let n = 10; // terms
// let a = 0, b = 1;

// console.log("Fibonacci:");
// for (let i = 1; i <= n; i++) {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }


// let rows = 5;

// for (let i = 1; i <= rows; i++) {
//   let space = " ".repeat(rows - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(space + stars);
// }
//     *
//    ***
//   *****
//  *******
// *********


// let nums = [1, 2, 3, 4, 5, 6];
// let evenSum = 0, oddSum = 0;

// for (let n of nums) {
//   if (n % 2 === 0) {
//     evenSum += n;
//   } else {
//     oddSum += n;
//   }
// }
// console.log("Even Sum:", evenSum); // 12
// console.log("Odd Sum:", oddSum);   // 9


// let no = 232;
// let reverse=0;
// let number = no;
// while(no>0){
//     let r = no%10;
//     reverse=reverse*10+r
//     n = Math.floor(no/10)
// }
// if(reverse===number){
//     console.log("palin")
// }else{
//     console.log("no")
// }


// let n=5;
// let fact = 1;
// for(let i = 1; i<=n; i++){
//     fact *=i;
// }
// console.log(fact)


// let n = 5;
// let a=0 , b=1;
// for(let i =1; i<=n; i++){
//     console.log(a)
//     let next = a+b;
//     a=b;
//     b=next
// }