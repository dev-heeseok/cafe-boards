import React from "react";
import MenuCard from "./MenuCard";
import { useCardList } from "../../hooks/useCardList";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const MenuCardList = () => {
  const cardList = useCardList();

  return (
    <Container fluid>
      <Row className="justify-content-center">
        {cardList.map((card, idx) => (
          <div key={idx} className="mb-2 col-10 col-sm-6 col-lg-5 col-xl-3">
            <MenuCard url={card.url} title={card.title} text={card.text} />
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default MenuCardList;
