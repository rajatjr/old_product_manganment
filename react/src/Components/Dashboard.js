import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { MDBCol } from "mdbreact";
import Navbar from "./Navbar";
import image from "./shopping.jpg"

function Product() {
  const url = "http://localhost:5000/api/getProducts";
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/addProducts', { productName, productPrice, category })
      .then(res => {
        console.log(res);
        alert("product")
        fetchInfo();
      })
      .catch(err => console.log(err));
  }

  const fetchInfo = () => {
    return axios.get(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/searchapi?productName=${searchInput.toLowerCase()}`);
        setData(res.data.products);
      } catch (error) {
        console.log(error)
      }
    }

    searchProduct();
  }, [searchInput])

  return (
    <>
   
    <Navbar />
    <div className='bg'>
      <br /><br />
      <h2 style={{ color: "rgb(3, 61, 56)" }}> Products Add To Database And Show From Database function base </h2>
      <br /><br />
      <form className="container mt-3 mb-3" onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="formBasicEmail" className="col col-sm-4" style={{ color: "rgb(3, 61, 56)" }}>
            <Form.Label><h3>Product Name</h3></Form.Label>
            <Form.Control type="name" name="first_name" onChange={e => setProductName(e.target.value)} value={productName} className="form-control" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="col col-sm-4" style={{ color: "rgb(3, 61, 56)" }}>
            <Form.Label><h3>Product Price</h3></Form.Label>
            <Form.Control type="number" name="last_name" onChange={e => setProductPrice(e.target.value)} value={productPrice} className="form-control" />
          </Form.Group>

          <Form.Group controlId="formGridCheckbox" className="col col-sm-2" style={{ color: "rgb(3, 61, 56)" }}>
            <Form.Label><h3>Category</h3></Form.Label>
            <Form.Select defaultValue="Select..." className="form-control" name="menu" onChange={e => setCategory(e.target.value)} value={category} >
              <option value="Select...">Select...</option>
              <option value="Shirt">Shirt</option>
              <option value="Jacket">Jacket</option>
              <option value="Jeans">Jeans</option>
              <option value="Phone">Phone</option>
            </Form.Select>
          </Form.Group>
          <Col sm={2}>
            <button type="submit" className='button2' style={{margin:"15px"}}>Add Products</button>
          </Col>
        </Row>
      </form>

      <div className="App">
        <center>
          <br />
          <MDBCol md="6">
            <input className="form-control" type="text" placeholder="Search " style={{ textAlign: "center" }} onChange={(e) => setSearchInput(e.target.value)} value={searchInput} aria-label="Search" />
            <br />
            <button type="button" className="button2" onClick={(e) => setSearchInput("")}><h5>Clear</h5></button>
          </MDBCol>
          <br /><br />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "25px" }}>
            {data.length > 0 && data.map((dataObj, index) => (
              <div key={index} style={{ background: "#fff", border: "5px solid rgb(3, 61, 56)", padding: "25px",borderRadius:"50px" }}>
               
                <p style={{ textAlign: "center", color: "red" }}>Product Details</p>
                <br/>
                
                <img src={image}></img>

                <p style={{ textAlign: "center", color: "rgb(3, 61, 56)" }}>Product Name&nbsp;:&nbsp;{dataObj.productName}</p><br/>

                <p style={{ textAlign: "center", color: "rgb(3, 61, 56)" }}>Product Price&nbsp;:&nbsp;{dataObj.productPrice}</p><br/>
                
                <p style={{ textAlign: "center", color: "rgb(3, 61, 56)" }}>Product Category&nbsp;:&nbsp;{dataObj.category}</p>
              </div>
            ))}
          </div>
        </center>
      </div>
    </div>
    </>
  )
}

export default Product;
