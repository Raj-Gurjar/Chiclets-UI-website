import React from "react";
import YellowBtn from "../UI/Buttons/YellowBtn";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

export default function ProductCard1({ data }) {
  return (
    <div className="product-card-container">
      <div className="product-img-container">
        <img src={data?.product_img} alt={`${data?.name}-img`} />
      </div>

      <div className="product-title">
        <h2 className="capitalize">{data?.name}</h2>
      </div>
      <div>
        <Link to={`/products/${data?.id}`}>
          <YellowBtn btn_text={"buy now"} />
        </Link>
      </div>
    </div>
  );
}
