import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuCard from "../components/MenuCard";
import { useCardList } from "../hooks/useCardList";

const Home = () => {
  const cardInfo = useCardList();

  return (
    <>
      {/* <h1 className="text-center text-success my-5">Bootstrap Cards</h1> */}
      <Container>
        <Row>
          {cardInfo.map((card) => (
            <Col className="user-margin" sm="4">
              <MenuCard url={card.url} title={card.title} text={card.text} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
