import React, { useState } from "react";
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../../components/UI/Modal";
import Input from "../../components/UI/Input";
import { IoCheckboxOutline, IoCheckboxSharp, IoCaretDownSharp, IoCaretForward, IoCheckmarkCircleOutline, IoAddOutline, IoTrash, IoPencilSharp } from "react-icons/io5";

function Orders(props) {

    const coupon = useSelector((state) => state.category.coupons);

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
        <Container>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Coupon</h3>
                <div className="actionBtnContainer">
                  {/* <Button onClick={handleShow}>Add New Coupon</Button> */}
                  <span>Actions: </span>
                  <button onClick={handleShow}> <IoAddOutline  /> <span>Add</span></button>
                  <button onClick={handleShow}> <IoTrash /> <span>Delete</span></button>
                  <button onClick={handleShow}> <IoPencilSharp /> <span>Edit</span></button>
                </div>
                
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table style={{ fontSize: 12 }} responsive="sm">
                {/* First Table */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Coupon Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                  </tr>
                </thead>

                <tbody className="table-bg">
                  {
                    coupon.length > 0 ?
                      coupon.map((coupon, index) =>
                        <tr className="product-items">
                          <td>{index + 1}</td>
                          <td>{coupon.name}</td>
                          <td>{coupon.price}</td>
                          <td>{coupon.description}</td>
                          <td>
                            <img style={{ width:20, height:20 }} src ={coupon.couponImage}></img>
                          </td>
                        </tr>

                      ) : null
                  }
                </tbody>
              </Table>
              {/* <ul>{renderCategories(category.categories)}</ul> */}
              {/* Coupon */}
            </Col>
          </Row>
        </Container>
      
        

        {renderAddCouponModal()}
    </Layout>
  )
}

Orders.propTypes = {}

export default Orders
