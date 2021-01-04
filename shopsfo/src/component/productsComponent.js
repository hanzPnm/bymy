import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../action/productAction';

class ProductsComponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.fetchAllProducts();
    }

    render() {
        return (
            <div>
                ProductsComponent
            </div>
        )
    }
}

export default connect(
    (state)=> ({products: state.products.items}),
    {fetchAllProducts}
)(ProductsComponent);