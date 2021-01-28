import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct, updateProduct } from '../action/productAction';
import Form  from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';
class ProductDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultImage:'',
            update: false
        }
    }

    componentDidMount(){
        const image = this.props.product? this.props.product.pics[0] :  null;
        const product = this.props.product? this.props.product :  '';
        this.setState({...this.state,
                defaultImage: image,
                id: product.id,
                title: product.title,
                price: product.price,
                description: product.description,
                files: []
            });
    }
    showImage = (image) => {
        this.setState({defaultImage: image});
    }
    removeProduct = () => {
        this.props.removeProduct(this.props.product.id);
    }
    toggleUpdate = () => {
        this.setState({...this.state,update: !this.state.update});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        var data = new FormData();
        let files = [...this.state.files] || [];
        files.map(ele =>{
            data.append('files',ele)
        });
        data.append('price',this.state.price);
        data.append('title',this.state.title);
        data.append('description',this.state.description);
        data.append('id',this.state.id);
        this.props.updateProduct(data).then(
            (s) => {
                this.toggleUpdate();
            },
            (error)=> console.log('err'));
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
            <div className="container pt-5">
                {this.props.product && (
                    <div className="row">
                        <div className="col-md-7">
                            <img className="img-fluid" src={"data:image/png;base64," + (this.state.defaultImage && this.state.defaultImage.pic)} />
                        </div>
                        <div className="col-md-1">
                        {this.props.product.pics.map(ele =>
                            <img key={ele.id} className="img-fluid p-1" src={"data:image/png;base64," + ele.pic} onClick={()=> this.showImage(ele)}/>
                        )}
                        </div>
                        <div className="col-md-4">
                            { this.state.update === false && (  
                                <div>
                                    <h1 className="articleTitle pb-3 underline text-capitalize">
                                        {this.props.product.title}    
                                    </h1>
                                    <h5>
                                        $ {this.props.product.price}    
                                    </h5>
                                    <p>
                                        {this.props.product.description} 
                                    </p>
                                    <div className="btn btn-outline-dark col m-1">
                                        ADD TO CART
                                    </div>
                                </div>
                            )}
                            { this.state.update === true && (
                                <Form onSubmit={this.onFormSubmit}>
                                    <Form.Group controlId="title">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" 
                                            placeholder="Enter title" 
                                            onChange={this.onChangeInput} 
                                            value={this.state.title}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="description">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control 
                                            as="textarea" rows={3} 
                                            placeholder="Enter description" 
                                            onChange={this.onChangeInput}
                                            value={this.state.description}
                                        />
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
                            )}
                            {this.props.login !== undefined && this.props.login.role ==='[ROLE_ADMIN]' && (
                                <div className="btn btn-outline-danger col m-1" onClick={this.removeProduct}>
                                    REMOVE PRODUCT
                                </div>
                            )}
                            {this.props.login !== undefined &&
                                ( this.props.login.role ==='[ROLE_ADMIN]' || this.props.login.role ==='[ROLE_MANAGER]' ) && (
                                <div className="btn btn-outline-warning col m-1" onClick={this.toggleUpdate}>
                                    UPDATE PRODUCT
                                </div>
                            )}
                        </div>    
                    </div>
                )}
            </div>
        )
    }
}

export default connect(
    (state)=> ({product: state.products.product,login: state.login.login}),
    {removeProduct, updateProduct}
)(ProductDetailComponent, );