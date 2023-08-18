//bài tập mảng
// bài 1
// let arr = [1,2,3,4,5,11,12,13,88,78];
// console.log("Các số lơn hơn hoặc bằng 10: ")
// for(let i =0; i<arr.length; i++) {
//     if(arr[i]>=10){
//         console.log(arr[i]);
//     }
// }

//bài 2
// let arr = [1,2,3,4,5,11,12,13,88,78];
// let max = arr[0];
// let index = 0;
// for(let i =0; i<arr.length; i++) {
//     if(arr[i]>=max){
//         max = arr[i];
//         index = i;
//     }
// }
// console.log("Max là: "+ max+ " vị trí thứ "+index);

// bài 3
// let arr = [1,2,3,4,5,11,12,13,88,78];
// let max = arr[0];
// let avr = 0;
// for(let i =0; i<arr.length; i++) {
//     avr += arr[i] / arr.length
//     if(arr[i]>=max){
//         max = arr[i];
//     }
// }
// console.log("Max là: "+ max);
// console.log("Trung bình: "+ avr);

//  bài 4
// let arr = [1,2,3,4,5,11,12,13,88,78];
// let temp = [];
// for(let i = arr.length -1; i>=0; i--) {
//     temp.push(arr[i]);
// }
// console.log(temp);

// bài 5
// let vowels = ["u","e","o","a","i"];
//         let arr = ["u","e","o","a","i","p","h","u","c"];
//         let count = 0;

//         for (let char of arr) {
//             let charLowerCase = char.toLowerCase();
//             vowels.forEach(vowel => {
//                 if (charLowerCase === vowel) {
//                     console.log(`Số nguyên âm là: ${char} `);
//                     count++;
//                 }
//             })
//         }
//         console.log(`Có ${count} số nguyên âm trong chuỗi`);
// bài 6
// let arr = [1,2,3,4,5,11,12,13,88,78];
// let V = 78;
// function linearSearch(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         return true; 
//       }
//     }
//     return false;
//   }
//   if (linearSearch(arr, V)) {
//     console.log(`${V} is in the array`);
//   } else {
//     console.log(`${V} is not in the array`);
//   }
// bài 7
// let arr = [1,2,3,4,5,11,12,13,88,78];
// let V = 78;
// function removeValueFromArray(arr, value) {
//     let found = false;
//     let lastIndex = -1;
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === value) {
//         found = true;
//         lastIndex = i;
//       }
  
//       if (found && i < arr.length - 1) {
//         arr[i] = arr[i + 1];
//       }
//     }
  
//     if (found) {
//       arr[lastIndex] = 0;
//     }
  
//     return found;
//   }
  

//   if (removeValueFromArray(arr, V)) {
//     console.log(`${V} is in the array. Array after removing:`, arr);
//   } else {
//     console.log(`${V} is not in the array.`);
//   }
// bài 8
// let arr = [1,2,3,4,5,11,12,13,88,78];
// function bubbleSortDescending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//     }
//   }

//   bubbleSortDescending(arr);
//   console.log("Mảng giảm dần: "+ arr);
// bài 9
// let a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
// let b = [2, 7, 12, 17, 22, 27, 32, 37, 42, 47];
// let c = a.concat(b);
// console.log("Mảng c sau khi nối:", c);
// bài tập hàm
// bài 1
// function square(number) {
//     return number * number;
//   }
//   console.log(square(2));

// bài 2
// Hàm tính diện tích hình tròn
// function calculateArea(radius) {
//     return Math.PI * radius * radius;
//   }
//   // Hàm tính chu vi hình tròn
//   function calculatePerimeter(radius) {
//     return 2 * Math.PI * radius;
//   }
//   console.log("Diện tích hình tròn: "+calculateArea(7));
//   console.log("Chu vi hình tròn: "+calculatePerimeter(7));

// bài 3
// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   }
//   console.log(factorial(5));

// bài 4
// function isDigit(character) {
//     return !isNaN(character) && !isNaN(parseFloat(character));
//   }

//   let input = "a";
//   let isNumber = isDigit(input);
  
//   if (isNumber) {
//     console.log(`${input} là một ký tự số.`);
//   } else {
//     console.log(`${input} không phải là ký tự số.`);
//   }
// bài 5
// function findMinNumber(a, b, c) {
//     return Math.min(a, b, c);
//   }
//   let num1 = 1;
//   let num2 = 5;
//   let num3 = 8;
//   console.log("Số nhỏ nhất: "+ findMinNumber(num1,num2,num3));

// bài 6
// function isPositiveInteger(number) {
//     return Number.isInteger(number) && number > 0;
//   }
//   let inputNumber = -10;
//   let isPositive = isPositiveInteger(inputNumber);
//   if (isPositive) {
//     console.log(`${inputNumber} là một số nguyên dương.`);
//   } else {
//     console.log(`${inputNumber} không phải là số nguyên dương.`);
//   }

// bài 7
// function swapIntegers(a, b) {
//     const temp = a;
//     a = b;
//     b = temp;
//     return [a, b];
//   }
//   let a = 5;
//   let b = 7;

//   console.log("Đổi chỗ: "+ swapIntegers(a,b));

// bài 8    
// dùng hàm
// function reverseArray(arr) {
//     return arr.reverse();
//   }
// dùng thuật toán
// function reverseArray(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n / 2; i++) {
//       let temp = arr[i];
//       arr[i] = arr[n - 1 - i];
//       arr[n - 1 - i] = temp;
//     }
//     return arr;
//   }
//   let arr = [5, 10, 15, 20, 25, 30];
//   console.log("Mảng sau khi đảo ngược: "+ reverseArray(arr));

// bài 9
function countCharacterOccurrences(arr, character) {
    const occurrences = arr.filter(char => char === character);
    return occurrences.length > 0 ? occurrences.length : -1;
  }
  const characters = ['a', 'b', 'c', 'a', 'd', 'e', 'a'];
  let targetChar = 'a';
  let occurrenceCount = countCharacterOccurrences(characters, targetChar);
  if (occurrenceCount !== -1) {
    console.log(`Ký tự '${targetChar}' xuất hiện ${occurrenceCount} lần.`);
  } else {
    console.log(`Ký tự '${targetChar}' không xuất hiện trong mảng.`);
  }