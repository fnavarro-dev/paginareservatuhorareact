import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import keepelogo from '../assets/img/logofinal.png';



const NavBarComponent = () => {
    return (
        // <div class="container-fluid">
        //   <nav class="navbar navbar-expand-md navbar-dark bg-black">
        //     <div class="container-fluid">
        //       <a href="/" class="navbar-brand"><img src="logo21.png" alt=""/></a>
        //       <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavegacion">
        //         <span class="navbar-toggler-icon"></span>
        //       </button>
        //       <div id="MenuNavegacion" class="collapse navbar-collapse">
        //         <ul class="navbar-nav mx-auto">
        //           <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#"  >Regístrate</a></li>
        //           <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#">Inicia sesión</a></li>
        //           <li class="nav-item"><a class="nav-link text-light fs-3 m-2 font-monospace" href="#">Quienes somos</a></li>
        //         </ul>
        //       </div>
        //     </div>
        //   </nav>
        // </div>


      <Navbar bg="warning" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="../assets/img/logofinal.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Keepe
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Reservar</Nav.Link>
            <Nav.Link href="#features">Publicar</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Soporte</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Iniciar Sesión
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default NavBarComponent;