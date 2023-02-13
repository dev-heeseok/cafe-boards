import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuCard from "./MenuCard";
import { useCardList } from "../../hooks/useCardList";

const MenuCardList = () => {
  const cardList = useCardList();

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        {cardList.map((card, idx) => (
          <div key={idx} className="mb-2 col-sm-6 col-md-4 col-lg-3">
            <MenuCard url={card.url} title={card.title} text={card.text} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default MenuCardList;
