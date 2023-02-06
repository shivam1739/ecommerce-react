import Header from "../Header/Header";
import "./home.css";
import styled from "styled-components";

import SlideShow from "../utils/SlideShow/SlideShow";
export default function Home() {
  return (
    <>
      <div className="home">
        <figure className="fig">
          <aside className="leftHresoSection">
            <h1 className="offerText">
              Exclusive Deals of Furniture Collection
            </h1>
            <p className="pera">
              Explore different categories. Find the best deals.
            </p>
            <div className="btnContainer">
              <button className="Hbtn">Shop now</button>
            </div>
          </aside>
          <section className="rightHero">
            <SlideShow />
          </section>
        </figure>
        <div className="products"></div>
      </div>
    </>
  );
}
