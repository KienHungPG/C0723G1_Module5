// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let arr = [1,-5,2,65,3,33];
let result = arr.find((number) => number > 3);
if (result != undefined){
    console.log(`Phần tử đầu tiên trong mảng lớn hơn 3 là ${result}`);
}else {
    console.log("không có phần tử nào lớn hơn 3 trong mảng");
}