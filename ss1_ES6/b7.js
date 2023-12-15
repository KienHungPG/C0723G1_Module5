// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

let person = [
    {
        name: 'Hung',
        age: 24
    },
    {
        name: 'Tuong',
        age: 27
    },
    {
        name: 'Huu',
        age: 26
    }
];

for(let {name,age} of person){
    console.log(`Name: ${name}, Age: ${age}`);
}
