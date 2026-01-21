//switch case
//easy

// let day = 4;

// switch (day) {
//   case 1:
//      console.log("Sunday"); 
// break;
//   case 2: 
//   console.log("Monday");
//  break;
//   case 3: 
//   console.log("Tuesday");
//  break;
//   case 4: 
//   console.log("Wednesday"); 
// break;
//   case 5:
//      console.log("Thursday"); 
// break;
//   case 6: 
//   console.log("Friday");
//  break;
//   case 7: 
//   console.log("Saturday");
//  break;
//   default: 
//   console.log("Invalid Day");
// }



// let month = 10;

// switch (month) {
//   case 1:
//      console.log("January");
//       break;
//   case 2:
//      console.log("February"); 
//      break;
//   case 3:
//      console.log("March");
//       break;
//   case 4:
//      console.log("April"); 
//      break;
//   case 5: 
//   console.log("May"); 
//   break;
//   case 6: 
//   console.log("June"); 
//   break;
//   case 7:
//      console.log("July");
//       break;
//   case 8: 
//   console.log("August"); 
//   break;
//   case 9:
//      console.log("September"); 
//      break;
//   case 10:
//      console.log("October"); 
//      break;
//   case 11: 
//   console.log("November");
//    break;
//   case 12: 
//   console.log("December");
//    break;
//   default: 
//   console.log("Invalid Month");
// }



// let grade = "C";

// switch (grade) {
//   case "A":
//      console.log("Excellent"); 
//      break;
//   case "B":
//      console.log("Good Job");
//       break;
//   case "C":
//      console.log("Keep Practicing");
//       break;
//   default:
//      console.log("Invalid Grade");
// }



// let light = "Yellow";

// switch (light) {
//   case "Red": 
//   console.log("Stop"); 
//   break;
//   case "Yellow":
//      console.log("Get Ready"); 
//   break;
//   case "Green": 
//   console.log("Go"); 
//   break;
//   default: 
//   console.log("Invalid Color");
// }



// let a = 20, b = 5;
// let operator = "*";

// switch (operator) {
//   case "+": 
//   console.log(a + b); 
//   break;
//   case "-": 
//   console.log(a - b);
//    break;
//   case "*":
//      console.log(a * b); 
//      break;
//   case "/":
//      console.log(a / b); 
//      break;
//   default:
//      console.log("Invalid Operator");
// }




// let fruit = "Mango";

// switch (fruit) {
//   case "Apple":
//      console.log("Apple: ₹100/kg"); 
//      break;
//   case "Banana":
//      console.log("Banana: ₹40/dozen");
//       break;
//   case "Mango": 
//   console.log("Mango: ₹80/kg"); 
//   break;
//   case "Orange":
//      console.log("Orange: ₹60/kg"); 
//      break;
//   default:
//   console.log("Fruit not available");
// }


// let choice = 2;

// switch (choice) {
//   case 1:
//      console.log("Start the game"); 
//      break;
//   case 2:
//      console.log("Show the rules");
//      break;
//   case 3: 
//   console.log("Exit the game");
//    break;
//   default: 
//   console.log("Invalid choice");
// }


// let weather = "Rainy";

// switch (weather) {
//   case "Sunny":
//      console.log("It's bright outside"); 
//      break;
//   case "Rainy":
//      console.log("Carry an umbrella");
//       break;
//   case "Cold": 
//   console.log("Wear warm clothes"); 
//   break;
//   default: 
//   console.log("Weather not recognized");
// }


// let season = 3;  // 1=Winter, 2=Spring, 3=Summer, 4=Monsoon, 5=Autumn

// switch (season) {
//   case 1:
//      console.log("Winter");
//       break;
//   case 2:
//      console.log("Spring");
//       break;
//   case 3:
//      console.log("Summer");
//       break;
//   case 4:
//      console.log("Monsoon"); 
//      break;
//   case 5: 
//   console.log("Autumn"); 
//   break;
//      console.log("Invalid Season Number");
// }




// let day = 7;  // 1=Sunday, 2=Monday, ... 7=Saturday

// switch (day) {
//   case 1: 
//   case 7: 
//     console.log("Weekend"); 
//     break;
//   case 2: 
//   case 3: 
//   case 4: 
//   case 5: 
//   case 6: 
//     console.log("Weekday"); 
//     break;
//   default: 
//     console.log("Invalid Day Number");
// }





//medium


// let month = 2;   // input: 1-12
// let year = 2024; // leap year check karne ke liye

// switch (month) {
//   case 1:
//    case 3:
//    case 5:
//     case 7:
//      case 8:
//       case 10:
//        case 12:
//     console.log("31 days");
//     break;
//   case 4: 
//   case 6: 
//   case 9: 
//   case 11:
//     console.log("30 days");
//     break;
//   case 2:
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       console.log("29 days (Leap Year)");
//     } else {
//       console.log("28 days");
//     }
//     break;
//   default:
//     console.log("Invalid Month");
// }




// let choice = 2;

// switch (choice) {
//   case 1:
//      console.log("You selected Pizza");
//       break;
//   case 2: 
//   console.log("You selected Burger");
//   break;
//   case 3:
//      console.log("You selected Pasta"); 
//      break;
//   case 4: 
//   console.log("You selected Cold Drink");
//    break;
//   default: 
//   console.log("Invalid Choice");
// }



// let marks = 68;

// switch (true) {
//   case (marks >= 90): 
//   console.log("Grade: A+");
//    break;
//   case (marks >= 75): 
//   console.log("Grade: A"); 
//   break;
//   case (marks >= 60): 
//   console.log("Grade: B");
//    break;
//   case (marks >= 40): 
//   console.log("Grade: C"); 
//   break;
//   default:
//      console.log("Grade: Fail");
// }


// let a = 12, b = 4;
// let operator = "/";

// switch (operator) {
//   case "+":
//      console.log(a + b);
//       break;
//   case "-":
//      console.log(a - b); 
//      break;
//   case "*":
//      console.log(a * b);
//       break;
//   case "/":
//      console.log(a / b);
//       break;
//   default:
//      console.log("Invalid Operator");
// }



// let shift = 2;  // input: 1=Morning, 2=Afternoon, 3=Night

// switch (shift) {
//   case 1:
//      console.log("Morning Shift");
//       break;
//   case 2:
//      console.log("Afternoon Shift"); 
//      break;
//   case 3:
//      console.log("Night Shift"); 
//      break;
//   default:
//      console.log("Invalid Shift");
// }



// let letter = "b";

// switch (letter) {
//   case "a": 
//   console.log("You entered A"); 
//   break;
//   case "b":
//      console.log("You entered B");
//       break;
//   case "c":
//      console.log("You entered C"); 
//      break;
//   default: 
//   console.log("Invalid Letter");
// }



// let signal = "Green";

// switch (signal) {
//   case "Red": 
//   console.log("Stop");
//    break;
//   case "Yellow":
//      console.log("Get Ready"); 
//      break;
//   case "Green":
//      console.log("Go"); 
//      break;
//   default: 
//   console.log("Invalid Signal");
// }


// let num = 5;

// switch (num) {
//   case 1: 
//   console.log("One");
//    break;
//   case 2:
//      console.log("Two"); 
//      break;
//   case 3:
//      console.log("Three");
//       break;
//   default: 
//   console.log("Number not found"); 
// }



// let month = 2;
// let year = 2024; // leap year check

// switch (month) {
//   case 1:
//    case 3:
//     case 5: 
//     case 7: 
//     case 8: 
//     case 10:
//      case 12:
//     console.log("31 days");
//      break;
//   case 4: 
//   case 6: 
//   case 9: 
//   case 11:
//     console.log("30 days"); 
//     break;
//   case 2:
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       console.log("29 days (Leap Year)");
//     } else {
//       console.log("28 days");
//     }
//     break;
//   default:
//     console.log("Invalid Month");
// }



// let amount = 750;
// let discount;

// switch (true) {
//   case (amount >= 1000):
//      discount = "30% discount";
//       break;
//   case (amount >= 500):
//      discount = "20% discount";
//       break;
//   case (amount >= 200):
//      discount = "10% discount";
//       break;
//   default: 
//   discount = "No discount";
// }

// console.log(discount);




//hard


// let category = "Fruit";
// let item = "Apple";

// switch (category) {
//   case "Fruit":
//     switch (item) {
//       case "Apple":
//          console.log("Apple is red");
//           break;
//       case "Banana": 
//       console.log("Banana is yellow"); 
//       break;
//       default: 
//       console.log("Unknown fruit");
//     }
//     break;

//   case "Vegetable":
//     switch (item) {
//       case "Carrot":
//          console.log("Carrot is orange"); 
//          break;
//       case "Potato": 
//       console.log("Potato is brown"); 
//       break;
//       default: 
//       console.log("Unknown vegetable");
//     }
//     break;

//   default:
//     console.log("Invalid Category");
// }




// let num1 = 20, num2 = 5;
// let operator = "*";   // +, -, *, /

// switch (operator) {
//   case "+":
//      console.log("Sum:", num1 + num2); 
//      break;
//   case "-":
//      console.log("Difference:", num1 - num2); 
//      break;
//   case "*":
//      console.log("Product:", num1 * num2); 
//      break;
//   case "/": 
//     if (num2 !== 0) 
//       console.log("Quotient:", num1 / num2);
//     else
//        console.log("Error: Division by zero");
//     break;
//   default: 
//   console.log("Invalid Operator");
// }


// let role = "admin";   // "admin", "user", "guest"

// switch (role) {
//   case "admin":
//     console.log("Full access: Add/Edit/Delete users");
//     break;
//   case "user":
//     console.log("Limited access: View and Edit content");
//     break;
//   case "guest":
//     console.log("Read-only access");
//     break;
//   default:
//     console.log("Invalid role");
// }



// let grade = "A";
// let marks = 85;

// switch (grade) {
//   case "A":
//     switch (true) {
//       case (marks >= 90): 
//       console.log("Excellent!"); break;
//       case (marks >= 80):
//          console.log("Very Good"); break;
//       default: console.log("Good");
//     }
//     break;

//   case "B":
//     switch (true) {
//       case (marks >= 70):
//          console.log("Average"); 
//          break;
//       default: 
//       console.log("Need Improvement");
//     }
//     break;

//   case "C":
//     console.log("Just Passed");
//     break;

//   default:
//     console.log("Invalid grade");
// }



// let month = 2;   // user input
// let year = 2024; // user input

// switch (month) {
//   case 1: 
//   case 3:
//    case 5: 
//    case 7:
//     case 8: 
//     case 10: 
//     case 12:
//     console.log("31 days");
//     break;
//   case 4: 
//   case 6: 
//   case 9: 
//   case 11:
//     console.log("30 days");
//     break;
//   case 2:
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//       console.log("29 days (Leap Year)");
//     } else {
//       console.log("28 days");
//     }
//     break;
//   default:
//     console.log("Invalid month");
// }




// let answer = "b";

// switch (answer) {
//   case "a":
//     console.log("Wrong"); 
//     break;
//   case "b": 
//   console.log("Correct");
//    break;
//   case "c":
//      console.log("Wrong"); 
//      break;
//   case "d":
//   console.log("Wrong"); 
//   break;
//   default: 
//   console.log("Invalid Option");
// }



// let season = 3; // 1-Winter, 2-Spring, 3-Summer, 4-Monsoon

// switch (season) {
//   case 1:
//      console.log("Winter"); 
//   break;
//   case 2:
//      console.log("Spring"); 
//   break;
//   case 3: 
//   console.log("Summer"); 
//   break;
//   case 4: 
//   console.log("Monsoon");
//    break;
//   default: 
//   console.log("Invalid Season Number");
// }



// let day = 6;

// switch (day) {
//   case 1: 
//   case 2: 
//   case 3: 
//   case 4: 
//   case 5:
//     console.log("Weekday");
//     break;
//   case 6: 
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Invalid Day");
// }



// let dayNum = 7; // 1 = Monday ... 7 = Sunday

// switch (dayNum) {
//   case 6:
//   case 7:
//     console.log("Weekend ");
//     break;
//   default:
//     console.log("Weekday");
// }


// let x = 10;

// switch (true) {
//   case (x > 0 && x < 10): 
//     console.log("Between 1 and 9"); 
//     break;
//   case (x >= 10 && x < 20): 
//     console.log("Between 10 and 19"); 
//     break;
//   default: 
//     console.log("Other value");
// }

