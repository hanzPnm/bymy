import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return (
            <div className="container pt-5">
                {this.props.product && (
                    <div className="row">
                        <div className="col-md-8">
                            <img src={"data:image/png;base64," + (this.props.product.pics[0] && this.props.product.pics[0].pic)} />
                        </div>
                        <div className="col-md-4">
                            <h1 className="articleTitle pb-3 underline text-capitalize">
                                {this.props.product.title}    
                            </h1>
                            <h5>
                                $ {this.props.product.price}    
                            </h5>
                            <p>
                                {this.props.product.description} 
                            </p>
                            <div className="btn btn-outline-dark col">
                                ADD TO CART
                            </div>
                        </div>   
                    </div>
                )}
            </div>
        )
    }
}

export default connect(
    (state)=> ({product: state.products.product}),
    {}
)(ProductDetailComponent);