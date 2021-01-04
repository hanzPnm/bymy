import store from './store';
import React, { Component } from "react";
import { Provider } from 'react-redux';
import ProductsComponent from './component/productsComponent';

class App extends Component{
  render(){
    return (
      <Provider store={store}>
      <div className="App">
        <ProductsComponent />
      </div>
      </Provider>
    );
  }
}

export default App;
