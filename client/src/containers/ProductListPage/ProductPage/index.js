import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../../../components/UI/Card";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { page } = product;

  console.log(product);
  useEffect(() => {
    const params = getParams(props.location.search);
    const payload = {
      params,
    };
    dispatch(getProductPage(payload));
  }, []);
  return (
    <div style={{ margin: " 0 10px" }}>
      <h3>{page.title}</h3>
      <Carousel renderThumbs={() => {}}>
        {page.banners &&
          page.banners.map((banner, index) => (
            <a
              key={index}
              style={{ display: "block" }}
              href={banner.navigateTo}>
              <img src={banner.img} alt="" />
            </a>
          ))}
      </Carousel>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "10px 0",
        }}>
        {page.products &&
          page.products.map((product, index) => (
            <Card
              key={index}
              style={{ width: "300px", height: "200px", margin: "5px" }}>
              <img
                style={{ width: "80%", height: "90%", padding: "5px" }}
                src={product.img}
                alt=""
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;