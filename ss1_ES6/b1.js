// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).

let array = [1,2,3,4,5,6,7,8,9,10];
// let newArray = array.map(number => {
//     if (number > 5){
//         return number
//     }
// })
// console.log(newArray);
let arr  = array.filter(number => number >5)
console.log(arr);