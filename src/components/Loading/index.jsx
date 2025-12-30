import React from "react";
import { Spinner, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <>
      <section className={styles.loadingOverlay}>
        <Container
          fluid
          className="m-0 p-0 w-100 h-100 d-flex flex-column justify-content-center align-items-middle"
        >
          <picture>
            <img src={Logo} alt="Logo" loading="lazy" decoding="async" />
          </picture>
          <Spinner
            animation="border"
            role="status"
            variant="tertiary"
            className="mx-auto mt-5"
          >
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        </Container>
      </section>
    </>
  );
};

export default Loading;
