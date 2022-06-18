// const arr = [
//   "name",
//   true,
//   123,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] },
// ];
// console.log(arr);

// let js = "javascript";
// let charac = js.split("");
// let joint = charac.join();
// console.log("hamza", joint);

// let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// let companies = companiesString.split(",");
// let com = companies.join();
// console.log(com);

// const fruits = ["banana", "orange", "mango", "lemon"];

// let first = fruits[0];
// console.log(first);
// const second = fruits[1];
// console.log(second);
// const third = fruits[2];
// console.log(third);
// let lastindex = fruits.length - 1;
// let lastfruit = fruits[lastindex]

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100];

// console.log(numbers.length);
// console.log(numbers[0]);
// console.log(numbers[1]);

// lastnumber = numbers.length - 1;
// console.log(numbers[lastnumber]);

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ]

//   console.log(webTechs)
//   console.log(webTechs.length)
//   console.log(webTechs[0])
//   console.log(webTechs[6])

//   let lastIndex = webTechs.length - 1
//   console.log(webTechs[lastIndex])

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ] // List of countries

//   console.log(countries) // -> all countries in array
//   console.log(countries[0]) //  -> Albania
//   console.log(countries[10]) //  -> Kenya

//   let lastIndex = countries.length - 1
//   console.log(countries[lastIndex]) //  -> Kenya

// const shoppingCart = [
//     'Milk',
//     'Mango',
//     'Tomato',
//     'Potato',
//     'Avocado',
//     'Meat',
//     'Eggs',
//     'Sugar',
//   ] // List of food products

//   console.log(shoppingCart) // -> all shoppingCart in array
//   console.log(shoppingCart[0]) //  -> Milk
//   console.log(shoppingCart[7]) //  -> Sugar

//   let lastIndex = shoppingCart.length - 1
//   console.log(shoppingCart[lastIndex]) //  -> Sugar

// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10 // changing 1 at index 0 to 10
// numbers[1] = 20 // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)

// const arr = Array(50).fill("raza")
// console.log(arr)

// const arr1 = [1, 2, 3,"-"];
// const arr2 = [1, 2, 3,5,6,7,8,9,10];

// const merge= arr1.concat(arr2)
// console.log(merge);

// const fruits = ["banana", "orange", "mango", "lemon"];

// index = fruits.indexOf("mango");
// console.log(index);
// index == -1 ? console.log("nhi hai bhai khatam ho gya") : console.log("hai bhai mil jai ga");

// const numbers = [1, 2, 3, 4, 5,"shayan"];
// const arr = numbers.includes("shayan");
// console.log(arr);
// arr == true ? console.log("return true") : console.log("its fasle");

// Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers));

// const numbers1 = "hamza"
// console.log(Array.isArray(numbers1))

// toString:Converts array to string

// const conver = ["hamza", 101, true, false, { hamza: "its me" }];

// console.log(conver.toString());

// Joining array elements

// const conver = ["hamza", 101, true, false, { hamza: "its me" }];
// console.log(conver.join());

// Slice array elements

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers);
// console.log(numbers.slice(4,5));

// const arr = ['item1', 'item2', 'item3']
// const v = arr.push("hazma","salman","daniiyal")
// console.log(arr)

// const arr = [1,2,3,4,5,6,7]
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.unshift(100)
// console.log(arr)

// const arr = [1,2,3,4,5,6,7]
// arr.reverse()
// console.log(arr);

// Array can store different data types including an array itself. Let us create an array of arrays

// const firstNums = [1, 2, 3];
// const secondNums = [1, 4, 9];

// const arrayOfArray = [
//   [1, 2, 3],
//   [1, 2, 3],
// ];
// console.log(arrayOfArray[0]); // [1, 2, 3]

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = [frontEnd, backEnd];
// console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length); // 2
// console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]

// In JavaScript and other programming languages the key word if is to used check if a condition is true and to execute the block code. To create an if condition, we need if keyword, condition inside a parenthesis and block of code inside a curly bracket({}).
//==================================================================================================//

// const hamza = 100;

// if (hamza > 100) {
//   console.log("is greter then 100");
// } else if (hamza < 100) {
//   console.log("is greter then 100");
// } else if (hamza == 100) {
//   console.log(`is equel then ${hamza}`);
// } else {
//   console.log(hamza, "not found");
// }

// if else if else
// let weather = 'sunny'
// if (weather === 'rainy') {
//   console.log('You need a rain coat.')
// } else if (weather === 'cloudy') {
//   console.log('It might be cold, you need a jacket.')
// } else if (weather === 'sunny') {
//   console.log('Go out freely.')
// } else {
//   console.log('No need for rain coat.')
// }

// switch (caseValue) {
//     case 1:
//       // code
//       break
//     case 2:
//       // code
//       break
//     case 3:
//     // code
//     default:
//     // code
//   }

// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

// Switch More Examples
// let dayUserInput = prompt('What day is today ?')
// let day = dayUserInput.toLowerCase()

// switch (day) {
//   case 'monday':
//     console.log('Today is Monday')
//     break
//   case 'tuesday':
//     console.log('Today is Tuesday')
//     break
//   case 'wednesday':
//     console.log('Today is Wednesday')
//     break
//   case 'thursday':
//     console.log('Today is Thursday')
//     break
//   case 'friday':
//     console.log('Today is Friday')
//     break
//   case 'saturday':
//     console.log('Today is Saturday')
//     break
//   case 'sunday':
//     console.log('Today is Sunday')
//     break
//   default:
//     console.log('It is not a week day.')
// }

// let number = prompt("enter number");
// switch (true) {
//   case number < 0:
//     console.log("is negative");
//     break;
//   case number > 0:
//     console.log("is positive");
//     break;
//   case number == 0:
//     console.log("its negative");
//     break;
//   default:
//     console.log("not a number");
//     break;
// }

// Ternary Operators

// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')
