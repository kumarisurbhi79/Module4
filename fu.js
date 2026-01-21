//function

// function addno(a,b){
//     return  a+b
// }
// let sum = addno(2,3)
// console.log(sum)


// function reverseno(str){
//     let reverse ="";
//     for(let i=str.length-1; i>=0; i--){
//         reverse +=str[i]
//     }
//     return reverse;
// }
// console.log(reverseno("musu"))


// function squre(num){
//     return num*num
// }
// console.log(squre(4))


// function number(n){
//     let sum = 0;
//     for(let i=0; i<=n; i++){
//         sum +=i
//     }
//     return sum
// }
// console.log(number(6))


// function evenodd(n){
// if(n%2==0){
//     return "even"
// }else{
//     return "odd"
// }
// }
// console.log(evenodd(8))


// function largestno(arr){
//     let largest = arr[0];
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//     return largest;
// }
// console.log(largestno([4,6,8,2,5]))

// function factor(n){
//     let fac=1;
//     for(let i=1; i<=n; i++){
//         fac *=i;
//     }
//     return fac
// }
// console.log(factor(3))

// function fabonic(n){
//     let fib =[0,1]
//     for(let i=2; i<n; i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fabonic(4))


// function primeno(number){
//     if(number<=1){
//         return false;
//     }
//     for(let i=2; i<number; i++){
//         if(number%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeno(7))


// function palen(str) {
//     let len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true; 
// }
// console.log(palen("musu"));


// function arrave(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum +=arr[i]
//     }
//     let ave=sum/arr.length
//     return ave;
// }
// let number=[2,4,2,3]
// console.log(arrave(number));         






// function findmax(a,b){
//     if(a>b){
//         return a;
//     }else{
//         return b;
//     }
    
// }
// console.log(findmax(5,9))



// function findmin(a,b,c){
//     if(a<b && a<c){
//         return a;
//     }else if(b<c && b<a){
//         return b;
//     }else{
//         return c;
//     }
// }
// console.log(findmin(13,56,78))


// let findmin = (a,b,c) => {
//     return Math.min(a,b,c)
// }
// console.log(findmin(13,34,56))


// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// let numbers = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(numbers)); 





// let arr  = [-3,4,5,-7,9]
// function positive(arr){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>0){
//             console.log(arr[i])
//         }
//     }
// }
// positive(arr)




// function even(n){
//     let sum=0
//     for(let i=1; i<=n; i++){
//         if(i%2==0){
//             sum +=i;
//         }
//     }
//     return sum
// }
// console.log(even(8))


// let arr=[2,1,3,4,6,5,8]
// function evenno(arr){
//     let list=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             list.push(arr[i])
//         }
//     }
//     return list
// }
// console.log(evenno(arr))


// let arr = [2,3,4,5]
// function reverse(arr){
//     let list=[];
//     for(let i=arr.length-1; i>=0; i--){
//         list.push(arr[i])
//     }
//     return list
// }
// console.log(reverse(arr))


// let numbers = [1, 2, 3, 4, 5];
// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {  
//         reversed.push(arr[i]);  
//     }
//     return reversed;
// }
// console.log(reverseArray(numbers));  // Output: [5, 4, 3, 2, 1]


// let numbers = [4, -3, 0, 7, -1, 9];

// function printPositive(arr) {
//     let list=[]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             list.push(arr[i]);
//         }
//     }
//     return list
// }

// console.log(printPositive(numbers));


// let array = [2, 3, 4, 6];
// let list = [];
// let i = array.length - 1;

// while (i >= 0) {
//     list.push(array[i]);
//     i--;
// }

// console.log(list); 










// Function Declaration
// function addno(a,b){
//     return a+b
// }
// console.log(addno(4,5))

// function expresion 
// let addno = function(a,b){
//     return a+b;
// }
// console.log(addno(3,4))

// arrow function
// let addno =(a,b) => a+b;
// console.log(addno(6,4))