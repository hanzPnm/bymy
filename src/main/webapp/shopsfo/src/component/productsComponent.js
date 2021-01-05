import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllProducts } from '../action/productAction';
import { Card, Button} from 'react-bootstrap';

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
            <div className="row">
                {this.props.products && (
                     this.props.products.map((item) =>
                    <div className="col-md-3" key={item.id}>  
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"data:image/png;base64," + (item.pics[0] && item.pics[0].pic)} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
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
    {fetchAllProducts}
)(ProductsComponent);