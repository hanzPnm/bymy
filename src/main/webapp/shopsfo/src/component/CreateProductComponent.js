import React, { Component } from 'react';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';

export default class CreateProductComponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        console.log("Color value is :", this.state);
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
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
                            <Form.Control type="range" custom onChange={this.onChangeInput}/>
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
