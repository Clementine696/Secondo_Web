import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../../components/Layout";
import ItemCard from "../../../components/UI/ItemCard";
import HDivider from "../../../components/UI/DividerHorizontal";
import VDivider from "../../../components/UI/DividerVentical";
import ModalS from "../../../components/Modal/success";
import ModalSale from "../../../components/Modal/OfferSale/sale-score";
import ModalSelectItem from "../../../components/Modal/OfferSale/selectProduct";
import ModalConfirmItem from "../../../components/Modal/OfferSale/confirmProduct";
import Pathway from "../../../components/UI/Pathway";

import success from "../../../icon/success-check.png";
import tag from "../../../icon/tag.png";
import productpic from "../../../../public/images/product.jpg";

import "../../../components/UI/Button/index.css";

import favBold from "../../../icon/like-bold.png";
import fav from "../../../icon/like.png";
import chevronRightT from "../../../icon/chevron-right-T.png";

import { useDispatch, useSelector } from "react-redux";
import { getBuyerProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";

const Myproduct = [
  {
    img: productpic,
    label:
      "GATERON Milky Yellow PRO Switch (10ชิ้น/ซอง) 5 pin สวิตช์ Linear สำหรับ คีย์บอร์ด Mechanical keyboard Linear Switch",
    price: "0",
  },
  { label: "สินค้าชิ้นที่ 1", price: "1" },
  { label: "สินค้าชิ้นที่ 2", price: "2" },
  { label: "สินค้าชิ้นที่ 3", price: "3" },
];

let productDetail = [
  {
    img: [
      // "/images/iPhone_15_Pro_Blue_Titanium_1.png",
      // "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
      // "https://helios-i.mashable.com/imagery/reviews/02acfjrNcFF60tTa2SpGTsu/hero-image.fill.size_1248x702.v1695728230.jpg",
      // "https://i.guim.co.uk/img/media/3ccc410f49f75f456340f21c37ecf0ef31ae2bc1/368_82_2608_1565/master/2608.jpg?width=1200&quality=85&auto=format&fit=max&s=ec1eda86ea625851c6b39f01fbdeb699",
      // "https://ishop.com.uy/wp-content/uploads/2022/05/senales-de-que-necesitas-llevar-tu-iphone-a-reparacion-1080x675.jpg",
    ],
    productName: "",
    productSeller: "",
    province: "",
    productPrice: "",
    productCredit: 20,
  },
];

const pathway = [
  { label: "หน้าหลัก", value: 1, nevigate: "/" },
  { label: "รับซื้อ", value: 2, nevigate: "/search" },
  { label: "เสื้อผ้า", value: 3, nevigate: "" },
  { label: "เสื้อ COTTON แบรนด์ญี่ปุ่น", value: 4, nevigate: "/product/buyer" },
];

function Productsale() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  // console.log(_id)

  useEffect(() => {
    // const { productId } = props.params.match;
    // const location = useLocation();
    // const _id = location.pathname.split("/")[2];
    console.log(productId);
    const payload = {
      params: {
        productId,
      },
    };

    dispatch(getBuyerProductDetailsById(payload));
  }, []);

  //Modal
  const [openModel, setOpenModel] = useState(false);

  const [openModelSale, setOpenModelSale] = useState(false);

  const [openModalSelectItem, setOpenModalSelectItem] = useState(false);

  const [openModelConfirmItem, setOpenModelConfirmItem] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setOpenModalSelectItem(false); // Close the select product modal
    setOpenModelConfirmItem(true); // Open the confirm product modal
    // console.log(product);
  };

  //scroll
  useEffect(() => {
    if (
      openModel ||
      openModelSale ||
      openModalSelectItem ||
      openModelConfirmItem
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModel, openModelSale, openModalSelectItem, openModelConfirmItem]);

  console.log(openModel);

  // let productDetail = [];

  console.log("Item in web");
  // console.log(product.productDetails)
  const productFromApi = product.productDetails;
  console.log(productFromApi);
  let image_list = [];
  const productImage = productFromApi.productPictures;
  // console.log(productImage)
  // console.log(productImage.length)
  if (
    product.productDetails.productPictures &&
    Array.isArray(product.productDetails.productPictures)
  ) {
    productImage.map((item, index) => {
      console.log(item.img);
      image_list.push(item.img);
      // console.log(image[index])
    });
  }

  // console.log('new image list :')
  console.log(image_list);
  // for(let i=0;i<product.productDetails.productPictures.length;i++){
  //   image.append(product.productDetails.productPictures[i].img);
  //   console.log(image[i])
  if (productImage != null) {
    const productDetail = [
      {
        img: image_list,
        // img: [
        //   "/images/iPhone_15_Pro_Blue_Titanium_1.png",
        //   "https://images.macrumors.com/t/TkNh1oQ0-9TnnBjDnLyuz6yLkjE=/1600x0/article-new/2023/09/iPhone-15-General-Feature-Black.jpg",
        //   "https://helios-i.mashable.com/imagery/reviews/02acfjrNcFF60tTa2SpGTsu/hero-image.fill.size_1248x702.v1695728230.jpg",
        //   "https://i.guim.co.uk/img/media/3ccc410f49f75f456340f21c37ecf0ef31ae2bc1/368_82_2608_1565/master/2608.jpg?width=1200&quality=85&auto=format&fit=max&s=ec1eda86ea625851c6b39f01fbdeb699",
        //   "https://ishop.com.uy/wp-content/uploads/2022/05/senales-de-que-necesitas-llevar-tu-iphone-a-reparacion-1080x675.jpg",
        // ],
        productName: productFromApi.name,
        productSeller: productFromApi.createBy.firstName,
        province: "กรุงเทพ",
        productDesc: productFromApi.description,
      },
    ];
  }
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  let spec = [];
  // if(product.productDetails.specifications){
  //   spec = product.productDetails.specifications.split(",")
  // }

  const [isFav, setIsFav] = useState(false);
  //transition
  const [fade, setFade] = useState(false);

  // console.log("isout:", isFav);

  const handleFavClick = () => {
    //change state
    setIsFav(!isFav);
    setFade(true);

    // console.log("isin:", isFav);

    setTimeout(() => {
      setFade(false);
    }, 300);

    if (isFav) {
      console.log("Unlike");
    } else {
      console.log("Like");
    }
  };

  useEffect(() => {
    if (
      product.productDetails.productPictures &&
      product.productDetails.productPictures.length > 0
    ) {
      setSelectedImg(product.productDetails.productPictures[0].img);
    }
  }, [product.productDetails.productPictures]);

  const [frameSmallImgs, setFrameSmallImgs] = useState("");
  const [selectedImg, setSelectedImg] = useState("");

  const handleImgClick = (img) => {
    setSelectedImg(img);
    setFrameSmallImgs(img);
  };

  return (
    <Layout>
      <div className="background-product-page">
        <div className="background-product-page-pathway">
          <Pathway pathwayList={pathway} />
        </div>

        <div className="product-page-item-details">
          <div className="product-page-item-details-group-picture-seller">
            <div className="product-page-item-details-group-picture-seller-big-picture">
              <img
                className="big-img" //TODO:
                // src={product.productDetails.productPictures ? generatePublicUrl(product.productDetails.productPictures[0].img) : "/images/iPhone_15_Pro_Blue_Titanium_1.png"}
                src={selectedImg ? generatePublicUrl(selectedImg) : ""}
              />
            </div>
            <div className="product-page-item-details-group-picture-seller-small-picture">
              <div className="small-img-container">
                {image_list.map((img, index) => (
                  <div key={index} className="col-small-pic">
                    <img
                      className={`small-img-product ${
                        frameSmallImgs === img ? "selected" : ""
                      }`}
                      src={
                        product.productDetails.productPictures
                          ? generatePublicUrl(img)
                          : ""
                      }
                      onClick={() => handleImgClick(img)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="product-right-content">
            <div className="product-page-item-details-group-item-description">
              <div className="product-title-seller-name">
                <div className="kanit-paragraphMedium product-title">
                  {product.productDetails.name}
                </div>
                <Link className="seller-product" to="#seller">
                  <div className="kanit-paragraphSmall">
                    รับซื้อโดย &nbsp;{" "}
                    {product.productDetails.createBy
                      ? product.productDetails.createBy.firstName
                      : null}
                  </div>
                </Link>
              </div>

              <div className="divider-horz-2"></div>

              <div className="product-button-section">
                <button
                  className="btn-small-primary kanit-paragraphMedium"
                  onClick={() => setOpenModelSale(true)}
                >
                  เสนอขาย
                </button>
                <div>
                  <button className="btn-fav" onClick={handleFavClick}>
                    <img
                      src={isFav ? favBold : fav}
                      className={`btn-fav-icon ${
                        fade ? "fade-out" : "fade-in"
                      }`}
                      alt="Favorite"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-page-item-description">
              <div className="product-description-title kanit-paragraphMedium">
                รายละเอียดสินค้า
              </div>
              <p className="kanit-paragraphtextMedium">
                {product.productDetails.description}
              </p>
            </div>
          </div>
        </div>

        <div className="seller-detail-in-product">
          <Col className="seller-profile-name">
            <div
              style={{
                backgroundColor: "black",
                height: "72px",
                width: "72px",
                borderRadius: "48px",
              }}
            ></div>

            <Col className="seller-name-online-button">
              <div className="seller-name-etc">
                <div className="seller-name-online kanit-paragraphMedium">
                  {product.productDetails.createBy
                    ? product.productDetails.createBy.firstName
                    : null}
                </div>
                <div className="seller-name-online kanit-paragraphMedium">
                  Online activity
                </div>
              </div>

              <div>
                <button className="btn-small-secondary kanit-paragraphtextMedium">
                  ดูข้อมูลผู้รับซื้อ
                </button>
              </div>
            </Col>
          </Col>

          {/* <div className="vent-divider">
            <VDivider />
          </div>

          <Row className="about-seller">
            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>คะแนนผู้ขาย</Col>
                <Col className="color-ratio">5.3 พัน</Col>
              </Row>
              <Row>
                <Col>รายการสินค้าที่รับซื้อ</Col>
                <Col className="color-ratio">10</Col>
              </Row>
            </Col>

            <Col className="kanit-paragraphtextMedium seller-detail">
              <Row>
                <Col>วันที่เข้าร่วม</Col>
                <Col className="color-ratio">5 ปี ที่ผ่านมา</Col>
              </Row>
              <Row>
                <Col>ผู้ติดตาม</Col>
                <Col className="color-ratio">5 พัน</Col>
              </Row>
            </Col>
          </Row> */}
        </div>

        {/* <div className="product-page-item-description">
          <div className="product-description-title kanit-paragraphMedium">
            รายละเอียดสินค้า
          </div>
          <p className="kanit-paragraphtextMedium">
            {product.productDetails.description}
          </p>
        </div> */}

        <div className="group-card-header-item">
          <div className="group-card-header">
            <div className="group-card-header-topic kanit-paragraphBig">
              สินค้าน่าสนใจ
            </div>
            <Link className="group-card-icon-other" to="/allproduct/interest">
              <div className="group-card-header-other">เพิ่มเติม</div>
              <img className="icon-arrow-right-24" src={chevronRightT} />
            </Link>
          </div>
          <HDivider />
          <div className="group-card-item">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>

      <ModalS
        label="เสนอขายสินค้าสำเร็จ"
        desc="สินค้าได้รับการเสนอขายแล้ว"
        img={success}
        open={openModel}
        onClose={() => setOpenModel(false)}
      />

      <ModalSale
        label="เสนอขายสินค้า"
        desc="ซื้อโทรศัพท์ iphone14"
        img={tag}
        open={openModelSale}
        onClose={() => setOpenModelSale(false)}
        //2 actions
        onClick={() => {
          setOpenModalSelectItem(true), setOpenModelSale(false);
        }}
      />

      <ModalSelectItem
        label="เลือกสินค้าจากรายการขายของคุณ"
        open={openModalSelectItem}
        products={Myproduct}
        onProductSelect={handleProductSelect}
        onClose={() => setOpenModalSelectItem(false)}
      />

      {selectedProduct && (
        <ModalConfirmItem
          label="คุณต้องการที่จะเสนอขายสินค้าชิ้นนี้"
          img={selectedProduct.img}
          title={selectedProduct.label}
          open={openModelConfirmItem}
          onClose={() => setOpenModelConfirmItem(false)}
          onClick={() => {
            setOpenModelConfirmItem(false), setOpenModel(true);
          }}
        />
      )}
    </Layout>
  );
}

export default Productsale;
