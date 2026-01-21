// let n=84;
// let sum=0;
// while(n>0){
//     r=n%10;
//     sum +=r
//     n=Math.floor(n/10)
// }
// console.log(sum)
// if((sum%2==0) && (sum%3==0)){
//     console.log("true");
// }else{
// console.log("false");
// }


// let n=50;
// let count=0;
// for(let i=0; i<=n; i++){
//     if((i%3==0 || i%5==0 )&& !(i%3==0 && i%5==0)){
//         count++
//     }
// }
// console.log(count)


// let arr =[12, 18, 25, 60, 51, 42]
// let count=0;
// for(let i=0; i<=arr.length; i++){
// let num =arr[i];
// if(num%2==0 && num%3==0 ||num>50){
//     count +=1;
// }
// }
// console.log(count);


// let str="a1b2c3D4@#ef";
// let count=0;
// for(let i=0; i<str.length; i++){
//     let num=str.charCodeAt(i);
//  if(num>=97 && num<=122){
//         count++;
//     }
// }

// console.log(count);


// let str="a1b2c3D4@#ef";
// let count=0;
// for(let i=0; i<str.length; i++){
//     let num=str.charCodeAt(i);
//     if(num>=65 && num<=90){
//         count++;
//     }else if(num>=97 && num<=122){
//         count++;
//     }
// }

// console.log(count);


// let arr=[3, 7, 10, 15, 20];
// let num=true;
// for(let i=1; i<arr.length; i++){
//     if(arr[i]<=arr[i-1]){
//       num=false;
//     }
// }
//   console.log(num)



// let num =12;
// let score =num;//Taaki hum score ki value ko change kar sakein bina num ko change kiye.
// if(num%2===0  && num%3===0){
//     score = num*2;
// }else if(num%2===0){
//      score = num +10;
// }else if(num%3===0){
//     score = num-5;
// }
// console.log(score)



// let n = 100;
// let count =0;
// for(let i=1; i<=n; i++){
//     if(i%4===0){
//         count++
//     }
// }
// console.log(count)

// let arr = [5, 8, 11, 13, 17, 19];



// let n = 5;
// let x;
// if(n===0){
//     console.log(-1);
// }else{
//     x=Math.floor(32/n);
//     if(x===0){
//         console.log("to low");
//     }else{
//         console.log("x =",x);
//     }
// }

// let n = 12;
// let factor = 1;
// for(let i=1; i<=n; i++){
//     factor *=i;
// }
// console.log(factor)


    // let n=5;
    // let x;
    // n===0 ? console.log(-1):
    // (
    //     x=Math.floor(32/n),
    //     x===0 ? console.log("to low"):
    //     console.log(x)
    // )

//     let count = 0;
// for (let i = 1; i <= 100; i++) {
//     let temp=i;
//     let product =1;
//     while(temp>0){
//         let digit =temp%10;
//         product *=digit;
//         temp =Math.floor(temp/10)
//     }
//     if (product % 4 === 0) {
//         count++;
//     }
// }
// console.log(count); 


// let num = [5, 8, 11, 13, 17, 19];
// let count = 0;
// for(let i=0; i<num.length; i++){
//     for(let j=i+1; j<num.length; j++){
//         if(Math.abs(num[i]-num[j])<=3){
//             count++
//         }
//     }
// }
// console.log(count)



// let n = -35;

// if(n > 100 || n < 0){
//     console.log("invalid number");
// }else if(n >= 90){
//     console.log("A+ grade");
// }else if(n >= 80){
//     console.log("A grade");
// }else if(n >= 70){
//     console.log("B grade");
// }else if(n >= 60){
//     console.log("C grade");
// }else if(n >= 33){
//     console.log("D grade");
// }else{
//     console.log("Fail");
// }


// let n = -35;
// let grade =
// (n>100 || n<0) ? "invalid no":
// (n>=90) ? "grade A+":
// (n>=80) ? "grade A":
// (n>=70) ? "grade B":
// (n>=60) ? "grade C":
// (n>=33) ? "grade D":"fail";
// console.log(grade);




// for(let n=1; n<=50; n++){
//     let count = 0;
// for(let i=1; i<=n; i++){
//     if(n%i===0){
//         count++;
//     }
// }
// if(count===2){
//     console.log(n);
// }
// }


// let n=13;
// let bin="";
// while(n>0){
//     r = n%2;
//     bin =r+bin;
//     n=Math.floor(n/2);
// }
// console.log(bin);


// let n = 10;
// let fib=[0,1];
// for(let i=2; i<n; i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib);



// let arr=[2,4,6,3,2,1]
// for(let i=1; i<arr.length-1; i++){
//     let rsum=0;
//     let lsum=0
//     for(let l=0; l<i; l++){
//         lsum +=arr[l];
//     }
//         for(let r=i+1; r<arr.length; r++){
//             rsum +=arr[r];
//         }
//             if(rsum===lsum){
//                 console.log("yes")
//             }else{
//                 console.log("no")
           
//         }
//     }


// let a1 = [1,2,3,4];
// let a2 = [2,3,41];
// let result = [];
// for(let i=0; i<a1.length; i++){
//     if(a2.includes(a1[i])){
//         result.push(a1[i]);
//     }
// }
// console.log(result);


// let a1 = [1,2,3,4];
// let a2 = [2,3,41];
// let result = [];
// for(let i=0; i<a1.length; i++){
//     for(let j=0; j<a2.length; j++){
//         if(a1[i]===a2[j]){
//             result.push(a1[i])
//         }
//     }
// }
// console.log(result)




// let n = 35;
// if(n>=90){
//     console.log("A+ grede");
// }else if(n>=80){
//     console.log("A grade");
// }else if(n>=70){
//     console.log("B grade");
// }else if(n>=60){
//     console.log("C grade");
// }else if(n>=33){
//     console.log("D grade");
// }else{
//     console.log("Fail")
// }


// let n = 35;
// let grade =
// (n>=90) ? "A grade":
// (n>=80) ? "B grade":
// (n>=70) ? "C grade":
// (n>=60) ? "D grade":
// (n>=33) ? "E grade":"Fail";
// console.log(grade);


// let a = 3;
// let b = 4;
// let c = 3;
// if(a===b && b===c){
//     console.log("Equilateral triangle");
// }else if(a===b || b===c || c===a){
//     console.log("Isosceles triangle");
// }else{
//     console.log("Scalene triangle");
// }



// let units = 300;
// let bill =0;
// if(units<=100){
//     bill = units * 5;
// }else if(units<=200){
//     bill = units *7;
// }else{
//     bill = units *10;
// }
// bill +=50;
// console.log(bill);



// let cp = 200;
// let sp = 100;
// if(sp>cp){
//     let profit = sp-cp;
//   let percentage =(profit/cp)*100;
//     console.log(`profit ${percentage}%`);
// }else if(cp>sp){
//     let loss =cp - sp;
//     let percentage=(loss/cp)*100;
//         console.log(`loss ${percentage}%`);
// }else{
//     console.log("no profit no loss");
// }

// let marks = 85;
// if(marks>75){
//     console.log("Distinction");
// }else if(marks>50 && marks<=75){
//     console.log("pass");
// }else if(marks<50){
//     console.log("fail");
// }else{
//     console.log("invalid marks");
// }



