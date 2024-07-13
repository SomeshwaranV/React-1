import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Home } from './router/Home';
import { About } from './router/About';
import { Service } from './router/Service';
import { Contact } from './router/Contact';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      
    <>
      
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home" text="dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
          <Button variant="light">Enter</Button>{' '}
          </Col>
        </Row>
      </Form>
        </Container>
        
      </Navbar>

      <br />
      
    </>
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
