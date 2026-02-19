// let a=23 , b=3;
// let oprator = "*";
// switch(oprator){
//     case "+":
//         console.log(a+b);
//         break;
//         case "*":
//             console.log(a*b)
//             break;
// }



// let amount = 750;
// let discount;
// switch(true){
//     case(amount>=1000):
//     discount = "30% discount"
//     break;

// }


// let n=5;
// let i=1;
// while(i<=10){
//     console.log(i)
//     i++
// }


// let i=5;
// while(i>=1){
//     console.log(i)
//     i--
// }


// let no = 232;
// let reverse = 0;
// let number = no;
// while(no>0){
//     let r=no%10;
//     reverse = reverse*10+r
//     no = Math.floor(no/10)
// }
// if(reverse===number){
//     console.log("palin")
// }else{
//     console.log("no")
// }


// let n= 5;
// let fact =1;
// for(let i =1; i<=n; i++){
//     fact *=i
// }
// console.log(fact)



// let n=10;
// let fib=[0,1]
// for(let i=2; i<n; i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib)


// let arr=[2,3,4,5,7]
// let i=0
// let sum =0
// while(i<arr.length){
//     sum +=arr[i]
//     i++
// }
// console.log(sum)





// let arr=[2,3,4,5,7]
// let i=arr.length-1;
// let list =[]
// while(i>=0){
//     list.push(arr[i])
//     i--
// }
// console.log(list)

// let arr =[2,3,4,6,8,8]
// let count =0;
// let i =arr.length-1;
// while(i>=0){
//     console.log(arr[i])
//     count++
//     i--
// }
//   console.log(count)


// let arr =[4];
// let fact=1;
// for(let i=0; i<arr.length; i++){
//     let num =arr[i]
//     for(let j=1; j<=num; j++){
//         fact *=j;
//     }
// }
// console.log(fact)

// let arr=[2]
// for(let i=0; i<arr.length; i++){
//     let n= arr[i]
//     let fib =[0,1];
//     for(let j=2; j<n; j++){
//         fib[j]=fib[j-1]+fib[j-2]
//     }
// console.log(fib)
// }




// let arr = [2,4,5,78,23,90];
// let max = arr[0];
// for(let i =1; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max)


// let arr=[3,6,8,4];
// let min = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min)



// let numbers = [1, 2, 3, 2, 4, 1, 5];
// let uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]




// function addno(a,b){
//     return a+b
// }
// let sum = addno(3,5)
// console.log(sum)


// function reverseno(str){
//     let rev = "";
//     for(let i=str.length-1; i>=0; i--){
//         rev +=str[i]
//     }
//     return rev
// }
// console.log(reverseno("musu"))

// function squr(num){
//     return num*num;
// }
// console.log(squr(8))


// function number(n){
//     let sum =0;
//     for(let i=0; i<=n; i++){
//         sum +=i;
//     }
//     return sum
// }
// console.log(number(3))

// function even(n){
//     if(n%2==0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }console.log(even(9))


// function largest(arr){
//     let lar = arr[0]
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>lar){
//             lar=arr[i]
//         }
//     }
//     return lar
// }
// console.log(largest([3,7,2,9]))


// function factor(n){
//     let fac=1;
//     for(let i=1; i<=n; i++){
//         fac *=i;
//     }
//     return fac
// }
// console.log(factor(3))


// let fabonic=(n)=>{
//     let fib =[0,1];
//     for(let i=2; i<n; i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fabonic(5))



// function primeno(number){
//     if(number<=1){
//         return false
//     }
//     for(let i = 2; i<number; i++){
//         if(number%i==0){
//             return false
//         }
//     }
//     return true;
// }
// console.log(primeno(6))

// function palen(str){
//     let len =str.length
//     for(let i=0; i<len/2; i++){
//         if(str[i]!==str[len-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(palen("musu"))


// function findmax(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(findmax(4,8))


// function findmax(a,b,c){
//     return Math.max(a,b,c)
// }
// console.log(findmax(23,56,45))

// function dubli(arr){
//     return [...new Set(arr)]
// }
// console.log(dubli([1,2,2,3,4,5,4]))



// function positive(arr){
//     let list=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             list.push(arr[i])
//         }
//     }
//     return list
// }
// console.log(positive([-2,3,4,-6,7]))


// let arr=[2,3,5,6,7]
// let list =[]
// let i=arr.length-1
// while(i>=0){
//     list.push(arr[i])
//     i--;
// }
// console.log(list)


// let person ={
//   name:"surbhi",
//   age : 23,
//   city: "delhi"
// }
// let entries=Object.entries(person);
// console.log(entries)
// person.age=25;
// console.log(person)
// let firstkey=Object.keys(person)[0]
// console.log(firstkey)

// let obj1={a:2,b:9}
// let obj2={c:3,d:2}
// let merge={...obj1,...obj2}
// console.log(merge)

// let no ={a:4,b:5,c:8};
// let sum = 0;
// for(let key in no){
//     sum += no[key];
// }
// console.log(sum);

// Nested object me inner value access karo.
// let student = {name: "surbhi",marks:{math:90,eng:64,bio:74}};
// console.log(student.marks)




// let numbersArr = [
//     {a: 2, b: 3},
//     {a: 5, b: 7}
// ];

// let total = 0;
// for(let obj of numbersArr){
//     for(let key in obj){
//         total += obj[key];
//     }
// }
// console.log(total); 

// let count =0;
// for(let key in dic){
//     count++
// }
// console.log(count)




//Alll Methods Question
// let str ="musu singh";
// console.log(str[3])
// console.log(str.toLocaleUpperCase())
// console.log(str.trim())
// console.log(str.charAt(3))
// console.log(str.includes("heloo"))
// console.log(str.startsWith("heloo"))
// console.log(str.endsWith("musu"))
// console.log(str.split(","));
// console.log(str.join(","))
// console.log(str.substring(0,7));
// console.log(str.slice(-6))
// console.log(str.replace("singh","sinha"))
// console.log(str.repeat(10))
// console.log(str.search("singh"))
// let str1="jii"
// let str2="jii"
// console.log(str1.concat(" ",str2))
// console.log(str.indexOf("u"))
// console.log(str.lastIndexOf("m"))
// console.log(str.split("").reverse().join(""));



// let str = "musu"
// for(let i=str.length-1; i>=0; i--){
//      console.log(str[i])
// }

// let str = "muskan"
// let count = 0;
// for(let i =0; i<str.length; i++){
// count++
// }
// console.log(count)



// let str = "madam";
// let reversed = str.split('').reverse().join(''); // string ko reverse kiya

// if(str === reversed){
//     console.log("Palindrome hai");
// } else {
//     console.log("Palindrome nahi hai");
// }



//date 

// let now = new Date()
// console.log(now)

// let birthday = 2002;
// let age = new Date().getFullYear()-birthday;
// console.log(age)

// let event = new Date("2025-12-24")
// console.log(event.toDateString())

// let date = new Date(2025,2,3);
// let month =["jan","fab","mar","ap"]
// console.log(month[date.getMonth()])



// let a=1234567
// let r=0;
// r=a%100
// console.log(Math.floor(r/10));



// let arr=[
//     {a:23},
//     {a:23},
//     {a:12},
//     {a:21}
// ]
// let sum=0;
// for(let key in arr){
//     if(arr[key].a>12){
//     sum=sum+arr[key].a
// }
// }
// console.log(sum)


//important
//global
// const x =10"23";
// console.log(x)
// function test(){
//     console.log(x,"khushboo");
// }
// test()
// console.log(x,"neha");



// function localvar(){
//     let y=20;
//     console.log(y);

// }
// localvar();



// if(true){
//     let z=30;
//     const a=40;
//     console.log(z,a);
// }

// if(true){
//     var x=50;
//     let y=60
// }
// console.log(x)
// console.log(y) error

// function greet(){
//     console.log("hello")
// }
// greet()

// let greet = function(){
//     console.log("hello")
// }
// greet()


// let add =(a,b)=>a+b;
//     console.log(add(5,2))


// let arr=[3,5,6]
// // for(let i=0; i<arr.length; i++){
//     console.log(arr);
// }


// function isPalindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome("madam")); // true


// let a=5, b=10;
// [a,b] = [b,a];
// console.log(a,b);

// function sumArray(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// let numbers = [1,2,3,4,5];
// console.log(sumArray(numbers)); // 15


// function reverseArray(arr){
//     let rev = [];
//     for(let i=arr.length-1; i>=0; i--){
//         rev.push(arr[i]);
//     }
//     return rev;
// }

// console.log(reverseArray([1,2,3,4])); // [4,3,2,1]



// function avgArray(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(avgArray([10,20,30,40])); // 25




// function countEvenOdd(arr){
//     let even = 0, odd = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 0) even++;
//         else odd++;
//     }
//     return {even, odd};
// }

// console.log(countEvenOdd([1,2,3,4,5])); // {even:2, odd:3}


// let char = 'a';
// switch(char.toLowerCase()){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
// }


// function getDayName(num){
//     switch(num){
//         case 0: return "Sunday";
//         case 1: return "Monday";
//         case 2: return "Tuesday";
//         case 3: return "Wednesday";
//         case 4: return "Thursday";
//         case 5: return "Friday";
//         case 6: return "Saturday";
//         default: return "Invalid day";
//     }
// }

// console.log(getDayName(4)); // Thursday


// function calculate(a, b, operator){
//     switch(operator){
//         case '+': return a + b;
//         case '-': return a - b;
//         case '*': return a * b;
//         case '/': return a / b;
//         default: return "Invalid operator";
//     }
// }

// console.log(calculate(10,5,'*')); // 50



// let year = 2024;
// switch(true){
//     case (year % 400 === 0):
//     case (year % 4 === 0 && year % 100 !== 0):
//         console.log("Leap Year");
//         break;
//     default:
//         console.log("Not a Leap Year");
// }


// let str1 = "Hello";
// let str2 = "World";
// console.log(str1 + " " + str2); // Hello World



// let a = 5, b = 10;
// a = a + b; // 15
// b = a - b; // 5
// a = a - b; // 10
// console.log(a, b); // 10 5











// let n = 4;
// let number = 2345;
// let numberstring = number.toString();
// let small = Math.pow(10,n-1);
// let large = Math.pow(10,n)-1;
// if(n(numberstring)>small && n(numberstring)<large){
//     console.log("yes")
// }else{
//     console.log("no")
// }


// let a = 12;
// const a = 20;
// console.log(a)

// var a = 12;
// let a = 20;
// console.log(a)

// let a="1234"*12+"30";
// console.log(a)


// function dubli(arr){
//     return [...new Set(arr)]
// }
// console.log(dubli([1,2,2,3,4,5,4]))


// let arr = [1,3,5,4,6,8,3,1,5]
// console.log([...new Set(arr)]);



// let a = "surbhi";
// let list = [];
// for(let i=0; i<a.length; i++){
//     list.push(a[i]);
// }
// console.log(list)


// let n=10;
// let a =[];
// for(let i=1; i<=n; i++){
//     a.push(i)
// }
// console.log(a)


// let arr=["s","u","r"]
// let vowels =[];
// let cheak = ["a","e","i","o","u"]
// for(let char of arr){
//     if(cheak.includes(char)){
//         vowels.push(char)
//     }
// }
// console.log(vowels)




// let arr = [10, 20, 30, 40, 50];
// let p = [];
// for(let i=0; i<arr.length; i=i+2){
//     p.push(arr[i])
// }
// // console.log(p);
// console.log(p.join(" "));


// let arr = [-5, 1, 4, 2, 12];
// let p = [];
// for(let i=0; i<arr.length; i=i+2){
//     p.push(arr[i])
// }
// console.log(p.join(" "));


// function skipvalue(arr){
//     let p = [];
//     for(let i=0; i<arr.length; i=i+2){
//         p.push(arr[i])
//     }
//     return p;
// }
// const arr = [-5, 1, 4, 2, 12];
// const p = skipvalue(arr);
// console.log(p.join(" "));



// let arr = [4, 2, 9, 7, 5];
// let target = 3;
// let found = false;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]===target){
//         console.log(i);
//         found = true;
//         break
//     }
// }
// if(!found){
//     console.log("not found");
// }



// let arr = [4, 2, 9, 7, 5];
// let target = 3;
// let found = false;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]===target){
//         found = true;
//         break;
//     }
// }
// console.log(found);


// let arr = [1, 2, 3, 4];
// let target = 3;
// let s = arr.length;
// for(let i=0; i<s; i++){
//     if(arr[i]===target){
//         s = i;
//         break;
//     }
// }
// console.log(s);


// let arr = [10 , 20 , 4];
// let max = arr[0];

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max);


// let arr = [10 , 20 , 4];
// console.log(Math.max(...arr));


// function findmax(arr){
//     let max = arr[0];

//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max;
// }
// let arr = [10 , 20 , 4];
// console.log(findmax(arr));



// let arr = [12, 35, 1, 10, 34, 1];
// let p = arr.length;
// let smax = -Infinity;

// for(let i = 0 ; i<p; i++){
//     if(arr[i]>smax && arr[i]<Math.max(...arr)){
//         smax = arr[i];
//     }                   
// }
// console.log(smax);




// let  arr = [2, 2, 2, 2, 2];
// let dubliarr = [];

// for(let i = 0; i<arr.length; i++){
//     if(!dubliarr.includes(arr[i])){
//         dubliarr.push(arr[i])
//     }
// }
// console.log(dubliarr);




// let arr = [1 , 2 ,3];
// let p = arr.length;

// for(let i = 0; i<p; i++){
//     for(let j =i; j<p; j++){
//         let subarr = [];
//         for(let k = i; k<=j; k++){
//          subarr.push(arr[k]);
//         }
//         console.log(subarr);
//     }

// }




// let arr = [1, 4, 3, 2, 5, 6];
// arr.reverse();
// console.log(arr);


// let arr = [1, 4, 3, 2, 5, 6];
// arr.sort((a,b) => b - a);
// console.log(arr);



// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// let temp = [];

// for (let i = n - 1; i >= 0; i--) {
//     temp.push(arr[i]);
// }
// arr = temp; 
// console.log(arr); 



// let arr = [1,5,3,4,5,6]
// let arr = [1,2,3,4,5,6]
// let sort = true;
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i]>arr[i+1]){
//         sort = false;
//         break;
//     }
// }
// console.log(sort);









