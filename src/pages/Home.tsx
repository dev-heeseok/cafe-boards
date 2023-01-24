import React from "react";
import MenuCard from "../components/MenuCard";

const Home = () => {
  const cardInfo = [
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
    {
      url: `${process.env.PUBLIC_URL}/images/bread/pexels-karolina-grabowska-4197905.jpg`,
      title: "Bread",
      text: "Bread Desc",
    },
  ];

  return (
    <>
      {/* <h1 className="text-center text-success my-5">Bootstrap Cards</h1> */}
      <div className="container">
        <div className="row">
          {cardInfo.map((card) => (
            <div className="col-md-5">
              <MenuCard url={card.url} title={card.title} text={card.text} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
