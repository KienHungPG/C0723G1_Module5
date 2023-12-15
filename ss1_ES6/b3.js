// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

let array = [7,24,11,23,5];
let V = 24;
let result = array.some((number) => number === V );
if (result){
    console.log(`${V} được tìm thấy trong mảng`);
}else{
    console.log(`không tìm thấy ${V}`);
}