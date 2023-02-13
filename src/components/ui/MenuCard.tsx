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
    <Card className="main__menu__card">
      <Card.Img variant="top" src={url} className="main__menu__card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;
