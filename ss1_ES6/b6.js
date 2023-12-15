/* 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" 
 và các phần tử còn lại vào một mảng mới "rest". */

let array = [24,11,23,123,43534,1231]
let [first, ...newArray] = array;
console.log("First element",first);
console.log("new array",newArray);
