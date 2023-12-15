// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

const sumArray = ([...arrayNumberA],[...arrayNumberB]) => {
    let numberResultArray = [...arrayNumberA,...arrayNumberB];
    return numberResultArray.reduce((sum, element) => sum + element)
}
console.log(sumArray([1,2,3,4,5],[6,3,2]));