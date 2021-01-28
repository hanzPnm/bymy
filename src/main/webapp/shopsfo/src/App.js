import store from './store';
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ProductsComponent from './component/productsComponent';
import NavBarComponent from './component/navBarComponent';
import FooterComponent from './component/footerComponent';
import AboutComponent from './component/aboutComponent';
import LoginComponent from './component/loginComponent';
import Count from './component/toastComponent';
import ProductDetailComponent from './component/productDetailComponent';
import CreateProductComponent from './component/CreateProductComponent';
import { HashRouter } from 'react-router-dom';

class App extends Component{
  componentDidMount () {
  }
  render(){

    return (
      <Provider store={store}>
        <HashRouter>
          <NavBarComponent />
          <div className="App container">
          <Count/>
            <Switch>
              
              <Route exact path='/' component={ProductsComponent}/>
              <Route path='/about' component={AboutComponent}/>
              <Route path='/login' component={LoginComponent}/>
              <Route path='/product' component={ProductDetailComponent}/>
              <Route path='/createProduct' component={CreateProductComponent}/>
            </Switch>
            
          </div>
          <FooterComponent/>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
