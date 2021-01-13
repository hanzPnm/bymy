import store from './store';
import React, { Component } from "react";
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ProductsComponent from './component/productsComponent';
import NavBarComponent from './component/navBarComponent';
import FooterComponent from './component/footerComponent';
import AboutComponent from './component/aboutComponent';
import LoginComponent from './component/loginComponent';
import ProductDetailComponent from './component/productDetailComponent';
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
            <Switch>
              
              <Route exact path='/' component={ProductsComponent}/>
              <Route path='/about' component={AboutComponent}/>
              <Route path='/login' component={LoginComponent}/>
              <Route path='/product' component={ProductDetailComponent}/>
            </Switch>
          </div>
          <FooterComponent/>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
