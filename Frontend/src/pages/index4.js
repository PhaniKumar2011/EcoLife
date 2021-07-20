import React from 'react';
import { Link } from 'react-router-dom';

class Index4 extends React.Component {
  render() {
    return (
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
          <header className="main-header">
            {/* Header Top Start */}
            <div className="header-top-nav">
              <div className="container-fluid">
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
                          <li className="dropdown xs-after-n">
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
              <div className="container-fluid">
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
                              </ul>
                            </li>
                            <li className="menu-dropdown position-static">
                              <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                              <ul className="sub-menu sub-menu-2">
                                <li><Link to="/index3">Digital 1</Link></li>
                              </ul>
                            </li>
                            <li className="menu-dropdown position-static">
                              <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                              <ul className="sub-menu sub-menu-2">
                                <li><Link to="/index4">Furniture </Link></li>
                              </ul>
                            </li>
                            <li className="menu-dropdown position-static">
                              <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                              <ul className="sub-menu sub-menu-2">
                                <li><Link to="/index5">Medical </Link></li>
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
                                <li><Link to="/shop">Shop Grid 3 Column</Link></li>
                              </ul>
                            </li>
                            <li>
                              <ul>
                                <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                <li><Link to="/shoplist">Shop List</Link></li>
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
                    </li>
                    <li>
                      <ul>
                        <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                        <li><a href="single-product-slider.html">Shop Slider</a></li>
                        <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                        <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                        <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                        <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                      </ul>
                    </li> */}
                            <li className="banner-wrapper">
                              <a href="single-product.html"><img src="assets/images/banner-image/banner-menu.jpg" alt /></a>
                            </li>
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
                      {/*Contact info Start */}
                      <div className="contact-link">
                        <div className="phone">
                          <p>Call us:</p>
                          <a href="tel:(+800)345678">(+800)345678</a>
                        </div>
                      </div>
                      {/*Contact info End */}
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
                              <a className="default-btn" href="checkout.html">checkout</a>
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
                                <li><Link to="/">Organic </Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Home Cosmetic</a>
                              <ul>
                                <li><Link to="/index2">Cosmetic </Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Home Digital</a>
                              <ul>
                                <li><Link to="/index3">Digital </Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Home Furniture</a>
                              <ul>
                                <li><Link to="/index4">Furniture </Link></li>
                              </ul>
                            </li>
                            <li>
                              <a href="#">Home Medical</a>
                              <ul>
                                <li><Link to="/index5">Medical 1</Link></li>
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
                              </ul>
                            </li>
                            <li>
                              <a href="#">Shop List</a>
                              <ul>
                                <li><Link to="/shoplist">Shop List</Link></li>
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
                            <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
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
            {/*Header Bottom Account End */}
          </header>
          {/* Header End */}
          {/* Slider Arae Start */}
          <div className="slider-area">
            <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
              {/* Slider Single Item Start */}
              <div className="slider-height-13 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(assets/images/slider-image/sample-28.jpg)' }}>
                <div className="container">
                  <div className="slider-content-15 slider-content-13 slider-animated-1 text-left">
                    <h1 className="animated">
                      XECH T5 Sleek Desk Lamp<br />
                      <strong>With Wireless Charger</strong>
                    </h1>
                    <p className="animated">Wireless Charging Output: 5V/1A Lamp Arm Rotation Angle: 90 Degree</p>
                    {/* <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a> */}
                  </div>
                </div>
              </div>
              {/* Slider Single Item End */}
              {/* Slider Single Item Start */}
              <div className="slider-height-13 d-flex align-items-start justify-content-start bg-img" style={{ backgroundImage: 'url(assets/images/slider-image/sample-29.jpg)' }}>
                <div className="container">
                  <div className="slider-content-15 slider-content-13 slider-animated-1 text-left">
                    <h1 className="animated">
                      Interior Design Furniture<br />
                      <strong>For Your Dream Room</strong>
                    </h1>
                    <p className="animated">Kiln-dried hardwood frame. Apartment friendly design Sinuous Spring suspension system</p>
                    {/* <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a> */}
                  </div>
                </div>
              </div>
              {/* Slider Single Item End */}
            </div>
          </div>
          {/* Slider Arae End */}
          {/* Banner Area Start */}
          <div className="banner-3-area mt-30px">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
                  <div className="banner-wrapper banner-box">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/31.jpg" alt /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
                  <div className="banner-wrapper banner-box">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/32.jpg" alt /></a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div className="banner-wrapper banner-box">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/33.jpg" alt /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner Area End */}
          {/* Category Tab Area Start */}
          <section className="category-tab-area mt-100px mb-70px">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Section Title */}
                  <div className="section-title underline-shape underline-shape-bottom">
                    <h2 id="new_arrival">New Arrivals</h2>
                    {/* <p>Add new products to weekly line up</p> */}
                  </div>
                  {/* Section Title */}
                </div>
              </div>
              {/* Nav tabs */}
              {/* <ul class="nav nav-tabs mb-30px d-flex align-items-center justify-content-center">
                  <li class="nav-item">
                      <a class="nav-link active" data-toggle="tab" href="#feature">Room Furniture</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#onsale">Office Furniture</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" data-toggle="tab" href="#bestseller">Outdoor Furniture</a>
                  </li>
              </ul> */}
              {/* Tab panes */}
              <div className="tab-content">
                {/* 1st tab start */}
                <div id="feature" className="tab-pane active">
                  {/* Best Sell Slider Carousel Start */}
                  <div className="best-sell-slider owl-carousel owl-nav-style-3">
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/8.jpg" alt />
                            {/* <img class="second-img" src="assets/images/product-image/furniture/7.jpg" alt="" /> */}
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs text-center">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Kaval cantilever chair </a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/15.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/15.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Decore wooden stool</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/10.jpg" alt />
                            {/* <img class="second-img" src="assets/images/product-image/furniture/9.jpg" alt="" /> */}
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Brixton room lamp</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/furniture/16.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/16.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Kaval Folding stool</a></h2>
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
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/9.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/9.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Brixton long neck Lamp</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/11.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/12.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Decore desk chair</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/21.jpg" alt />
                            {/* <img class="second-img" src="assets/images/product-image/furniture/17.jpg" alt="" /> */}
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Madden desk chair</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/22.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/22.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">A1 Steel chair</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price not-cut">€19.90</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/13.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/13.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Originals wing chair</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/19.jpg" alt />
                            {/* <img class="second-img" src="assets/images/product-image/furniture/15.jpg" alt="" /> */}
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Kaval iron stool</a></h2>
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
                              <li className="current-price">€15.11</li>
                              <li className="discount-price">-20%</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/14.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/14.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Stone-wine cooler</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/20.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/20.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Havels LED Lamp</a></h2>
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
                  </div>
                  {/* Best Sell Slider Carousel End */}
                </div>
                {/* 1st tab end */}
                {/* 2nd tab start */}
                <div id="onsale" className="tab-pane fade">
                  {/* Best Sell Slider Carousel Start */}
                  <div className="best-sell-slider owl-carousel owl-nav-style-3">
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/8.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/7.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs text-center">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/15.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/15.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/10.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/9.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                          <h2><a href="single-product.html" className="product-link">Brixton Patrol All Terr...</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/furniture/16.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/16.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Luxury Men's Slim...</a></h2>
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
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/9.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/9.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/11.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/12.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                            <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/21.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/17.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Madden by Steve Madd...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/22.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/22.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded...</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price not-cut">€19.90</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/13.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/13.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Water and Wind Resist...</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/19.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/15.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
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
                              <li className="current-price">€15.11</li>
                              <li className="discount-price">-20%</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/14.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/14.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Solid Slee...</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/20.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/20.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
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
                  </div>
                  {/* Best Sell Slider Carousel End */}
                </div>
                {/* 2nd tab end */}
                {/* 3rd tab start */}
                <div id="bestseller" className="tab-pane fade">
                  {/* Best Sell Slider Carousel Start */}
                  <div className="best-sell-slider owl-carousel owl-nav-style-3">
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/8.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/7.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs text-center">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/15.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/15.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/10.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/9.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                          <h2><a href="single-product.html" className="product-link">Brixton Patrol All Terr...</a></h2>
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
                            <img className="first-img" src="assets/images/product-image/furniture/16.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/16.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Luxury Men's Slim...</a></h2>
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
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/9.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/9.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Originals Kaval Windbr...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/11.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/12.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quil...</a></h2>
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
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/21.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/17.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Madden by Steve Madd...</a></h2>
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
                      </article>
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/22.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/22.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded...</a></h2>
                          <div className="rating-product">
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                            <i className="ion-android-star" />
                          </div>
                          <div className="pricing-meta">
                            <ul>
                              <li className="old-price not-cut">€19.90</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/13.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/13.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Water and Wind Resist...</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/19.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/15.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
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
                              <li className="current-price">€15.11</li>
                              <li className="discount-price">-20%</li>
                            </ul>
                          </div>
                        </div>
                      </article>
                    </div>
                    {/* Product Single Item */}
                    <div className="product-inner-item">
                      <article className="list-product mb-30px">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/14.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/14.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">Juicy Couture Solid Slee...</a></h2>
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
                      <article className="list-product">
                        <div className="img-block">
                          <a href="single-product.html" className="thumbnail">
                            <img className="first-img" src="assets/images/product-image/furniture/20.jpg" alt />
                            <img className="second-img" src="assets/images/product-image/furniture/20.jpg" alt />
                          </a>
                          <div className="add-to-link">
                            <ul>
                              <li>
                                <Link to="/cart" title="Add to Cart"><i className="ion-bag" /></Link>
                              </li>
                              <li>
                                <Link to="/wishlist" title="wishlist"><i className="ion-android-favorite-outline" /></Link>
                              </li>
                              <li>
                                <Link to="/compare" title="Compare"><i className="ion-ios-shuffle-strong" /></Link>
                              </li>
                              <li>
                                <a href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal"><i className="ion-ios-search-strong" /></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <ul className="product-flag">
                          <li className="new">New</li>
                        </ul>
                        <div className="product-decs">
                          <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" className="product-link">New Balance Fresh Foa...</a></h2>
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
                  </div>
                  {/* Best Sell Slider Carousel End */}
                </div>
                {/* 3rd tab end */}
              </div>
            </div>
          </section>
          {/* Category Tab Area end */}
          {/* Static Banner Area Start */}
          <section className="static-banner-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="banner-wrapper banner-box">
                    <a href="#"><img className="img-responsive" src="assets/images/banner-image/43.jpg" alt /></a>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 d-flex align-self-center col-xs-12">
                  <div className="static-banner-content">
                    <h2>Weekend Sale</h2>
                    <h3>Up to 80% off</h3>
                    <p>Brillant White Couch Regarding Sofa Set Living Room Furniture Moder High Quality Gargeous Inspirations</p>
                    {/* <a href="shop-4-column.html">shop now</a> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Static Banner Area end */}
          {/* Static Countdown Area Start */}
          {/* <section class="static-countdown-area">
          <div class="container">
              <div class="row">
                  <div class="col-md-5 d-flex align-self-center">
                      <div class="static-countdown-content">
                          <h2>The Richmond Sofa</h2>
                          <p class="countdown-price">$69.00</p>
                          <p>Available in 3 shapes and 19 fabrics</p>
                          <div class="clockdiv">
                              <div data-countdown="2021/03/01"></div>
                          </div>
                          <a class="shop_now" href="#">Shop Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </section> */}
          {/* Static Countdown Area End */}
          {/* Feature Area Start */}
          <section className="feature-area mt-100px mb-70px">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Section Title */}
                  <div className="section-title underline-shape">
                    <h2>Featured Products</h2>
                    {/* <p></p> */}
                  </div>
                  {/* Section Title */}
                </div>
              </div>
              {/* Feature Slider Start */}
              <div className="feature-slider owl-carousel owl-nav-style-3">
                {/* Single Item */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/furniture/31.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/30.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Phare portable LED Lamp</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/furniture/23.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/24.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Kaval Iron stool</a></h2>
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
                {/* Single Item */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/furniture/25.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/16.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Madden Desk Chair</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/furniture/7.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/8.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Originals executive chair</a></h2>
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
                {/* Single Item */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/furniture/9.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/10.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Brixton long neck lamp</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/furniture/11.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/furniture/12.jpg" alt />
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Decore desk chair</a></h2>
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
                {/* Single Item */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/furniture/13.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/14.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Originals wing chair</a></h2>
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
                        <img className="first-img" src="assets/images/product-image/furniture/15.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/16.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Docore Wooden stool</a></h2>
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
                {/* Single Item */}
                {/* <div class="feature-slider-item">
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/17.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/18.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                              <h2><a href="single-product.html" class="product-link">Juicy Couture Trico...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price not-cut">€9.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/19.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/20.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                              <h2><a href="single-product.html" class="product-link">Fila Locker Room V...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price not-cut">€9.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                  </div> */}
                {/* Single Item */}
                {/* <div class="feature-slider-item">
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/21.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/22.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" class="product-link">Trans-Weight Hood...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price">€18.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/23.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/24.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" class="product-link">New Luxury Men's...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price">€11.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                  </div> */}
                {/* Single Item */}
                {/* <div class="feature-slider-item"> */}
                {/* <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/25.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/26.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                              <h2><a href="single-product.html" class="product-link">Calvin Klein Jeans...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price not-cut">€29.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article> */}
                {/* </div> */}
                {/* Single Item */}
                {/* <div class="feature-slider-item">
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/29.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/30.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>GRAPIC CORNER</span></a>
                              <h2><a href="single-product.html" class="product-link">Madden by Steve...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price">€11.90</li>
                                      <li class="current-price">€10.12</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                      <article class="list-product">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/furniture/31.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/furniture/1.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" class="product-link">Brixton Patrol All T...</a></h2>
                              <div class="rating-product">
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                                  <i class="ion-android-star"></i>
                              </div>
                              <div class="pricing-meta">
                                  <ul>
                                      <li class="old-price not-cut">€18.90</li>
                                  </ul>
                              </div>
                          </div>
                      </article>
                  </div> */}
                {/* Single Item */}
                <div className="feature-slider-item">
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        {/* <img class="first-img" src="assets/images/product-image/furniture/2.jpg" alt="" /> */}
                        <img className="first-img" src="assets/images/product-image/furniture/3.jpg" alt />
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Brixton Three leged stool</a></h2>
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
                  <article className="list-product">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/furniture/27.jpg" alt />
                        {/* <img class="second-img" src="assets/images/product-image/furniture/28.jpg" alt="" /> */}
                      </a>
                      <div className="quick-view">
                        <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                          <i className="ion-ios-search-strong" />
                        </a>
                      </div>
                    </div>
                    <div className="product-decs">
                      <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                      <h2><a href="single-product.html" className="product-link">Decore wooden desk</a></h2>
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
                {/* Single Item */}
              </div>
              {/* Feature Slider End */}
            </div>
          </section>
          {/* Feature Area End */}
          {/* Blog area Start */}
          <section className="blog-area mb-30px">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Section title */}
                  <div className="section-title underline-shape">
                    <h2>Latest Blogs</h2>
                    {/* <p>Present posts in a best way to highlight interesting moments of your blog.</p> */}
                  </div>
                  {/* Section title */}
                </div>
              </div>
              {/* Blog Slider Start */}
              <div className="blog-slider-active owl-carousel owl-nav-style-3">
                {/* single item */}
                <article className="blog-post">
                  <div className="blog-post-top">
                    <div className="blog-img banner-wrapper">
                      <a href="#"><img src="https://flyingfurnitureoutlet.com/wp-content/uploads/2020/08/blue-and-gray-elegant-living-room-XEMGR2R1.jpg" alt /></a>
                    </div>
                    <Link to="/blogleft" className="blog-meta">Furniture</Link>
                  </div>
                  <div className="blog-post-content">
                    <h4 className="blog-post-heading"><Link to="/blogleft">Fine woodworking</Link></h4>
                    <p className="blog-text">
                      There are many reasons for buying furniture, but the most important underlying reason is that it is the backdrop to our lives. Our furnishing needs change as our lives go through changes both big and small. We need furniture for more comfortable lives and use it for storage, for sitting on, and for sleeping                              </p>
                    <Link className="read-more-btn" href="/blogleft"> Read More <i className="ion-android-arrow-dropright-circle" /></Link>
                  </div>
                </article>
                {/* single item */}
                <article className="blog-post">
                  <div className="blog-post-top">
                    <div className="blog-img banner-wrapper">
                      <a href="#"><img src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt /></a>
                    </div>
                    <Link to="/blogleft" className="blog-meta">Electronics</Link>
                  </div>
                  <div className="blog-post-content">
                    <h4 className="blog-post-heading"><Link to="/blogleft">Spark Electronics</Link></h4>
                    <p className="blog-text">
                      Technology and gadgets are now indispensable in our daily lives. In the past few years carrying a miniature computer (a smart phone) in a pocket has become commonplace. Technology helps advance the human race forward and makes doing mundane things more efficient and repeatable.</p>
                    <Link className="read-more-btn" to="/blogleft"> Read More <i className="ion-android-arrow-dropright-circle" /></Link>
                  </div>
                </article>
                {/* single item */}
                <article className="blog-post">
                  <div className="blog-post-top">
                    <div className="blog-img banner-wrapper">
                      <a href="#"><img src="https://miro.medium.com/max/1000/0*NtHx74bTuIrwQbfd.jpg" alt /></a>
                    </div>
                    <Link to="/blogleft" className="blog-meta">Medilife</Link>
                  </div>
                  <div className="blog-post-content">
                    <h4 className="blog-post-heading"><Link to="/blogleft">MediLife</Link></h4>
                    <p className="blog-text">
                      Digital health, which includes digital care programs, is the convergence of digital technologies with health, healthcare, living, and society to enhance the efficiency of healthcare delivery to make medicine more personalized and precise.
              </p>
                    <Link className="read-more-btn" to="/blogleft"> Read More <i className="ion-android-arrow-dropright-circle" /></Link>
                  </div>
                </article>
                {/* single item */}
                <article className="blog-post">
                  <div className="blog-post-top">
                    <div className="blog-img banner-wrapper">
                      <a href="#"><img src="https://images.mygoodtimes.in/wp-content/uploads/2018/10/16103333/Main-Image-Ladys-Bag.jpg" alt /></a>
                    </div>
                    <Link to="/blogleft" className="blog-meta">Fashion</Link>
                  </div>
                  <div className="blog-post-content">
                    <h4 className="blog-post-heading"><Link to="/blogleft">Fashion hub</Link></h4>
                    <p className="blog-text">
                      Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.[1] In its everyday use, the term implies a look defined by the fashion industry as that which is trending. Everything that is considered fashion is available and popular by the fashion system (industry and media).
              </p>
                    <Link className="read-more-btn" to="/blogleft"> Read More <i className="ion-android-arrow-dropright-circle" /></Link>
                  </div>
                </article>
                {/* single item */}
              </div>
              {/* Blog Slider Start */}
            </div>
          </section>
          {/* Blog Area End */}
          {/* Category Product  Area start*/}
          <section className="category-product-area home-10 mt-40px mb-70px">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-12 col-xl-9">
                  <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-4">
                      {/* Section Title */}
                      <div className="section-title underline-shape underline-shape-left">
                        <h2>Home Furniture</h2>
                      </div>
                      {/* Section Title */}
                      <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style owl-nav-style-4">
                        {/* Single Item */}
                        <div className="feature-slider-item">
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/7.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/8.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Originals executive....</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/furniture/9.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/10.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Originals Kaval Win...</a></h2>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                              <div className="pricing-meta">
                                <ul>
                                  <li className="old-price">€29.90</li>
                                  <li className="current-price">€21.51</li>
                                </ul>
                              </div>
                            </div>
                          </article>
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/11.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/12.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Decore desk chair</a></h2>
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
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/13.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/14.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Juicy Couture Solid...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/15.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/16.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Originals Kaval Win...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/17.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/18.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Balance Fresh...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/19.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/20.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Juicy Couture Solid...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/21.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/22.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Originals Kaval Win...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/23.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/24.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Balance Fresh...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-4">
                      {/* Section Title */}
                      <div className="section-title mt-res-sx-30px mt-res-md-30px underline-shape underline-shape-left">
                        <h2>Office Furniture</h2>
                      </div>
                      {/* Section Title */}
                      <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style owl-nav-style-4">
                        {/* Single Item */}
                        <div className="feature-slider-item">
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/25.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/26.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Madden desk chair</a></h2>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                              <div className="pricing-meta">
                                <ul>
                                  <li className="old-price">€29.90</li>
                                  <li className="current-price">€21.51</li>
                                </ul>
                              </div>
                            </div>
                          </article>
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/27.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/28.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Decore wooden desk</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/furniture/13.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/30.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Originals wing chair</a></h2>
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
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/31.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/1.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Juicy Couture Solid...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/7.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/8.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Brixton Patrol Terr...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€10.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/9.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/10.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Balance Fresh...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/11.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/12.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Juicy Couture Solid...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€20.90</li>
                                                      <li class="current-price">€15.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/13.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/14.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Brixton Patrol Terr...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/15.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/16.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Balance Fresh...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-4">
                      {/* Section Title */}
                      <div className="section-title mt-res-sx-30px mt-res-md-30px underline-shape underline-shape-left">
                        <h2>Outdoor Furniture</h2>
                      </div>
                      {/* Section Title */}
                      <div className="category-product-slider owl-carousel responsive-owl-nav-style owl-nav-style owl-nav-style-4">
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/17.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/18.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Water and Wind...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€29.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/19.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/20.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Luxury Men's...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€19.90</li>
                                                      <li class="current-price">€15.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/21.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/22.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Trans-Weight Ho...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€14.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                        {/* <div class="feature-slider-item">
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/23.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/24.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Juicy Couture Solid...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€12.90</li>
                                                      <li class="current-price">€11.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/25.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/26.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">New Luxury Slim...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price not-cut">€9.90</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                      <article class="list-product">
                                          <div class="img-block">
                                              <a href="single-product.html" class="thumbnail">
                                                  <img class="first-img" src="assets/images/product-image/furniture/27.jpg" alt="" />
                                                  <img class="second-img" src="assets/images/product-image/furniture/28.jpg" alt="" />
                                              </a>
                                              <div class="quick-view">
                                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                      <i class="ion-ios-search-strong"></i>
                                                  </a>
                                              </div>
                                          </div>
                                          <div class="product-decs">
                                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                              <h2><a href="single-product.html" class="product-link">Trans-Weight Ho...</a></h2>
                                              <div class="rating-product">
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                                  <i class="ion-android-star"></i>
                                              </div>
                                              <div class="pricing-meta">
                                                  <ul>
                                                      <li class="old-price">€29.90</li>
                                                      <li class="current-price">€21.51</li>
                                                  </ul>
                                              </div>
                                          </div>
                                      </article>
                                  </div> */}
                        {/* Single Item */}
                        <div className="feature-slider-item">
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/19.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/30.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Kaval Iron stool</a></h2>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                              <div className="pricing-meta">
                                <ul>
                                  <li className="old-price">€15.90</li>
                                  <li className="current-price">€10.51</li>
                                </ul>
                              </div>
                            </div>
                          </article>
                          <article className="list-product">
                            <div className="img-block">
                              <a href="single-product.html" className="thumbnail">
                                <img className="first-img" src="assets/images/product-image/furniture/31.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/7.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Phare Portable LED...</a></h2>
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
                                <img className="first-img" src="assets/images/product-image/furniture/8.jpg" alt />
                                {/* <img class="second-img" src="assets/images/product-image/furniture/9.jpg" alt="" /> */}
                              </a>
                              <div className="quick-view">
                                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i className="ion-ios-search-strong" />
                                </a>
                              </div>
                            </div>
                            <div className="product-decs">
                              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" className="product-link">Kaval cantilever...</a></h2>
                              <div className="rating-product">
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                                <i className="ion-android-star" />
                              </div>
                              <div className="pricing-meta">
                                <ul>
                                  <li className="old-price">€25.90</li>
                                  <li className="current-price">€21.51</li>
                                </ul>
                              </div>
                            </div>
                          </article>
                        </div>
                        {/* Single Item */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12 d-lg-none d-xl-block col-xl-3 mtb-res-sm-30 mtb-res-md-30">
                  <div className="banner-inner">
                    <a href="shop-4-column.html"><img src="assets/images/banner-image/39.jpg" alt className="img-responsive" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Category Product  Area end*/}
          {/* Brand area start */}
          <div className="brand-area mb-100px">
            <div className="container">
              <div className="border-1px">
                <div className="brand-slider owl-carousel owl-nav-style owl-nav-style-2">
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/1.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/2.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/3.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/4.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/5.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/1.jpg" alt /></a>
                  </div>
                  <div className="brand-slider-item">
                    <a href="#"><img src="assets/images/brand-logo/2.jpg" alt /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Brand area End */}
          {/* Footer Area start */}
          <footer className="footer-area">
                        <div className="footer-top">
                            <div className="container">
                                <div className="row">
                                    {/* footer single wedget */}
                                    <div className="col-md-6 col-lg-4">
                                        {/* footer logo */}
                                        <div className="footer-logo">
                                            <a href="index.html"><img src="assets/images/logo/logo-furniture.jpg" alt /></a>
                                        </div>
                                        {/* footer logo */}
                                        <div className="about-footer">
                                            <p className="text-info" />
                                            <div className="need-help">
                                                <p className="phone-info">
                                                    NEED HELP?
                  <span>
                                                        (+800) 345 678 <br />
                    (+800) 123 456
                  </span>
                                                </p>
                                            </div>
                                            <div className="social-info">
                                                <ul>
                                                    <li>
                                                        <a href="https://www.facebook.com/Technocolabs"><i className="ion-social-facebook" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://twitter.com/Technocolabs1?s=09"><i className="ion-social-twitter" /></a>
                                                    </li>
                                                    {/* <li>
                                        <a href="#"><i class="ion-social-youtube"></i></a>
                                    </li> */}
                                                    <li>
                                                        <a href="contact@technocolabs.tech"><i className="ion-social-google" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="https://www.instagram.com/technocolabs94/"><i className="ion-social-instagram" /></a>
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
                                                        <div className="mc-news" aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                                                            <input type="text" defaultValue tabIndex={-1} name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                                        </div>
                                                        <div className="clear">
                                                            <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" defaultValue="Sign Up" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="img_app">
                                                <a href="https://www.apple.com/in/app-store/"><img src="assets/images/icons/app_store.png" alt /></a>
                                                <a href="https://play.google.com/store"><img src="assets/images/icons/google_play.png" alt /></a>
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
                </div>
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
                                                <img src="assets/images/product-image/furniture/1.jpg" alt />
                                            </div>
                                            <div id="pro-2" className="tab-pane fade">
                                                <img src="assets/images/product-image/furniture/2.jpg" alt />
                                            </div>
                                            <div id="pro-3" className="tab-pane fade">
                                                <img src="assets/images/product-image/furniture/3.jpg" alt />
                                            </div>
                                            <div id="pro-4" className="tab-pane fade">
                                                <img src="assets/images/product-image/furniture/4.jpg" alt />
                                            </div>
                                        </div>
                                        {/* Thumbnail Large Image End */}
                                        {/* Thumbnail Image End */}
                                        <div className="quickview-wrap mt-15">
                                            <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                                                <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/furniture/1.jpg" alt /></a>
                                                <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/furniture/2.jpg" alt /></a>
                                                <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/furniture/3.jpg" alt /></a>
                                                <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/furniture/4.jpg" alt /></a>
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
                                                            <a href="https://www.facebook.com/Technocolabs"><i className="ion-social-facebook" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://twitter.com/Technocolabs1?s=09"><i className="ion-social-twitter" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="contact@technocolabs.tech"><i className="ion-social-google" /></a>
                                                        </li>
                                                        <li>
                                                            <a href="https://www.instagram.com/technocolabs94/"><i className="ion-social-instagram" /></a>
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



            //   </div>
        );

    }
}
export default Index4;