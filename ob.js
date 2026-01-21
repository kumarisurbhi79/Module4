// Ek object create karo jisme name, age, city ho.
// let person={
//     name: "surbhi",
//     age: 23, 
//     city: "samastipur"
// };
// console.log(person);





// Object ki ek property access karo (dot notation).
// console.log(person.name);


// Object ki ek property access karo (bracket notation).
// console.log(person["city"])



// person.country="india";
// console.log(person)


// Object me nayi property add karo.
// person.country="india";
// console.log(person.country)


// Object me kisi property ko delete karo.
// delete person.age;
// console.log(person)


// Object me for...in loop ka use karke key-value print karo.
// for (let key in person){
//     console.log(key, ":",person[key]);
// }


// Object ki keys ka array nikal kar print karo.
// let keys = Object.keys(person);
// console.log(keys)


// Object ki values ka array nikal kar print karo.
// let values = Object.values(person);
// console.log(values)



// Object ki entries ([key, value] pairs) nikal kar print karo.
// let entries = Object.entries(person);
// console.log(entries)


// let firstkey = Object.keys(person)[0];
// console.log(firstkey)

// let firstvalue = Object.values(person)[0];
// console.log(firstvalue)


// Object me for...in loop ka use karke key-value print karo.
// const firstKey = Object.keys(person)[0];
// const firstValue = person[firstKey];
// console.log(firstKey, ":", firstValue);



// Check karo ki koi key object me exist karti hai ya nahi (in operator).
// console.log("age" in person);
// console.log("mother" in person);


// Do objects ko merge karo (Object.assign ya spread operator se)
// let ob1 = {a:1 , b:3};
// let ob2 = {c:4 , d:7};
// let merged = {...ob1,...ob2};
// console.log(merged)



// Object ke saare number values ka sum nikal do.
// let no ={a:4,b:5,c:8};
// let sum = 0;
// for(let key in no){
//     sum += no[key];
// }
// console.log(sum);



// Nested object me inner value access karo.
// let student = {name: "surbhi",marks:{math:90,eng:64,bio:74}};
// console.log(student.marks)


// let fruits = ["Apple","Banana","Mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }
// Output: Apple Banana Mango



// let students = [
//     {name: "Surbhi", age: 23},
//     {name: "Rohit", age: 25},
//     {name: "Anita", age: 22}
// ];

// for(let student of students){
//     console.log("Name:", student.name, "Age:", student.age);
// }



// for(let student of students){
//     console.log("age" in student); // true
//     console.log("city" in student); // false
// }



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
// console.log("Total Sum:", total); // 17



// let arr = [
//     {a:1, b:2},
//     {c:3, d:4}
// ];

// let merged = {};
// for(let obj of arr){
//     Object.assign(merged, obj);
// }
// console.log(merged); // {a:1, b:2, c:3, d:4}


//clone
// let student = {name:"musu",age:34};
// let clone = {...student}
// clone.age = 32
// // console.log(student)
// console.log(clone)


  // let personwithmethod = {
  //   name: "surbhi",
  //   greet:function(){
  //     console.log("hello,"+this.name)
  //   }
  // }
  // personwithmethod.greet()

  //medium

  // function no(obj){
  //   console.log(obj.name)
  // }
  // let person = {name:"surbhi",age:19};
  // no(person)


  // let person = {name:"musu", age:19, city:"delhi"}
  // for(let key in person){
  //   console.log(person[key])
  // }

//   let person = {name:"musu", age:19, city:"delhi"}
// console.log(Object.keys(person))
  


// let obj1 = { name: "Surbhi", age: 22 };
// let obj2 = { city: "Patna", country: "India" };
// let mergeobj = {...obj1,...obj2}
// console.log(mergeobj)



// let person = {
//   name:"surbhi",
//   greet: function(){
//     return "hello," + this.name;
//   }
// };
// let message = person.greet();
// console.log(message)


// let people = [
//     { name: "Surbhi", age: 22 },
//     { name: "Rahul", age: 25 },
//     { name: "Anita", age: 20 }
// ];

// console.log(people[0].name); // Surbhi
// console.log(people[1].age);  // 25


// let person1 = { name: "Surbhi" };
// Object.freeze(person1);

// person1.name = "Rahul"; // change nahi hoga
// console.log(person1.name); // Surbhi


// let objA = { name: "Surbhi" };
// let objB = { age: 22 };

// let merged = Object.assign({}, objA, objB);
// console.log(merged); // { name: 'Surbhi', age: 22 }





// let person ={
//   name:"surbhi",
//   age : 23,
//   city: "delhi"
// }
// console.log(person)
// console.log(person.name)
// console.log(person["city"])
// person.country="india"
// console.log(person)
// console.log(person.country)
// delete person.age;
// console.log(person)
// let entries = Object.entries(person)
// console.log(entries)




// let dic={
//     a:20,
//     b:30,
//     c:50
// }
// let list = [];
// for(let key in dic){
// list.push(key)   
// }
// console.log(list)

// let count =0;
// for(let key in dic){
//     count++
// }
// console.log(count)


// let sum =0;
// for(let key in dic){
//     sum +=dic[key]
// }
// console.log(sum)

// a={a:12,b:13,c:3}
// console.log(a.b);
// let values = Object.values(a);
// console.log(values[1]);  

