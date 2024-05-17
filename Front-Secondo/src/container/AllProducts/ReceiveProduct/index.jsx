import React from "react";
import Layout from "../../../components/Layout";
import ItemCardReceive from "../../../components/UI/ItemCard/Receive";

import { useDispatch, useSelector } from "react-redux";

import "../index.css";
import "../../../styles.css";

import "../../../components/UI/Button/index.css";

function AllProductRecieve() {
  const product = useSelector((state) => state.product);

  const renderProductsReceive = (products) => {
    let myProducts = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if (product.verify === true) {
          myProducts.push({
            _id: product._id,
            slug: product.slug,
            img: product.productPictures,
            title: product.name,
            province: "กรุงเทพ",
            // children: category.children.length > 0 && renderCategories(category.children)
          });
        }
      }
      return myProducts;
    }
  };

  const itemReceive = product.productsReciever
    ? renderProductsReceive(product.productsReciever)
    : [];

  //แบ่ง 4
  const fourItemReceive = itemReceive.reduce((acc, curr, index) => {
    const fourIndex = Math.floor(index / 4);
    if (!acc[fourIndex]) {
      acc[fourIndex] = [];
    }
    acc[fourIndex].push(curr);
    return acc;
  }, []);
  // console.log("List array" ,fourItemInterest);

  return (
    <Layout>
      <div className="container-all-product">
        <label className="label-all-product kanit-Display-Large-R">
          สินค้ารับบริจาค
        </label>
        {fourItemReceive.map((group, groupIndex) => (
          <div className="all-group-card" key={`group-${groupIndex}`}>
            {group.map((item, index) => (
              <ItemCardReceive
                key={index}
                img={item.img}
                _id={item._id}
                title={item.title}
                province={item.province}
                // price={item.price}
                // credit={item.credit}
              />
            ))}
          </div>
        ))}
        <div className="all-group-card"></div>
      </div>
    </Layout>
  );
}

export default AllProductRecieve;
