import styles from "./Footer.module.css";
import {
  Container,
  Button,
  Nav,
  Row,
  Col,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import baixeappshopee from "../../assets/baixe-app-shopee.png";
import Logo from "../../assets/logo.png";
import Shopee from "../../assets/shopee-logo-300x96.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <>
      <footer>
        {/* Banner da Shopee  */}
        <section className={styles.barraShopee}>
          <Container fluid id="barraShopee" className="m-0 p-0 bg-orange">
            <Link as={Button} to="/" href="/" type="Button">
              <picture>
                <img
                  src={baixeappshopee}
                  alt="Baixe o App Shopee"
                  loading="lazy"
                  decoding="async"
                  className="w-100 sm:w-50"
                />
              </picture>
            </Link>
          </Container>
        </section>

        <div className="footer bg-dark text-white h-100 py-4">
          {/* Corpo do footer  */}
          <section>
            <Container>
              <Row>
                <Col xs={12} md={4} className="my-5 text-center">
                  <Navbar.Brand href="#home">
                    <picture>
                      <img
                        src={Logo}
                        alt="logo"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </Navbar.Brand>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  className="my-5 d-flex flex-column justifify-content-center align-items-center"
                >
                  <h3>Links Uteis</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        href="/perguntasfrequentes"
                        className="text-white text-decoration-none"
                      >
                        Perguntas Frequentes
                      </a>
                    </li>
                    <li>
                      <a
                        href="/listadedesejos"
                        className="text-white text-decoration-none"
                      >
                        Lista de Desejos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Link"
                        className="text-white text-decoration-none"
                      >
                        Política de Privacidade
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Link"
                        className="text-white text-decoration-none"
                      >
                        Termos e Condições
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  className="my-5 text-center d-flex flex-column"
                >
                  {/* Disclaimer  */}
                  <p>Nossos produtos são vendidos e entregues pela</p>
                  <a
                    href="https://shopee.com.br/"
                    target="_blank"
                    rel="noreferrer"
                    alt="Shopee"
                  >
                    <picture>
                      <img
                        src={Shopee}
                        alt="Shopee"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </a>
                  <strong>Baixe o App</strong>
                </Col>
              </Row>
            </Container>
          </section>
        </div>

        {/* Bottom Bar  */}
        <section className={styles.bottomBar}>
          <Container>
            <p>
              &copy; {currentYear()} <strong>Mega Ofertas</strong> - Promo e
              Kids. Todos os direitos reservados - Powered by Suprema
            </p>
          </Container>
        </section>
      </footer>
    </>
  );
}
