import { useState } from "react";

const studentList = [
    {id: 1, name: 'Hùng',age: 23,address: 'Huế'},
    {id: 2, name: 'Tưởng',age: 26,address: 'Đà Nẵng'},
    {id: 3, name: 'Hữu',age: 25,address: 'Quảng Ngãi'},
    {id: 4, name: 'Tuấn',age: 20,address: 'Đà Nẵng'},
    {id: 5, name: 'Hiếu',age: 22,address: 'Huế'}
]
function StudentInfo(){
    const [data, setData] = useState(studentList);

    return  (
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default StudentInfo;