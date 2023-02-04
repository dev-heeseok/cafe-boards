import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import MenuCard from "./MenuCard";
import { useCardList } from "../hooks/useCardList";

const MenuCardList = () => {
  const cardInfo = useCardList();

  return (
    <Container fluid>
      <Row>
        {cardInfo.map((card, idx) => (
          <Col
            key={idx}
            className="mb-2 main__menu__card-list"
            sm={6}
            md={4}
            lg={3}
          >
            <MenuCard url={card.url} title={card.title} text={card.text} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuCardList;
