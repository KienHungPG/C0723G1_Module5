import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateCustomer() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control type="text" placeholder="Nhập tên khách hàng" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ngày sinh</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Giới tính</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Chọn giới tính</option>
          <option value="1">Nam</option>
          <option value="2">Nữ</option>
          <option value="3">khác</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Số CCCD</Form.Label>
        <Form.Control type="number" placeholder="Nhập vào số CCCD" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control type="number" placeholder="Nhập vào số điện thoại" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Nhập tên khách hàng" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Địa chỉ</Form.Label>
        <Form.Control type="text" placeholder="Nhập tên khách hàng" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Loại khách</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Chọn loại khách</option>
          <option value="1">Diamond</option>
          <option value="2">Platinium</option>
          <option value="3">Gold</option>
          <option value="4">Member</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Lưu thông tin khách hàng
      </Button>
    </Form>
  );
}

export default CreateCustomer;
