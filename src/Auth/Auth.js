import React, { useEffect, useRef, useState } from "react";
import "./auth.css";
import Input from "../Input/Input";
import Header from "../Header/Header";

export default function Auth() {
  let initialState = {
    name: "",
    email: "",
    password: "",
    userName: "",
  };
  let text = useRef("");
  const baseURL = "http://localhost:3001/";
  const [user, setUser] = useState(() => initialState);
  const [btn, setbtn] = useState(() => "Login");
  const [isLogin, setLogin] = useState(() => false);
  const signUp = document.getElementById("signUpBtn");
  const status = document.getElementById("status");
  const title = document.getElementById("title");

  const formError = useRef("");
  // use for initialize at the time of lod the page
  useEffect(() => {
    setLogin(true);
    text.current.innerText = "SignUp now";
  }, []);

  // for control form
  function handleChage(e) {
    console.log(window.location.pathname);

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  // action at the time of click of button
  function handleClick(e) {
    e.preventDefault();

    if (!isLogin) {
      title.innerText = "Welcome";
      status.innerText = " Login";
      signUp.innerText = " Already have an account";
      setLogin(true);
      setbtn("Sign Up");
    } else {
      console.log("inside login");

      // text at the bottom
      signUp.innerText = "Don't have an account";
      title.innerText = "Nice to see you again";

      setbtn("Login");
      text.current.innerText = " SignUp now";
      setLogin(false);
    }
  }
  function handleSubmit() {
    const data = {
      email: user.email,
      username: user.name,
      password: user.password,
    };

    let URI = "ecomm/api/v1/signin";
    // for signup request
    if (btn === "Sign Up") {
      if (user.email === "" || user.name === "" || user.password === "") {
        showError("signUp");
        return;
      }
      URI = "ecomm/api/v1/signup";
      fetch(baseURL + URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          formError.current.innerText = response.message;
          clearError();
        });
    }
    // for login request
    else {
      if (user.email === "" || user.password === "") {
        showError("login");
        return;
      }
      fetch(baseURL + URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          formError.current.innerText = response.message;
          clearError();
          setDataToLocalStorage(response);
          console.log(response);
        });
    }
    // for clearing the error
    function clearError() {
      setTimeout(() => {
        formError.current.innerText = "";
      }, 5000);
    }
    // for show the error
    function showError(type) {
      if (user.name === "" && type == "signUp") {
        formError.current.innerText = "name should not be empty";
      } else if (user.email === "") {
        formError.current.innerText = "email id should not be empty";
      } else if (user.password === "") {
        formError.current.innerText = "password should not be empty";
      }
      clearError();
    }

    // for data add on local storage
    function setDataToLocalStorage(data) {
      localStorage.setItem("email", data.data.email);
      localStorage.setItem("userId", data.data.id);
      localStorage.setItem("token", data.token);
      localStorage.setItem("userName", data.data.username);
    }
  }
  return (
    <div className="container">
      <figure className="left">
        <img src={require("../utils/Top-Ecommerce-Websites.jpg")} />
      </figure>
      <main className="right">
        <div className="mainContainer">
          <div className="logo"></div>
          <p id="title">Nice to see you again</p>
          <div className="formDiv">
            <form>
              {btn == "Sign Up" ? (
                <Input
                  id="nameLabel"
                  info={{
                    label: "Name",
                    name: "name",
                    type: "text",
                    handleChage,
                    placeholder: "Name",
                    vale: user.name,
                  }}
                />
              ) : null}

              <Input
                info={{
                  label: "Email",
                  name: "email",
                  type: "email",
                  handleChage,
                  placeholder: "email",
                  vale: user.email,
                  widht: "50px",
                }}
              />
              <Input
                info={{
                  label: "Password",
                  name: "password",
                  type: "password",
                  handleChage,
                  placeholder: "password",
                  vale: user.password,
                }}
              />

              <a href="google.com">
                <span>Forget Password?</span>
              </a>
            </form>
          </div>
          <div>
            <button className="Abtn" type="button" onClick={handleSubmit}>
              {btn}
            </button>
          </div>
          <div className="signUp">
            <span id="signUpBtn">Don't have an account? </span>
            <a
              id="status"
              href="google.com"
              onClick={handleClick}
              ref={text}
            ></a>
          </div>
          <div className="error" ref={formError}></div>
        </div>
      </main>
    </div>
  );
}
