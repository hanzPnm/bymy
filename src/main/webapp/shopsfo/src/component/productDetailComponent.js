import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct} from '../action/productAction';
class ProductDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state={defaultImage:''}
    }

    componentDidMount(){
        const image = this.props.product? this.props.product.pics[0] :  null;
        this.setState({defaultImage: image});
    }
    showImage = (image) => {
        this.setState({defaultImage: image});
    }
    removeProduct = () => {
        this.props.removeProduct(this.props.product.id);
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
                            <img className="img-fluid p-1" src={"data:image/png;base64," + ele.pic} onClick={()=> this.showImage(ele)}/>
                        )}
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
                            <div className="btn btn-outline-danger col" onClick={this.removeProduct}>
                                REMOVE PRODUCT
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
    {removeProduct}
)(ProductDetailComponent, );