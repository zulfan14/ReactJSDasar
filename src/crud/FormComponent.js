import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

const FormComponent = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h5>Tambah Data</h5>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                placeholder="Input Nama Makanan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                placeholder="Input Harga Makanan"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Input Deskripsi Makanan"
                name="deskripsi"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponent;
