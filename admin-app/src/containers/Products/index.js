import React, { useState } from "react";
import { Form } from "react-bootstrap";
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
// import { addProduct } from "../../actions";
import Modal from "../../components/UI/Modal";
import './style.css'
import { generatePublicUrl } from "../../urlConfig";
import { approveProduct, getInitialData } from "../../actions";

function Products(props) {

  // const [name, setName] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  // const [categoryId, setCategoryId] = useState("");
  const [carbonCredit, setCarbonCredit] = useState("");
  const [productType, setProductType] = useState("");
  // const [productPictures, setProductPictures] = useState([]);

  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);

  const filterNewProduct = (products) => {
    let filtered_products = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if(product.verify === false){
          // console.log(product)
          filtered_products.push({product});
        }
      }
    }
    return filtered_products;
  }

  const filterOldProduct = (products) => {
    let filtered_products = [];
    if (products && Array.isArray(products)) {
      for (let product of products) {
        if(product.verify === true){
          console.log(product)
          filtered_products.push({product});
        }
      }
    }
    return filtered_products;
  }

  const newProductsSeller = filterNewProduct(product.productsSeller);
  const newProductsBuyer = filterNewProduct(product.productsBuyer);
  const newProductsDonater = filterNewProduct(product.productsDonater);
  const newProductsReciever = filterNewProduct(product.productsReciever);

  const oldProductsSeller = filterOldProduct(product.productsSeller);
  const oldProductsBuyer = filterOldProduct(product.productsBuyer);
  const oldProductsDonater = filterOldProduct(product.productsDonater);
  const oldProductsReciever = filterOldProduct(product.productsReciever);

  const dispatch = useDispatch();

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleCancel = () => setShow(false);

  // const handleClose = () => {
  //   const form = new FormData();
  //   form.append("name", name);
  //   form.append("quantity", quantity);
  //   form.append("price", price);
  //   form.append("description", description);
  //   form.append("category", categoryId);

  //   for (let pic of productPictures) {
  //     form.append("productPicture", pic);
  //   }

  //   // dispatch(addProduct(form));

  //   setShow(false);
  // };

  const [productDetailsModal, setProductDetailsModal] = useState(false)
  const [oldProductDetailsModal, setOldProductDetailsModal] = useState(false)
  const [productDetails, setproductDetails] = useState(null)

  const handleApprove = (product) => {
    console.log(product._id);
    console.log(carbonCredit)
    setCarbonCredit("");
    setProductDetailsModal(false)
    const form = {
      product_id: product._id,
      type: productType,
      carbon_credit: carbonCredit,
    }
    dispatch(approveProduct(form));
    dispatch(getInitialData());
  }

  const handleCloseProductDetailsModal = () => {
    setProductDetailsModal(false)
  }

  const handleCloseOldProductDetailsModal = () => {
    setOldProductDetailsModal(false)
  }

  const showProductDetailsModal = (product, type) => {
    setproductDetails(product)
    setProductType(type)
    setProductDetailsModal(true)
  }

  const showOldProductDetailsModal = (product) => {
    setproductDetails(product)
    setOldProductDetailsModal(true)
  }

  const renderProductDetailsModal = () => {

    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        show={productDetailsModal}
        handleCancel={handleCloseProductDetailsModal}
        handleClose={handleCloseProductDetailsModal}
        // handleClose={() => setProductDetailModal(false)}
        modalTitle={"Product Details"}
        size="lg"
        buttons={[
          {
            label: 'Cancel',
            color: 'secondary',
            onClick: () => {
              handleCloseProductDetailsModal();
            }
          },
          {
            label: 'Reject',
            color: 'danger',
            onClick: () => {
              handleCloseProductDetailsModal();
            }
          },
          {
            label: 'Approve',
            color: 'primary',
            onClick: () => {
              handleApprove(productDetails);
            }
          }
        ]}
      >
        <Row>
          <Col md="4">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="4">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
          <Col md="4">
            <label className="key">Category</label>
            <p className="value">{productDetails.category ? productDetails.category.name : null}</p>
          </Col>
        </Row>

        <Row>
          {/* <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col> */}
          <Col md="6">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div className="product-imgs">
              {productDetails.productPictures.map(picture =>
                <div className="productImgContainer">
                  <img src={generatePublicUrl(picture.img)} />
                </div>
              )}
            </div>
          </Col>
        </Row>
          
        { productType === 'seller' || productType === 'donater' ? 
        <Row>
          <Col>
            <label className="key">Carbon Credit</label>
            <Form.Control 
              type="text" 
              placeholder="Enter Carbon Credit" 
              value={carbonCredit}
              onChange={(e) => setCarbonCredit(e.target.value)}
            />

            {/* setCarbonCredit */}
            {/* <Input
              label="Description"
              value={description}
              placeholder={`Description`}
              onChange={(e) => setDescription(e.target.value)}
            /> */}
          </Col>
        </Row>
        : null}

      </Modal>
    );
  }


  const renderOldProductDetailsModal = () => {

    if (!productDetails) {
      return null;
    }

    return (
      <Modal
        show={oldProductDetailsModal}
        handleCancel={handleCloseOldProductDetailsModal}
        handleClose={handleCloseOldProductDetailsModal}
        // handleClose={() => setProductDetailModal(false)}
        modalTitle={"Product Details"}
        size="lg"
        // buttons={[
        //   {
        //     label: 'Cancel',
        //     color: 'secondary',
        //     onClick: () => {
        //       handleCloseProductDetailsModal();
        //     }
        //   },
        //   {
        //     label: 'Reject',
        //     color: 'danger',
        //     onClick: () => {
        //       handleCloseProductDetailsModal();
        //     }
        //   },
        //   {
        //     label: 'Approve',
        //     color: 'primary',
        //     onClick: () => {
        //       handleCloseProductDetailsModal();
        //     }
        //   }
        // ]}
      >
        <Row>
          <Col md="4">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="4">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
          <Col md="4">
            <label className="key">Category</label>
            <p className="value">{productDetails.category ? productDetails.category.name : null}</p>
          </Col>
        </Row>

        <Row>
          {/* <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col> */}
          <Col md="6">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div className="product-imgs">
              {productDetails.productPictures.map(picture =>
                <div className="productImgContainer">
                  <img src={generatePublicUrl(picture.img)} />
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <label className="key">Carbon Credit</label>
            <Form.Control type="text" placeholder="Enter Carbon Credit" />
          </Col>
        </Row> */}

      </Modal>
    );
  }

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };

  // const handleProductPictures = (e) => {
  //   setProductPictures([...productPictures, e.target.files[0]]);
  // };

  // console.log(productPictures);
  // console.log(productsSeller)
  // console.log(productsBuyer)
  // console.log(productsDonater)
  // console.log(productsReciever)

  let inter = 0;

  const renderNewProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        {/* First Table */}
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Type</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            {/* <th>Description</th> */}
            {/* <th>Product Picture</th> */}
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-bg">
          {
            newProductsSeller.length > 0 ?
              newProductsSeller.map((product, index) =>
                <tr className="product-items">
                  <td>{index + 1}</td>
                  <td>{product.product.name}</td>
                  <td>Seller</td>
                  <td>{product.product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td className="btn-section">
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product.product, 'seller')} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            newProductsBuyer.length > 0 ?
              newProductsBuyer.map((product, index) =>
                <tr className="product-items">
                  <td>{index + 1}</td>
                  <td>{product.product.name}</td>
                  <td>Buyer</td>
                  <td>{product.product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td className="btn-section">
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product.product, 'buyer')} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            newProductsDonater.length > 0 ?
              newProductsDonater.map((product, index) =>
                <tr className="product-items">
                  <td>{index + 1}</td>
                  <td>{product.product.name}</td>
                  <td>Donater</td>
                  <td> - </td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td className="btn-section">
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product.product, 'donater')} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            newProductsReciever.length > 0 ?
              newProductsReciever.map((product, index) =>
                <tr className="product-items">
                  <td>{index + 1}</td>
                  <td>{product.product.name}</td>
                  <td>Request</td>
                  <td> - </td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td className="btn-section">
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showProductDetailsModal(product.product, 'request')} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }
        </tbody>
      </Table>
    );
  }

  const renderOldProducts = () => {
    return (
      <Table style={{ fontSize: 12 }} responsive="sm">
        {/* Second Table */}

        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Type</th>
            <th>Price</th>
            {/* <th>Quantity</th> */}
            {/* <th>Description</th> */}
            {/* <th>Product Picture</th> */}
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            oldProductsSeller.length > 0 ?
              oldProductsSeller.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.product.name}</td>
                  <td>Seller</td>
                  <td>{product.product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td >
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showOldProductDetailsModal(product.product)} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            oldProductsBuyer.length > 0 ?
              oldProductsBuyer.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.product.name}</td>
                  <td>Buyer</td>
                  <td>{product.product.price}</td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td >
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showOldProductDetailsModal(product.product)} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            oldProductsDonater.length > 0 ?
              oldProductsDonater.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.product.name}</td>
                  <td>Donater</td>
                  <td> - </td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td >
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showOldProductDetailsModal(product.product)} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }

          {
            oldProductsReciever.length > 0 ?
              oldProductsReciever.map(product =>
                <tr className="product-items">
                  <td>1</td>
                  <td>{product.product.name}</td>
                  <td>Request</td>
                  <td> - </td>
                  {/* <td>{product.quantity}</td> */}
                  {/* <td>{product.description}</td> */}
                  <td>{product.product.category ? product.product.category.name : null}</td>
                  <td>{product.product.status}</td>
                  <td >
                    {/* <Button variant="outline-danger" size="sm">Delete</Button> */}
                    <Button variant="outline-primary" size="sm" onClick={() => showOldProductDetailsModal(product.product)} key={product.product._id}>Details</Button>
                  </td>
                </tr>

              ) : null
          }
{/* const oldProductsBuyer = filterOldProduct(product.productsBuyer);
  const oldProductsDonater = filterOldProduct(product.productsDonater);
  const oldProductsReciever = filterOldProduct(product.productsReciever); */}


        </tbody>
      </Table>
    );
  }

  // const renderAddProductModal = () => {
  //   return (<Modal
  //     show={show}
  //     handleCancel={handleCancel}
  //     handleClose={handleClose}
  //     modalTitle={"Add New Product"}
  //   >
  //     <Input
  //       label="Name"
  //       value={name}
  //       placeholder={`Product Name`}
  //       onChange={(e) => setName(e.target.value)}
  //     />
  //     <Input
  //       label="Quantity"
  //       value={quantity}
  //       placeholder={`Quantity`}
  //       onChange={(e) => setQuantity(e.target.value)}
  //     />
  //     <Input
  //       label="Price"
  //       value={price}
  //       placeholder={`Price`}
  //       onChange={(e) => setPrice(e.target.value)}
  //     />
  //     <Input
  //       label="Description"
  //       value={description}
  //       placeholder={`Description`}
  //       onChange={(e) => setDescription(e.target.value)}
  //     />
  //     <select
  //       className="form-control"
  //       value={categoryId}
  //       onChange={(e) => setCategoryId(e.target.value)}
  //     >
  //       <option>select category</option>
  //       {createCategoryList(category.categories).map((option) => (
  //         <option key={option.value} value={option.value}>
  //           {" "}
  //           {option.name}{" "}
  //         </option>
  //       ))}
  //     </select>

  //     {productPictures.length > 0
  //       ? productPictures.map((pic, index) => (
  //         <div key={index}> {pic.name} </div>
  //       ))
  //       : null}

  //     <Input
  //       type="file"
  //       name="productPicture"
  //       onChange={handleProductPictures}
  //     />
  //   </Modal>);
  // }


  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div className="table-product">
              <h3>Products</h3>
              {/* <Button onClick={handleShow}>Add new product</Button> */}
            </div>
          </Col>
        </Row>
        <Row className="new-product-table">
          <Col>
            {renderNewProducts()}
          </Col>
        </Row>

        <Row>
          <Col className="old-product-table" md={12}>
            <div className="table-product">
              <h3>Old Product</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {renderOldProducts()}
          </Col>
        </Row>
      </Container>
      {/* {renderAddProductModal()} */}
      {renderProductDetailsModal()}
      {renderOldProductDetailsModal()}
    </Layout>
  );
}

Products.propTypes = {};

export default Products;