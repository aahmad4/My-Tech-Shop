import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Alibaba Shop</h1>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
