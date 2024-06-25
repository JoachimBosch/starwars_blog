import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MyContext from '../Context/Context';

function Navigation() {
  return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <div>
                <Navbar.Brand href="#">Star Wars Blog</Navbar.Brand>
            </div>
            <div  className="d-flex flex-row">
                <div className="me-2">
                    <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </div>
                <div className="m-auto">
                    <NavDropdown title="Favorites"id="collapsible-nav-dropdown">
                    <NavDropdown.Item onClick="">Action</NavDropdown.Item>
                    <NavDropdown.Item>
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
            
        </Container>
        </Navbar>
  );
};

export default Navigation;