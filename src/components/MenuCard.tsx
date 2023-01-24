import React from "react";
import Card from "react-bootstrap/Card";

type CardProp = {
  url: string;
  title: string;
  text: string;
};

const MenuCard = ({ url, title, text }: CardProp) => {
  if (!url) return null;

  return (
    <Card>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
