import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import Home from './components/home';
import ProductView from './containers/list_products_view';

const App = () => (
  <div>
    <Header />
      <Menu />
    <Route exact path="/" component={Home} />
    <Route exact path="/products/" component={ProductView} />
  </div>
);

export default App;
