import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About/About";
import Products from "./Products.js/Products";
import Auth from "./Auth/Auth";
import UserContext from "./Context/UserContext";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";
import SlideShow from "./utils/SlideShow/SlideShow";
import styled from "styled-components";

function App() {
  let color = "gray";
  const Title = styled.h1`
    color: ${color};
    height: auto;
    overflow-y: scroll;

    width: 100vh;
    text-align: center;
    font-size: 400px;
  `;

  return (
    <div className="App example">
      <UserContext>
        <BrowserRouter>
          {window.location.pathname != "/auth" ? (
            <Header className="header" />
          ) : null}
          <Routes>
            <Route path="/auth" element={<Auth />} />

            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/product" element={<Product />} />

            {/* <Route path="/producs/" element={<Products />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />

            <Route
              path="/products"
              element={<Products data={{ width: "33vh", height: "45vh" }} />}
            />

            <Route path="/*" element={<h1>wfsfsefes</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </div>
  );
}

export default App;
