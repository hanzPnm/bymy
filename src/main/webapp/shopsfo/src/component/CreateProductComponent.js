import React, { Component } from 'react';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';
import { connect } from 'react-redux';
import { createProduct } from '../action/productAction';

class CreateProductComponent extends Component {
    constructor(props){
        super(props);
        this.state={price: 10}
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        var data = new FormData();
        let files = [...this.state.files] || [];
        files.map(ele =>{
            data.append('files',ele)
        });
        data.append('price',this.state.price);
        data.append('files',this.state.title);
        data.append('files',this.state.description);
        this.props.createProduct(data);
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(event.target.id)
    }
    onChangeFiles = (event) => {
        this.setState({ files: event.target.files })
    }


    render() {
        return (
            <div className="row pt-5">
                <div className="col-md-6 offset-3">
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onChange={this.onChangeInput}/>
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter description" onChange={this.onChangeInput}/>
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <OverlayTrigger show={true} overlay={<Tooltip id="tooltip-disabled">Price : {this.state.price}</Tooltip>}>
                                <Form.Control  min={0} max={5000} type="range" custom onChange={this.onChangeInput} value={this.state.price} />
                            </OverlayTrigger>
                        </Form.Group>
                        <Form.Group>
                            <Form.File multiple id="file" label="Choose Picture" onChange={this.onChangeFiles}/>
                        </Form.Group>
                        <Button variant="btn btn-outline-dark col" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=> ({product: state.products.product}),
    {createProduct}
)(CreateProductComponent);
