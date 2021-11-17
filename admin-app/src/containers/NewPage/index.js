import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import linearCategories from "../../helpers/linearCategories";

const NewPage = (props) => {
  const [createModal, setCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const category = useSelector((state) => state.category);
  const [desc, setDesc] = useState("");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCategories(linearCategories(category.categories));
  }, [category]);

  const handleBannerImages = (e) => {
    console.log(e);
  };
  const handleProductImages = (e) => {
    console.log(e);
  };

  const renderCreatePageModal = () => {
    return (
      <Modal
        show={createModal}
        modalTitle={"Create New Page"}
        handleClose={() => setCreateModal(false)}>
        <Container>
          <Row>
            <Col>
              <select
                className="form-control form-control-sm"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}>
                <option value="">select category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Page Title"}
                className=""
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder={"Page Desc"}
                className=""
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                className="form-control"
                type="file"
                name="banners"
                onChange={handleBannerImages}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <input
                className="form-control"
                type="file"
                name="products"
                onChange={handleProductImages}
              />
            </Col>
          </Row>
        </Container>
      </Modal>
    );
  };
  return (
    <Layout sidebar>
      {renderCreatePageModal()}
      <button onClick={() => setCreateModal(true)}>Create Page</button>
    </Layout>
  );
};

export default NewPage;
