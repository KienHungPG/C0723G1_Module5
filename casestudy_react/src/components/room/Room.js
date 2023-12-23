import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

function Room() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="container d-flex justify-content-between flex-wrap my-5 mx-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
        />
        <Card.Body>
          <Card.Title>SUITE HƯỚNG BIỂN</Card.Title>
          <Card.Text>
            Diện tích: 80.5 m2 kết nối với ban công rộng 24 m2.
          </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Chỉnh sửa</Button>
            <Button variant="primary" onClick={handleShow}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
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
    </div>
  );
}

export default Room;
