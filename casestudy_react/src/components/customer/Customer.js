import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function Customer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let active = 2;
  let items = [];
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Điện thoại</th>
            <th>Email</th>
            <th>Loại khách</th>
            <th>Địa chỉ</th>
            <th colSpan={2}>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>01/01/2000</td>
            <td>Nam</td>
            <td>0987654321</td>
            <td>Mark@gmail.com</td>
            <td>Diamond</td>
            <td>New York</td>
            <td>
              <Button variant="primary">Chỉnh sửa</Button>
            </td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>01/01/2000</td>
            <td>Nam</td>
            <td>0987654321</td>
            <td>Mark@gmail.com</td>
            <td>Diamond</td>
            <td>New York</td>
            <td>
              <Button variant="primary">Chỉnh sửa</Button>
            </td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>01/01/2000</td>
            <td>Nam</td>
            <td>0987654321</td>
            <td>Mark@gmail.com</td>
            <td>Diamond</td>
            <td>New York</td>
            <td>
              <Button variant="primary">Chỉnh sửa</Button>
            </td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>01/01/2000</td>
            <td>Nam</td>
            <td>0987654321</td>
            <td>Mark@gmail.com</td>
            <td>Diamond</td>
            <td>New York</td>
            <td>
              <Button variant="primary">Chỉnh sửa</Button>
            </td>
            <td>
              <Button variant="primary" onClick={handleShow}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa dịch vụ này không</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Customer;
