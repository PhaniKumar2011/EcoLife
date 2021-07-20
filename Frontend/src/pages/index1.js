import React from 'react';
import {Link} from 'react-router-dom';

class Index1 extends React.Component
{
    render()
    {
        return (
         <div>
        <div>
  {/* main layout start from here */}
  {/*====== PRELOADER PART START ======*/}
  {/* <div id="preloader">
  <div class="preloader">
      <span></span>
      <span></span>
  </div>
    </div> */}
  {/*====== PRELOADER PART ENDS ======*/}
  <div id="main">
    {/* Header Start */}
    <header className="main-header home-2">
      {/* Header Top Start */}
      <div className="header-top-nav">
        <div className="container">
          <div className="row">
            {/*Left Start*/}
            <div className="col-lg-4 col-md-4">
              <div className="left-text">
                <p>Welcome you to Ecolife store!</p>
              </div>
            </div>
            {/*Left End*/}
            {/*Right Start*/}
            <div className="col-lg-8 col-md-8 text-right">
              <div className="header-right-nav">
                <ul className="res-xs-flex">
                  <li className="after-n">
                  <Link to="/compare"><i className="ion-ios-shuffle-strong" />Compare (0)</Link>
                  </li>
                  <li>
                  <Link to="/wishlist"><i className="ion-android-favorite-outline" />Wishlist (0)</Link>
                  </li>
                </ul>
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start */}
                    <li className="dropdown">
                      <a className="angle-icon" href="#">Settings</a>
                      <ul className="dropdown-nav">
                        <li><Link to="/myaccount">My Account</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to="/login">Login</Link></li>
                      </ul>
                    </li>
                    {/* Settings End */}
                    {/* Currency Start */}
                    <li className="top-10px first-child">
                      <select>
                        <option value={1}>USD $</option>
                        <option value={2}>EUR €</option>
                      </select>
                    </li>
                    {/* Currency End */}
                    {/* Language Start */}
                    <li className="top-10px mr-15px">
                      <select>
                        <option value={1}>English</option>
                        <option value={2}>France</option>
                      </select>
                    </li>
                    {/* Language End */}
                  </ul>
                </div>
              </div>
            </div>
            {/*Right End*/}
          </div>
        </div>
      </div>
      {/* Header Top End */}
      {/* Header Buttom Start */}
      <div className="header-navigation sticky-nav">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              {/* Logo Start */}
              <div className="col-md-2 col-sm-2">
                <div className="logo">
                  <a href="index.html"><img src="assets/images/logo/logo.jpg" alt /></a>
                </div>
              </div>
              {/* Logo End */}
              {/* Navigation Start */}
              <div className="col-md-10 col-sm-10">
                {/*Main Navigation Start */}
                <div className="main-navigation d-none d-lg-block">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#">Home <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Organic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/">Organic</Link></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/index2">Cosmetic </Link></li>
                            {/* <li><a href="index-6.html">Cosmetic 2</a></li>
                            <li><a href="index-7.html">Cosmetic 3</a></li>
                            <li><a href="index-8.html">Cosmetic 4</a></li> */}
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/index3">Digital 1</Link></li>
                            {/* <li><a href="index-10.html">Digital 2</a></li>
                            <li><a href="index-11.html">Digital 3</a></li>
                            <li><a href="index-12.html">Digital 4</a></li> */}
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            {/* <li><a href="index-13.html">Furniture 1</a></li>
                            <li><a href="index-14.html">Furniture 2</a></li> */}
                            <li><Link to="/index4">Furniture </Link></li>
                            {/* <li><a href="index-16.html">Furniture 4</a></li> */}
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/index5">Medical </Link></li>
                            {/* <li><a href="index-18.html">Medical 2</a></li>
                            <li><a href="index-19.html">Medical 3</a></li>
                            <li><a href="index-20.html">Medical 4</a></li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Shop <i className="ion-ios-arrow-down" /></a>
                      <ul className="mega-menu-wrap">
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Grid</a></li>
                            <li><Link to="/shop3column">Shop Grid 3 Column</Link></li>
                           <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop List</a></li>
                            <li><Link to="/shoplist">Shop List</Link></li>
                            <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
                          </ul>
                        </li>
                        {/* <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                            <li><a href="single-product.html">Shop Single</a></li>
                            <li><a href="single-product-variable.html">Shop Variable</a></li>
                            <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                            <li><a href="single-product-group.html">Shop Group</a></li>
                            <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                            <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                          </ul>
                        </li> */}
                        {/* <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                            <li><a href="single-product-slider.html">Shop Slider</a></li>
                            <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                            <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                            <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                            <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                          </ul>
                        </li> */}
                        {/* <li className="banner-wrapper">
                          <a href="single-product.html"><img src="assets/images/banner-image/banner-menu.jpg" alt /></a>
                        </li> */}
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li><Link to="/about">About Page</Link></li>
                        <li><Link to="/cart">Cart Page</Link></li>
                        <li><Link to="/checkout">Checkout Page</Link></li>
                        <li><Link to="/compare">Compare Page</Link></li>
                        <li><Link to="/login">Login &amp; Regiter Page</Link></li>
                        <li><Link to="/myaccount">Account Page</Link></li>
                        <li><Link to="/wishlist">Wishlist Page</Link></li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Blog <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">Blog Grid <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/blogleft">Blog Grid Left Sidebar</Link></li>
                            <li><Link to="/blogright">Blog Grid Right Sidebar</Link></li>
                          </ul>
                        </li>
                        {/* <li className="menu-dropdown position-static">
                          <a href="#">Blog List <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                            <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                          </ul>
                        </li> */}
                        <li className="menu-dropdown position-static">
                          <a href="#">Blog Single <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
                            {/* <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                {/*Main Navigation End */}
                {/*Header Bottom Account Start */}
                <div className="header_account_area">
                  {/*Seach Area Start */}
                  <div className="header_account_list search_list">
                    <a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a>
                    <div className="dropdown_search">
                      <form action="#">
                        <input placeholder="Search entire store here ..." type="text" />
                        <div className="search-category">
                          <select className="bootstrap-select" name="poscats">
                            <option value={0}>All categories</option>
                            <option value={104}>
                              Fresh Food
                            </option>
                            <option value={183}>
                              - - Fresh Fruit
                            </option>
                            <option value={187}>
                              - - - - Bananas
                            </option>
                            <option value={188}>
                              - - - - Apples &amp; Pears
                            </option>
                            <option value={189}>
                              - - - - Berries &amp; Cherries
                            </option>
                            <option value={190}>
                              - - - - Oranges &amp; Citrus Fruit
                            </option>
                            <option value={191}>
                              - - - - Grapes
                            </option>
                            <option value={184}>
                              - - Fresh Vegetables
                            </option>
                            <option value={192}>
                              - - - - Potatoes &amp; Sweet Potatoes
                            </option>
                            <option value={193}>
                              - - - - Onions &amp; Leeks
                            </option>
                            <option value={194}>
                              - - - - Carrots &amp; Root Vegetables
                            </option>
                            <option value={195}>
                              - - - - Broccoli &amp; Cauliflower
                            </option>
                            <option value={196}>
                              - - - - Cabbages &amp; Greens
                            </option>
                            <option value={185}>
                              - - Fresh Salad &amp; Dips
                            </option>
                            <option value={197}>
                              - - - - Lettuce &amp; Salad bags
                            </option>
                            <option value={198}>
                              - - - - Tomatoes
                            </option>
                            <option value={199}>
                              - - - - Cucumber
                            </option>
                            <option value={200}>
                              - - - - Celery
                            </option>
                            <option value={201}>
                              - - - - Peppers
                            </option>
                            <option value={186}>
                              - - Milk, Butter &amp; Eggs
                            </option>
                            <option value={202}>
                              - - - - Milk
                            </option>
                            <option value={203}>
                              - - - - Spreads &amp; Margarine
                            </option>
                            <option value={204}>
                              - - - - Fresh Cream &amp; Custard
                            </option>
                            <option value={205}>
                              - - - - Eggs
                            </option>
                            <option value={206}>
                              - - - - Baking &amp; Cooking
                            </option>
                          </select>
                        </div>
                        <button type="submit"><i className="ion-ios-search-strong" /></button>
                      </form>
                    </div>
                  </div>
                  {/*Seach Area End */}
                  {/*Cart info Start */}
                  <div className="cart-info d-flex">
                    <div className="mini-cart-warp">
                      <a href="#" className="count-cart"><span>$20.00</span></a>
                      <div className="mini-cart-content">
                        <ul>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/1.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="single-product.html">Juicy Couture...</a></h4>
                              <span>$9.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                          <li className="single-shopping-cart">
                            <div className="shopping-cart-img">
                              <a href="single-product.html"><img alt src="assets/images/product-image/mini-cart/2.jpg" /></a>
                              <span className="product-quantity">1x</span>
                            </div>
                            <div className="shopping-cart-title">
                              <h4><a href="single-product.html">Water and Wind...</a></h4>
                              <span>$11.00</span>
                              <div className="shopping-cart-delete">
                                <a href="#"><i className="ion-android-cancel" /></a>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="shopping-cart-total">
                          <h4>Subtotal : <span>$20.00</span></h4>
                          <h4>Shipping : <span>$7.00</span></h4>
                          <h4>Taxes : <span>$0.00</span></h4>
                          <h4 className="shop-total">Total : <span>$27.00</span></h4>
                        </div>
                        <div className="shopping-cart-btn text-center">
                          <Link className="default-btn" to="/checkout">checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Cart info End */}
                </div>
              </div>
            </div>
            {/* mobile menu */}
            <div className="mobile-menu-area">
              <div className="mobile-menu">
                <nav id="mobile-menu-active">
                  <ul className="menu-overflow">
                    <li>
                      <a href="index.html">HOME</a>
                      <ul>
                        <li>
                          <a href="#">Home Organic</a>
                          <ul>
                            {/* <li><a href="index.html">Organic 1</a></li>
                            <li><a href="index-2.html">Organic 2</a></li>
                            <li><a href="index-3.html">Organic 3</a></li> */}
                            <li><Link to="/">Organic </Link></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Home Cosmetic</a>
                          <ul>
                            <li><Link to="/index2">Cosmetic </Link></li>
                            {/* <li><a href="index-6.html">Cosmetic 2</a></li>
                            <li><a href="index-7.html">Cosmetic 3</a></li>
                            <li><a href="index-8.html">Cosmetic 4</a></li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="#">Home Digital</a>
                          <ul>
                            <li><Link to="/index3">Digital </Link></li>
                            {/* <li><a href="index-10.html">Digital 2</a></li>
                            <li><a href="index-11.html">Digital 3</a></li>
                            <li><a href="index-12.html">Digital 4</a></li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="#">Home Furniture</a>
                          <ul>
                            {/* <li><a href="index-13.html">Furniture 1</a></li>
                            <li><a href="index-14.html">Furniture 2</a></li> */}
                            <li><Link to="/index4">Furniture </Link></li>
                            {/* <li><a href="index-16.html">Furniture 4</a></li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="#">Home Medical</a>
                          <ul>
                            <li><Link to="/index5">Medical </Link></li>
                            {/* <li><a href="index-18.html">Medical 2</a></li>
                            <li><a href="index-19.html">Medical 3</a></li>
                            <li><a href="index-20.html">Medical 4</a></li> */}
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                      <ul>
                        <li>
                          <a href="#">Shop Grid</a>
                          <ul>
                            <li><Link to="/shop">Shop Grid 3 Column</Link></li>
                            {/* <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="#">Shop List</a>
                          <ul>
                            <li><Link to="/shoplist">Shop List</Link></li>
                            {/* <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li> */}
                          </ul>
                        </li>
                        {/* <li>
                          <a href="#">Single Shop</a>
                          <ul>
                            <li><a href="single-product.html">Shop Single</a></li>
                            <li><a href="single-product-variable.html">Shop Variable</a></li>
                            <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                            <li><a href="single-product-group.html">Shop Group</a></li>
                            <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                            <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                          </ul>
                        </li> */}
                        {/* <li>
                          <a href="#">Single Shop</a>
                          <ul>
                            <li><a href="single-product-slider.html">Shop Slider</a></li>
                            <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                            <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                            <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                            <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                          </ul>
                        </li> */}
                      </ul>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul>
                        <li><Link to="/about">About Page</Link></li>
                        <li><Link to="/cart">Cart Page</Link></li>
                        <li><Link to="/checkout">Checkout Page</Link></li>
                        <li><Link to="/compare">Compare Page</Link></li>
                        <li><Link to="/login">Login &amp; Regiter Page</Link></li>
                        <li><Link to="/myaccount">Account Page</Link></li>
                        <li><Link to="/wishlist">Wishlist Page</Link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                      <ul>
                        <li><Link to="/blogleft">Blog Grid Left Sidebar</Link></li>
                        <li><Link to="/blogright">Blog Grid Right Sidebar</Link></li>
                        {/* <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                        <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li> */}
                        <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
                        {/* <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li> */}
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* mobile menu end*/}
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
    </header>
    {/* Header End */}
    {/* Slider Arae Start */}
    <div className="slider-area home-2 home-4">
      <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
        {/* Slider Single Item Start */}
        <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-7.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">100% NATURAL</span>
              <h1 className="animated">
                Fresh Vegetables<br />
                And Fruits
              </h1>
              {/*<a href="shop-4-column.html" class="shop-btn animated">SHOP NOW</a>*/}
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
        {/* Slider Single Item Start */}
        <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-8.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">BEST OFFER SALE !</span>
              <h1 className="animated">
                Up To 70% Off <br />
                Fresh Juice
              </h1>
              {/*<a href="shop-4-column.html" class="shop-btn animated">SHOP NOW</a>*/}
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
      </div>
    </div>
    {/* Slider Arae End */}
    {/* Static Area Start */}
    <section className="static-area mtb-60px">
      <div className="container">
        <div className="static-area-wrap">
          <div className="row">
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                <img src="assets/images/icons/static-icons-1.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Free Shipping</h4>
                  <p>On all orders over $75.00</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-2.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Free Returns</h4>
                  <p>Returns are free within 9 days</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pt-res-md-30 pb-res-sm-30 pb-res-xs-0 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-3.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>100% Payment Secure</h4>
                  <p>Your payment are safe with us.</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pt-res-md-30 pb-res-sm-30 pt-res-xs-20">
                <img src="assets/images/icons/static-icons-4.png" alt className="img-responsive" />
                <div className="single-static-meta">
                  <h4>Support 24/7</h4>
                  <p>Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
            {/* Static Single Item End */}
          </div>
        </div>
      </div>
    </section>
    {/* Static Area End */}
    {/* Banner Area Start */}
    <div className="banner-area home-2">
      <div className="container">
        <div className="row">
          <img src="https://static01.nyt.com/images/2018/03/07/dining/00IMPORTS/00IMPORTS-articleLarge.gif?quality=75&auto=webp&disable=upscale" height="315px" width="700px" style={{marginLeft: 380}} alt />
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area End */}
  {/* Best Sells Area Start */}
  <section className="best-sells-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Best Sellers</h2>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Best Sell Slider Carousel Start */}
      <div className="best-sell-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Mangoes</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€34.21</li>
                  <li className="discount-price">-5%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-2.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-15.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Mango Juice</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€18.90</li>
                  <li className="current-price">€15.12</li>
                  <li className="discount-price">-20%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-3.jpg" alt />
                {/*<img class="second-img" src="assets/images/product-image/organic/product-4.jpg" alt="" />*/}
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">California almonds</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-5.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-5.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Apricot</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-6.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-6.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Strawberry</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-7.jpg" alt />
                {/*<img class="second-img" src="assets/images/product-image/organic/product-8.jpg" alt="" />*/}
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Lemon</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Salted cashwew nuts</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-10.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-10.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Oranges</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€29.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-11.jpg" alt />
                {/*<img class="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" />*/}
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Punjabi namkeen</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€23.90</li>
                  <li className="current-price">€21.51</li>
                  <li className="discount-price">-10%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-13.jpg" alt />
                {/*<img class="second-img" src="assets/images/product-image/organic/product-3.jpg" alt="" />*/}
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Brixton Patrol All Terrain Anor...</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price not-cut">€18.90</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
        <div className="list-product-2">
          <article className="list-product mb-30px">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-14.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Burgers</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€11.90</li>
                  <li className="current-price">€10.12</li>
                  <li className="discount-price">-15%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/organic/product-15.jpg" alt />
                <img className="second-img" src="assets/images/product-image/organic/product-2.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html">
              </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Orange Juice</a></h2>
              <div className="rating-product">
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
                <i className="ion-android-star" />
              </div>
              <div className="pricing-meta">
                <ul>
                  <li className="old-price">€35.90</li>
                  <li className="current-price">€34.11</li>
                  <li className="discount-price">-5%</li>
                </ul>
              </div>
            </div>
            <div className="add-to-link">
              <ul>
                <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                <li>
                <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
        {/* Single Item */}
      </div>
      {/* Best Sell Slider Carousel End */}
    </div>
  </section>
  {/* Best Sell Area End */}
  {/* Feature Area 2 Start */}
  <section className="feature-area-2">
    <div className="container">
      <div className="row">
        {/* left side */}
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="feature-left">
            <img src="assets/images/feature-bg/1.jpg" alt className="img-responsive" />
          </div>
        </div>
        {/* left side */}
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Featured Products</h2>
          </div>
          {/* Section Title */}
          {/* Feature slide 2 start */}
          <div className="feature-slider-2 owl-carousel owl-nav-style">
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-18.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-18.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html">
                  </a><h2><a className="inner-link" href="shop-4-column.html" /><a href="single-product.html" className="product-link">Tomatoes</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-19.jpg" alt />
                    {/*<img class="second-img" src="assets/images/product-image/organic/product-20.jpg" alt="" />*/}
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Chocolate</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Mangoes</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€23.90</li>
                      <li className="current-price">€21.51</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-11.jpg" alt />
                    {/*<img class="second-img" src="assets/images/product-image/organic/product-12.jpg" alt="" />*/}
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Punjabi namkeen</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€23.90</li>
                      <li className="current-price">€21.51</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-2.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-15.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Mango Juice</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Mangoes</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€35.90</li>
                      <li className="current-price">€34.11</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-2.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-23.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Mango Juice</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€18.90</li>
                      <li className="current-price">€15.12</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-18.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-18.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Tomatoes</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-5.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-5.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Apricot</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€9.90</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-7.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-8.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Lemon</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€9.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-17.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-16.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">meat</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€18.90</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-10.jpg" alt />
                    {/*<img class="second-img" src="assets/images/product-image/organic/product-1.jpg" alt="" />*/}
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Oranges</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€11.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-22.jpg" alt />
                    {/*<img class="second-img" src="assets/images/product-image/organic/product-15.jpg" alt="" />*/}
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Tomato sauce</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€29.90</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-9.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-9.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Salted cashwew nuts</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€11.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-14.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-14.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Burgers</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€11.90</li>
                      <li className="current-price">€10.12</li>
                    </ul>
                  </div>
                </div>
              </article>
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-4.jpg" alt />
                    {/*<img class="second-img" src="assets/images/product-image/organic/product-3.jpg" alt="" />*/}
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Brixton Patrol All T...</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price not-cut">€18.90</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
            <div className="feature-slider-item">
              <article className="list-product">
                <div className="img-block">
                  <a href="single-product.html" className="thumbnail">
                    <img className="first-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                    <img className="second-img" src="assets/images/product-image/organic/product-1.jpg" alt />
                  </a>
                  <div className="quick-view">
                    <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                      <i className="ion-ios-search-strong" />
                    </a>
                  </div>
                </div>
                <div className="product-decs">
                  <a className="inner-link" href="shop-4-column.html" />
                  <h2><a href="single-product.html" className="product-link">Mangoes</a></h2>
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <div className="pricing-meta">
                    <ul>
                      <li className="old-price">€18.90</li>
                      <li className="current-price">€34.21</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            {/* slngle item */}
          </div>
          {/* Feature slide 2 End */}
        </div>
      </div>
    </div>
  </section>
  {/* Feature Area end */}
  {/* Recent Add Product Area Start */}
  {/* Recent product area end */}
  {/* Banner Area 2 Start */}
  <div className="banner-area-2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner-inner">
            <a href="#"><img src="assets/images/banner-image/4.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area 2 end */}
  {/* Feature Area Start */}
  {/* Feature Area End */}
  {/* Testimonial Area Start */}
  <section className="testimonial-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>What our happy customers says !</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Testimonial Slider Start */}
      <div className="testi-slider owl-carousel owl-dot-style">
        {/* Single item */}
        <div className="testi-slider-wrapper">
          <div className="testi-slider-inner">
            <div className="testi-img">
              <img src="assets/images/testimonial-image/1.png" alt />
            </div>
            <div className="testi-content">
              <div className="testi-content-text">
                “I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.
              </div>
              <div className="author-text">
                <h4>orando BLoom</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Single item */}
        <div className="testi-slider-wrapper">
          <div className="testi-slider-inner">
            <div className="testi-img">
              <img src="assets/images/testimonial-image/2.png" alt />
            </div>
            <div className="testi-content">
              <div className="testi-content-text">
                Wow. I just updated my site and it was SO SIMPLE. I am blown away. You guys truly great. Thanks for being so awesome. High fives!”
              </div>
              <div className="author-text">
                <h4>John hopkins</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Single item */}
        {/* Single item */}
      </div>
      {/* Testimonial Slider End */}
    </div>
  </section>
  {/* Testimonial Area end */}
  {/* Brand area start */}
  <div className="brand-area">
    <div className="container">
      <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
        <div className="brand-slider-item">
          <a href="#"><img src="https://brandongaille.com/wp-content/uploads/2014/04/15-Famous-Fruit-Company-Logos.jpg" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://logodesign.co.uk/wp-content/uploads/2017/05/autofruits1.jpg" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://mir-s3-cdn-cf.behance.net/projects/404/d8cb5e97145147.Y3JvcCwyNTAxLDE5NTYsMCwyNzI.jpg" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://images-platform.99static.com//NebtCXR1QZiOnXetOz1IQNCti-M=/335x7:835x507/fit-in/500x500/99designs-contests-attachments/35/35478/attachment_35478441" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://dcassetcdn.com/design_img/3445198/730555/730555_18926652_3445198_b520345f_image.jpg" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://cdn6.f-cdn.com/contestentries/265231/13897227/55d517381b980_thumb900.jpg" alt /></a>
        </div>
        <div className="brand-slider-item">
          <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/71Wr-yGXUyL._SX425_.jpg" alt /></a>
        </div>
      </div>
    </div>
  </div>
  {/* Brand area end */}
  {/* Footer Area start */}
  <footer className="footer-area">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          {/* footer single wedget */}
          <div className="col-md-6 col-lg-4">
            {/* footer logo */}
            <div className="footer-logo">
              <a href="index.html"><img src="assets/images/logo/footer-logo.png" alt /></a>
            </div>
            {/* footer logo */}
            <div className="about-footer">
              <div className="need-help">
                <p className="phone-info">
                  NEED HELP?
                  <span>
                    (+91) 12345 678 <br />
                  </span>
                </p>
              </div>
              <div className="social-info">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/Technocolabs/"><i className="ion-social-facebook" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/search?q=%23Technocolabs"><i className="ion-social-twitter" /></a>
                  </li>
                  <li>
                    <a href="https://technocolabs.tech/"><i className="ion-social-google" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer single wedget */}
          <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
            <div className="single-wedge">
              <h4 className="footer-herading">Information</h4>
              <div className="footer-links">
                <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><Link to="/about">About Page</Link></li>
                  <li><a href="#">Secure Payment</a></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Stores</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer single wedget */}
          <div className="col-md-6 col-lg-2 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
            <div className="single-wedge">
              <h4 className="footer-herading">Custom Links</h4>
              <div className="footer-links">
                <ul>
                  <li><a href="#">Legal Notice</a></li>
                  <li><a href="#">Prices Drop</a></li>
                  <li><a href="#">New Products</a></li>
                  <li><a href="#">Best Sales</a></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/myaccount">My Account</Link></li>
                </ul>
              </div>
            </div>
          </div>
          {/* footer single wedget */}
          <div className="col-md-6 col-lg-4 mt-res-md-50px mt-res-sx-30px mt-res-md-30px">
            <div className="single-wedge">
              <h4 className="footer-herading">Newsletter</h4>
              <div className="subscrib-text">
                <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
              </div>
              <div id="mc_embed_signup" className="subscribe-form">
                <form id="mc-embedded-subscribe-form" className="validate" noValidate target="_blank" name="mc-embedded-subscribe-form" method="post" action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef">
                  <div id="mc_embed_signup_scroll" className="mc-form">
                    <input className="email" type="email" required placeholder="Enter your email here.." name="EMAIL" defaultValue />
                    <div className="mc-news" aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                      <input type="text" defaultValue tabIndex={-1} name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                    </div>
                    <div className="clear">
                      <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" defaultValue="Sign Up" />
                    </div>
                  </div>
                </form>
              </div>
              <div className="img_app">
              </div>
            </div>
          </div>
          {/* footer single wedget */}
        </div>
      </div>
    </div>
    {/*  Footer Bottom Area start */}
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <p className="copy-text">Copyright © <a href="https://hasthemes.com/"> HasThemes</a>. All Rights Reserved</p>
          </div>
          <div className="col-md-6 col-lg-8">
            <img className="payment-img" src="assets/images/icons/payment.png" alt />
          </div>
        </div>
      </div>
    </div>
    {/*  Footer Bottom Area End*/}
  </footer>
  {/*  Footer Area End */}
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <div className="tab-content quickview-big-img">
                <div id="pro-1" className="tab-pane fade show active">
                  <img src="assets/images/product-image/organic/product-11.jpg" alt />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-9.jpg" alt />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-20.jpg" alt />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/organic/product-19.jpg" alt />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/organic/product-11.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/organic/product-9.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/organic/product-20.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/organic/product-19.jpg" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                <p className="reference">Reference:<span> demo_17</span></p>
                <div className="pro-details-rating-wrap">
                  <div className="rating-product">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                  <span className="read-review"><a className="reviews" href="#">Read reviews (1)</a></span>
                </div>
                <div className="pricing-meta">
                  <ul>
                    <li className="old-price not-cut">€18.90</li>
                  </ul>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                <div className="pro-details-size-color">
                  <div className="pro-details-color-wrap">
                    <span>Color</span>
                    <div className="pro-details-color-content">
                      <ul>
                        <li className="blue" />
                        <li className="maroon active" />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue={1} />
                  </div>
                  <div className="pro-details-cart btn-hover">
                  <Link to="/cart"> + Add To Cart</Link>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                  <Link to="/wishlist"><i className="ion-android-favorite-outline" />Add to wishlist</Link>
                  </div>
                  <div className="pro-details-compare">
                  <Link to="/compare"><i className="ion-ios-shuffle-strong" />Add to compare</Link>
                  </div>
                </div>
                <div className="pro-details-social-info">
                  <span>Share</span>
                  <div className="social-info">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/Technocolabs/"><i className="ion-social-facebook" /></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/search?q=%23Technocolabs"><i className="ion-social-twitter" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-google" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-instagram" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal end */}
  {/* Scripts to be loaded  */}
  {/* JS
============================================ */}
  {/*====== Vendors js ======*/}
  {/*====== Plugins js ======*/}
  {/* 
  
  
  
  
  
  
  
  
  
   */}
  {/*====== Use the minified version files listed below for better performance and remove the files listed above ======*/}
  {/* Main Activation JS */}
</div>

      </div>
        );
    }
}
export default Index1;
