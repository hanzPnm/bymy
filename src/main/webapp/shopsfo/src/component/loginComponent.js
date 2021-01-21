import React, { Component } from 'react';
import { login } from '../action/loginActions';
import { connect } from 'react-redux';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={price: 10}
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state);
    }

    onChangeInput = (event) => {
        this.setState({ [event.target.id]: event.target.value })
        console.log(event.target.id)
    }

    render() {
        return (
            <div className="row pt-5">
                <div className="col-md-6 offset-3">
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Group controlId="userName">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" placeholder="Enter UserName" onChange={this.onChangeInput}/>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" onChange={this.onChangeInput}/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter Password" onChange={this.onChangeInput}/>
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
    (state)=> ({user: state}),
    {login}
)(LoginComponent);