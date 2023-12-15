// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

let arr = [-1,2,5,-3,6];
let arr1 = [1,2,5,3,6];
let result = arr1.every((number) => number > 0);
if (result){
    console.log("Tất cả các phần tử trong mảng lớn hơn 0");
}else{
    console.log("Trong mảng có phần tử nhỏ hơn 0");
}