import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateRoom() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tên dịch vụ</Form.Label>
        <Form.Control type="text" placeholder="Nhập tên dịch vụ" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Diện tích sử dụng</Form.Label>
        <Form.Control type="number" placeholder="Nhập vào diện tích sử dụng" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Chi phí thuê</Form.Label>
        <Form.Control type="number" placeholder="Nhập vào chi phí thuê" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Số người tối đa</Form.Label>
        <Form.Control type="number" placeholder="Nhập vào số người tối đa" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Kiểu thuê</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Chọn kiểu thuê</option>
          <option value="1">Năm</option>
          <option value="2">Tháng</option>
          <option value="3">Ngày</option>
          <option value="4">Giờ</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Loại dịch vụ</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Chọn loại dịch vụ</option>
          <option value="1">Villa</option>
          <option value="2">House</option>
          <option value="3">Room</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Tạo
      </Button>
    </Form>
  );
}

export default CreateRoom;
