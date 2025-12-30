import { FiMenu, FiSearch } from "react-icons/fi";
import styles from "./MobileNavbar.module.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSearch = () => {
    setCollapsed(!collapsed);
    onclick((document.querySelector(".inputBusca").style.display = siLinkedin));
  };

  return (
    <>
      <section className={styles.barraMobile}>
        <Container>
          <Navbar
            expand="lg"
            expanded={expanded}
            className="py-2 text-white mb-3"
            sticky="top"
          >
            {/* Menu Hamburguer - Esquerda */}
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleToggle}
              className="border-0"
            >
              <FiMenu className={styles.fimenuicon} />
            </Navbar.Toggle>

            {/* Logo - Centro */}
            <Navbar.Brand href="/" className="text-center">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="img-fluid w-50"
                loading="lazy"
              />
            </Navbar.Brand>

            {/* Ícone de Busca - Direita */}
            <div className="d-flex align-items-center">
              {/* Campo de busca retrátil para o menu mobile  */}
              <input
                type="text"
                placeholder="O que vocé procura?"
                value={""}
                className={styles.inputBusca}
                style={{ display: collapsed ? "block" : "none" }}
              />
              <FiSearch
                as={Button}
                to="#"
                variant="link"
                onClick={handleSearch}
                className={styles.fisearchicon}
              />
            </div>

            {/* Offcanvas para o menu mobile */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={expanded}
              onHide={handleToggle}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/" onClick={handleToggle}>
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id="basic-nav-dropdown"
                    className="dropdown"
                  >
                    <NavDropdown.Item as={Link} to="#action/3.1">
                      Categoria 1
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action/3.2">
                      Categoria 2
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="#action/3.3">
                      Categoria 3
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="#action/3.4">
                      Categoria 4
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    as={Link}
                    to="/listadedesejos"
                    onClick={handleToggle}
                  >
                    Lista de Desejos
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/perguntasfrequentes"
                    onClick={handleToggle}
                  >
                    Perguntas Frequentes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/grupos" onClick={handleToggle}>
                    Grupos
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Navbar>
        </Container>
      </section>
    </>
  );
}
