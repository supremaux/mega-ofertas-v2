import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import Banner from "../../assets/banner01.jpg";
import Product from "../../components/Product";
import { TiShoppingCart } from "react-icons/ti";

export default function Home() {
  return (
    <main>
      {/* banner normal  */}
      <section>
        <Container fluid className={styles.banner + "m-0 p-0 md:mt-0 "}>
          <picture>
            <img
              src={Banner}
              alt="Banner"
              loading="lazy"
              decoding="async"
              className="img-fluid w-100"
            />
          </picture>
        </Container>
      </section>

      {/* produtos  */}
      <section className={styles.produtos}>
        <Container>
          <h1 className="text-center my-5 pb-3 border-1 border-bottom border-danger w-50 mx-auto">
            <TiShoppingCart /> Produtos
          </h1>

          {/* Lista de produtos em duas colunas  */}
          <Row>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
            <Col xs={12} md={6}>
              <Product />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
