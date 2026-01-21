// let array=[2,4,5,6,7];
// let sum =0;
// let i=0
// while(i<array.length){
//     sum +=array[i];
//     i++
// }
// console.log(sum);



// let array=[2,4,5,6];
// let i=array.length-1;
// while(i>=0){
//         console.log(array[i])
//     i--
// }


// let array = [2,3,4,5,6,7,8,9];
// let count = 0;
// let i = array.length - 1;  
// while(i >= 0){
//     console.log(array[i]);  
//     count++;              
//     i--;                  
// }
// console.log(count); 

// let arr = [2,3,5,9];
// arr.reverse()
// console.log(arr);



// let sum =0;
// let array = [2,3,4,5,6,7,8,9];
// for(let i = 0 ; i<array.length ; i++){
//      sum += array[i];
// }console.log(sum)




// let array = [2,3,4,5,6,7,8,9];
// for(let i = array.length-1 ; i>=0 ; i--){
// console.log(array[i])
// }


// let array = [2,3,4,5,6,7,8,9];
// let count = 0;
// for(let i = array.length - 1; i >= 0; i--){
//     console.log(array[i]);
//     count++;
// }
// console.log(count);


//array
//easy


// 1) Create Array of Numbers

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// 2) Access Array Elements

// console.log(numbers[0]); // 10
// console.log(numbers[2]); // 30

// 3) Update Array Element

// numbers[1] = 25; 
// console.log(numbers); // [10,25,30,40,50]

// 4) Push Element (Add at end)

// numbers.push(60);
// console.log(numbers); // [10,25,30,40,50,60]

// 5) Pop Element (Remove last)

// numbers.pop();
// console.log(numbers); // [10,25,30,40,50]


// 6) Shift Element (remove first element)

// let arr = [10, 20, 30];
// arr.shift();
// console.log(arr); // [20, 30]

// 7) Unshift Element (add element at start)

// arr.unshift(5);
// console.log(arr); // [5, 20, 30]

// 8) Length of Array

// console.log(arr.length); // 3

// 9) IndexOf Element

// console.log(arr.indexOf(20)); // 1
// console.log(arr.indexOf(100)); // -1 (not found)

// 10) Includes Method

// console.log(arr.includes(30));  // true
// console.log(arr.includes(50));  // false


//medium

// let nums = [10, 20, 30, 40];

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
// }


// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }

// console.log("Sum =", sum);



// let fruits = ["banana", "apple", "date", "cherry"];
// fruits.sort(); 
// console.log(fruits);



// let numbers = [40, 100, 1, 5, 25];
// numbers.sort((a, b) => a - b); // ascending
// console.log(numbers);


// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr); // [5, 4, 3, 2, 1]



// let fruit=["apple","banana","pear"];
// let fr = fruit.slice(0,2);
// console.log(fr);


// let fruits = ["apple", "banana", "cherry"];
// let fg = fruits.splice(0,1,"pear");
// console.log(fruits)


// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6
// ];
// let merged = arr1.concat(arr2);

// console.log(merged); // [1, 2, 3, 4, 5, 6]


//hard

//filter ek nya array return krta hai jisme elsement condition ke base par hote hai
// let no =[1,2,3,4,5,6,7]
// let even =no.filter(num=>num%2===0);
// console.log(even)


//map 
// elment par opration apply krke nya arryay return karta hai
// let no =[1,2,3,4,5]
// let squre = no.map(num=>num*num);
// console.log(squre)

//reduce array ke element ko single value mai combine karta hai
// let no=[1,2,3,4,5,6,5]
// let sum = no.reduce((a,b)=>a+b);
// console.log(sum)


//find pehla element return karta jo condition satisfy karta hai
// let arr=[1,2,3,4,5,6]
// let no = arr.find(num=>num>5)
// console.log(no)


// let nested = [[1, 2], [3, 4], [5, 6]];
// // Access 4
// console.log(nested[1][1]); // 4
// // Access 5
// console.log(nested[2][0]); // 5


// let numbers = [1, 2, 3, 2, 4, 1, 5];
// let uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers); // [1, 2, 3, 4, 5]



// let arr=[2,3,4,5,7]
// let i=arr.length-1;
// let list =[]
// while(i>=0){
//     list.push(arr[i])
//     i--
// }
// console.log(list)



// let arr =[4];
// let fact=1;
// for(let i=0; i<arr.length; i++){
//     let num =arr[i]
//     for(let j=1; j<=num; j++){
//         fact *=j;
//     }
// }
// console.log(fact)


// let n=10;
// let fib=[0,1]
// for(let i=2; i<n; i++){
//     fib[i]=fib[i-1]+fib[i-2];
// }
// console.log(fib)


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

