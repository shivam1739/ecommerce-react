import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import "./header.css";
import styled from "styled-components";
// import { IconName } from "react-icons/a";

export default function Header() {
  const { headerName } = useContext(userContext);
  const HeaderWrapper = styled.header``;
  console.log(headerName);
  return (
    <header className="header">
      <section className="leftSec">
        <h2>Ecommerce</h2>
      </section>
      <section className="midSec">
        <li className="mLi">
          <NavLink className="li" to="/">
            Home
          </NavLink>
        </li>
        <li className="mLi">
          <NavLink to="/products" className="li">
            Products
          </NavLink>
        </li>
        <li className="mLi">
          <NavLink to="/categories" className="li">
            Categories
          </NavLink>
        </li>
        <li className="mLi">
          <NavLink to="/about" className="li">
            About
          </NavLink>
        </li>
        <li className="mLi">
          <NavLink to="/contact" className="li">
            Contact Us
          </NavLink>
        </li>
      </section>
      <section className="rightSec">
        <li>S</li>
        <li>cart</li>
        <li style={{ fontWeight: "700" }}>{headerName}</li>
      </section>
    </header>
  );
}
