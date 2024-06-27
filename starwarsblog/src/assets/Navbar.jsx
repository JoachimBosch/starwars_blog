import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {

    
  return (
        <div className="container d-flex flex-row justify-content-between px-5 py-2">
            <div>
                <h1>Star Wars Blog</h1>
            </div>
            <div  className="d-flex flex-row align-items-center">
                <div className="me-2">
                    <input
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                </div>
                <div className="m-auto">
                    <i className="fa-solid fa-heart" style={{ color: "#FFD43B"}}></i>
                </div>
            </div>
            
        </div>
  );
};

export default Navigation;