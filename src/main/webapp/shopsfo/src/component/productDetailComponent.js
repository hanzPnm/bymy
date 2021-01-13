import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    render() {
        return (
            <div>article =  
                {this.props.product && this.props.product.title}
            </div>
        )
    }
}

export default connect(
    (state)=> ({product: state.products.product}),
    {}
)(ProductDetailComponent);