import styled from "styled-components";
export default function Button({ data }) {
  var { name, color, width, height, type, onclick, bgcolor } = data;
  console.log(name);
  return (
    <button
      type={type}
      onClick={onclick}
      style={{
        color: color,
        width: width,
        height: height,
        backgroundColor: bgcolor,
        fontSize: "15px",
        cursor: "pointer",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {name}
    </button>
  );
}
