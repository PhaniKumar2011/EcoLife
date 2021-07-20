import React from 'react';
import './App.css';
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Index3 from './pages/index3';
import Index4 from './pages/index4';
import Index5 from './pages/index5';
import About from './pages/about';
import Login from './pages/login';
import Blogleft from './pages/blogleft';
import Blogright from './pages/blogright';
import Cart from './pages/cart';
import Myaccount from './pages/myaccount';
import Compare from './pages/compare';
import Contact from './pages/contact';
import Wishlist from './pages/wishlist';
import Checkout from './pages/checkout';
import Shop from './pages/shop';
import Shoplist from './pages/shoplist';
import Blogsingle from './pages/blogsingle';
import Shop3column from './pages/shop3column'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path='/' component={Index1} />
        <Route exact path='/index2' component={Index2} />
        <Route exact path='/index3' component={Index3} />
        <Route exact path='/index4' component={Index4} />
        <Route exact path='/index5' component={Index5} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/blogleft' component={Blogleft} />
        <Route exact path='/blogright' component={Blogright} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/compare' component={Compare} />
        <Route exact path='/myaccount' component={Myaccount} />
        <Route exact path='/wishlist' component={Wishlist} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shoplist' component={Shoplist} />
        <Route exact path='/blogsingle' component={Blogsingle} />
        <Route exact path='/shop3column' component={Shop3column}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
