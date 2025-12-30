import styles from "./Header.module.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import MobileNavbar from "../MobileNavbar";

export default function Header() {
  return (
    <>
      <header>
        <section id="menuDesktop" className={styles.menuDesktop}>
          <div className={styles.barraSuperior}>
            <Container className="text-center">
              <h4>Frete Grátis com o Cupom da Shopee</h4>
            </Container>
          </div>
          <div className={styles.barradeBusca}>
            <Container>
              <Row>
                <Col>
                  <Link as={Link} to="/" href="/" type="brand">
                    <picture className={styles.logo}>
                      <img src="/src/assets/logo.png" alt="Logo" />
                    </picture>
                  </Link>
                </Col>
                <Col className="text-center, d-flex, flex-row, justify-content-center, align-items-center align-self-center">
                  <div className={styles.busca}>
                    <input
                      type="text"
                      placeholder="O que vocé procura?"
                      className={styles.inputBusca}
                    />
                    <button className={styles.botaoBusca}>
                      <FaSearch />
                    </button>
                  </div>
                </Col>
                <Col className="d-flex flex-row justify-content-right text-end align-items-right align-self-center">
                  <div className={styles.favoritos}>
                    <Link
                      as={Link}
                      to="/listadedesejos"
                      href="/listadedesejos"
                      type="button"
                      className={styles.botaoFavoritos}
                    >
                      <FaRegHeart />
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className={styles.barraMenu}>
            <Container>
              <Nav
                expand="lg"
                className="text-center d-flex flex-row align-content-center justify-content-center"
              >
                <Navbar sticky="top">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="Categorias"
                    id="basic-nav-dropdown"
                    className="dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Categoria 1
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Categoria 2
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Categoria 3
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Categoria 4
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/listadedesejos">
                    Listadedesejos
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Perguntasfrequentes">
                    Perguntasfrequentes
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Grupos">
                    Grupos
                  </Nav.Link>
                </Navbar>
              </Nav>
            </Container>
          </div>
        </section>
        <section id="menuMobile" className={styles.menuMobile}>
          <MobileNavbar />
        </section>
      </header>
    </>
  );
}
