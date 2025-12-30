import { Container, Row, Col, Button } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import styles from "./Product.module.css";
import Sabonete from "../../assets/saboneteJohnsons.webp";
import { Transition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";

export const Product = () => {
  const [showProduct, setShowProduct] = useState(false);
  const nodeRef = useRef(null); // Ref para o Transition

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProduct(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Container>
        <Transition
          nodeRef={nodeRef}
          in={showProduct}
          timeout={500}
          unmountOnExit
        >
          {(state) => (
            <Row ref={nodeRef} className={`fade-in-up fade-in-up-${state}`}>
              <Col xs={6} md={4} className="my-3">
                <picture>
                  <img
                    src={Sabonete}
                    alt="Thumbnail"
                    className="img-fluid w-100"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </Col>
              <Col xs={6} md={8} className="my-3">
                <h2 className={styles.titulo}>
                  Kit 2 Sabonete Líquido Johnsons Baby Hora do Sono Refil 180ml
                </h2>
                <h4 className="text-left text-danger">R$ 33,18</h4>
                <span>
                  <Button className="btn btn-md me-2">Comprar</Button>
                  <Button>
                    <FaRegHeart />
                  </Button>
                </span>
              </Col>
            </Row>
          )}
        </Transition>
      </Container>
    </section>
  );
};

export default Product;
