import React from "react";
import MenuCardList from "../components/ui/MenuCardList";

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="home__container">
        <MenuCardList />
      </div>
    </div>
  );
};

export default Home;
