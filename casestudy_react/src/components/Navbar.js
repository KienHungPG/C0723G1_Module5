import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import 'boxicons';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
            <Image src="https://furamavietnam.com/wp-content/uploads/2018/08/logo.png" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Trang chủ</Nav.Link>
            <Nav.Link href="#action2">Giới thiệu</Nav.Link>
            <NavDropdown title="Phòng" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Villa</NavDropdown.Item>
              <NavDropdown.Item href="#action4">House</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Room</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Khách hàng</Nav.Link>
            <Nav.Link href="#action2">Hợp đồng</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><box-icon name='search-alt'></box-icon></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;