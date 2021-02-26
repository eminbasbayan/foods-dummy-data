import React from "react";
import { useParams, Link } from "react-router-dom";
import Foods from "../../data/mySpecialData.json";

function ProductDetail(props) {
  const params = useParams();
  const { foodID } = params;

  const food = Foods.foods
    .filter((item) => item.id === Number(foodID))
    .map((item) => (
      <div key={item.id}>
        <img src={item.img} alt="" />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    ));

  return (
    <>
      <nav aria-label="breadcrumb" className="bg-light mt-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/foods">Foods</Link>
          </li>
          <li className="breadcrumb-item">Detail</li>
        </ol>
      </nav>
      <div className="text-light">{food}</div>
    </>
  );
}

export default ProductDetail;
