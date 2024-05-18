import React, { useState, useEffect } from "react";
import "./index.css";

import cancel from "../../../../icon/cancel.png";
import { getUserproduct } from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";
import { generatePublicUrl } from "../../../../urlConfig";

const ModalSelectItem = (props) => {
  if (!props.open) return null;

  const handleProductSelect = (selectedProduct) => {
    props.onProductSelect(selectedProduct);
    props.onClose();
    // console.log(selectedProduct)
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUserproduct());
  // }, []);
  const user = useSelector((state) => state.user);
  const userSellerProducts = user.userSellerProducts;

  const renderUserSeller = (sellerProducts) => {
    let userSell = [];
    if (sellerProducts && Array.isArray(sellerProducts)) {
      for (let sellerProduct of sellerProducts) {
        userSell.push({
          _id: sellerProduct._id,
          slug: sellerProduct.slug,
          img: sellerProduct.productPictures[0].img,
          name: sellerProduct.name,
          price: sellerProduct.price,
          carbonCredits: sellerProduct.carbonCredits,
          description: sellerProduct.description,
          status: sellerProduct.status,
          createdAt: sellerProduct.createdAt.split("T")[0],
          icons: [],
        });
        // console.log(product)
      }
      return userSell;
    }
  };

  const itemSellProduct = userSellerProducts
    ? renderUserSeller(userSellerProducts)
    : [];

  return (
    <div className="overlay">
      <div className="modal-container-select-product">
        <div className="close-button" onClick={props.onClose}>
          <img src={cancel} className="cancel-icon" />
        </div>

        <div className="model-content">
          <div className="product-select">
            <div className="text-title-desc-modal">
              <p className="kanit-paragraphBig">{props.label}</p>
            </div>

            <div className="kanit-paragraphMedium product-list-title">
              <p>รายการสินค้า</p>
              <p>ราคา</p>
            </div>

            <div className="product-select-column">
              {itemSellProduct.map((item, index) => (
                <div
                  className="select-list-product kanit-paragraphSmall"
                  key={index}
                  onClick={() => handleProductSelect(item)}
                >
                  <img src={item.img ? generatePublicUrl(item.img) : ""} className="img-product-select" />
                  <p className="title-product-select">{item.name}</p>
                  <p className="price-product-select">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSelectItem;
