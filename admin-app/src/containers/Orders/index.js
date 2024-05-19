import React, { useState } from "react";
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../../components/UI/Modal";
import Input from "../../components/UI/Input";
function Orders(props) {

    //New Category
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [couponImage, setCouponImage] = useState("");
  
    const [show, setShow] = useState(false);
    const handleCancel = () => setShow(false);
    const handleClose = () => {
  
      console.log(name)
      console.log(price)
      console.log(description)
      console.log(couponImage)

      setName("")
      setPrice("")
      setDescription("")
      setCouponImage("")

      // const form = new FormData();  
      // form.append("name", categoryName);
      // form.append("parentId", parentCategoryId);
      // form.append("categoryImage", categoryImage);
      
      // dispatch(addCategory(form));

      setShow(false);
    };
    const handleShow = () => setShow(true);

    const handleCouponImage = (e) => {
      setCouponImage(e.target.files[0]);
    };
  

    const renderAddCouponModal = () => {
      return (<Modal
        show={show}
        modalTitle={"Add New Coupon"}
        buttons={[
          {
            label: 'Cancel',
            color: 'secondary',
            onClick: () => {
              handleCancel();
            }
          },
          {
            label: 'Approve',
            color: 'primary',
            onClick: () => {
              handleClose();
            }
          }
        ]}
      >
        <Input
          label="Coupon name"
          value={name}
          placeholder={`Coupon name`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Carbon credits price"
          value={price}
          placeholder={`Carbon credits price`}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="file"
          name="productPicture"
          onChange={handleCouponImage}
        />

    </Modal>);
  }
    
  return (
    <Layout sidebar>
        Coupon
        <Button onClick={handleShow}>Add New Coupon</Button>
        {renderAddCouponModal()}
    </Layout>
  )
}

Orders.propTypes = {}

export default Orders
