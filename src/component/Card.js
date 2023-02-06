import "./product.css";
import styled from "styled-components";
export default function Card({ data }) {
  console.log(data);
  const Card = styled.div`
    /* padding: 10px; */
    margin: 5px;
    padding: 5px;
    width: ${data.width};
    height: ${data.height};
    /* left: 20px; */
    border-radius: 16px;
    /* padding: 60px, 40px, 60px, 40px;
    gap: 40px; */

    background-color: #caf3e5;
    .cardBody {
      padding: 25px;
    }
    .cardImg {
      padding: 5px;
      margin: 0px;
      width: 95%;
      box-shadow: none;
      height: 40%;
      /* top: 84px;
      left: 40px; */
    }
    .rating {
      width: 100%;
      text-align: left;
      gap: 0px;
    }
    .proName {
      margin-top: 0px;
      width: 100%;
      text-align: start;
    }
    .desc {
      margin-top: 0px;
      height: inherit;
      font-size: 12px;
    }
    .btn {
      margin: 0px;
      height: 20%;
    }

    button {
      height: 100%;
      width: 60%;
    }
  `;

  return (
    <Card>
      <img
        className="cardImg"
        src={
          "data:image/jpeg;base64,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"
        }
        alt="not found"
      />
      <div className="cardBody">
        <h3 className="proName">Apple</h3>
        <div className="rating"> rating</div>
        <p className="desc">6iL8S27OyotCHEY9k3MRHh7Q2E</p>

        <button className="btn">add to cart</button>
      </div>
    </Card>
  );
}
