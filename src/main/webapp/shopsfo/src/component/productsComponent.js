import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts, fetchProduct } from '../action/productAction';
import { Card, Button} from 'react-bootstrap';
import history from '../history';

class ProductsComponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.props.fetchAllProducts();
    }
    goToDetail = (id) => {
        this.props.fetchProduct(id);
    }

    render() {
        return (
            <div className="row">
                {this.props.products && (
                     this.props.products.map((item) =>
                    <div className="col-md-3" key={item.id}>  
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"data:image/png;base64," + (item.pics[0] && item.pics[0].pic)} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Title>$ {item.price}</Card.Title>
                                <Button variant="btn btn-outline-dark col m-1" onClick={()=>{this.goToDetail(item.id)}}>Go somewhere</Button>
                            </Card.Body>
                            </Card>
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(
    (state)=> ({products: state.products.items}),
    {fetchAllProducts, fetchProduct}
)(ProductsComponent);