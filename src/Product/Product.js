import styled from "styled-components";
import Button from "../component/Button";

export default function Product({}) {
  const ProductWraper = styled.div`
    width: 90vw;
    height: auto;
    display: flex;
    min-height: 100vh;
    // align-item: center;
    padding: 10rem 5rem;
    justify-content: center;

    .image {
      widht: 50%;
      height: 100%;
      align-item: center;
      justify-content: center;
    }
    .prod-det {
      widht: 50%;
      height:100%
      margin-top:0px
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      h3{
        text-align:start;
        font-size:2rem;
        font-weight: 800;
        

      }
      p{
        width:100%
        height: auto;
      }
      .rating{
        text-align:start;

      }
      .cost{
        text-align:start;
        height:4rem;
  font-weight: 600;
  font-size:2rem
        
      }
      
      
    }
    .btnn{
      width:40%;
      display:flex;
      height:3rem;
      flex-direction: row;
      justify-content: space-between;
     
     
    }
    
  `;
  return (
    <ProductWraper>
      <section className="image">
        <img src="https://m.media-amazon.com/images/I/514NPRZ1AQL._SX522_.jpg"></img>
      </section>
      <section className="prod-det">
        <h3> Motoroloa buds </h3>
        <div className="rating">rating</div>
        <p>
          nLr16NEouvDN7ez083tV71rvjLWjzK0Ys0vdhxPfj g3Y72va
          5j2texwzXMeA5rhqINxC5TrIkvA5 Xz EL4VjiTmKwOnMVv8AjL5jd48b5ja
        </p>
        <div className="cost">
          <spna>&#8360;</spna>
          <span> 156565</span>
          <span> 21694941</span>
        </div>
        <div className="btnn">
          <Button
            data={{
              name: "Add To Cart",
              width: "40%",
              height: "3rem",
              type: "click",
              color: "black",
              bgcolor: "#70908b",
            }}
          ></Button>
          <Button
            data={{
              name: "Buy Now",
              width: "40%",
              height: "3rem",
              type: "click",
              color: "black",
              bgcolor: "#70908b",
            }}
          ></Button>
        </div>
      </section>
    </ProductWraper>
  );
}
