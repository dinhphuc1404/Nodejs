let arr = [1,2,3,4,5,6,7,8];
// console.log(arr[5]);
// console.log(arr.length);

// let person = {
//     name: "Phuc",
//     age: 22
// }
// arr.push(person);
// thêm phần tử c vào vị trí thứ 3
// arr.splice(3, 0, "hihi")
// xóa phần tử từ index thứ 3 và xóa 2 phần tử
// arr.splice(3,2);
// console.log(arr);

// for(let i =0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for(let i in arr) {
//     console.log(arr[i]);
// }
// let sum =0;
// arr.forEach(element => {
//     console.log(element)
//     sum += element;
// })
// console.log("Tổng: " + sum);

//tính tổng nhanh hơn 
// let sum = arr.reduce((previousValue, currenValue) => previousValue + currenValue);
//     console.log(sum);
// lấy các phẩn tử chẵn trong mảng
// let temp = [];
// for(let i =0; i<arr.length; i++){
//     if(arr[i]%2 ==0) {
//         temp.push(arr[i]);
//     }
// }
// console.log(temp);
// cách 2 lấy các phẩn tử chẵn trong mảng sử dụng filter
// let temp = arr.filter((element) => element%2==0);
// console.log(temp);
// tính tổng 2 số a b sử dụng fun
// function sum(a,b) {
//     return a + b ;
// }
// let sum = (a,b) => a+b;
// console.log(sum(2,3))

//rest param
// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
// }
// console.log(sum(1,1,1,1,1,1,1,1,1))

// spread operator
// gộp mảng, sao chép mảng, sao chép đối tượng
let arr1 = [1,2,3];
let arr2 = ["Phuc", "Abc"];
//gộp mảng
let arr3 = [...arr1, ...arr2];
// sao chép mảng
let arr4 = [...arr1];
// sao chép đối tượng
let arr5 = arr1;
console.log(arr3);
console.log(arr4);
console.log(arr5);