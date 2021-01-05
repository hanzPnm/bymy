import store from './store';
import React, { Component } from "react";
import { Provider } from 'react-redux';
import ProductsComponent from './component/productsComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div className="App container">
        <ProductsComponent />
      </div>
      </Provider>
    );
  }
}

export default App;
