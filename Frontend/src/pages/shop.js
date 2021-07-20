import React from 'react'
import { Link } from 'react-router-dom';

class Shop extends React.Component {
  render() {
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
            {/* Breadcrumb Area start */}
            <section className="breadcrumb-area">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="breadcrumb-content">
                      <h1 className="breadcrumb-hrading">Shop Page</h1>
                      <ul className="breadcrumb-links">
                        <li><a href="index.html">Home</a></li>
                        <li>Shop Grid</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Breadcrumb Area End */}
            {/* Shop Category Area End */}
            <div className="shop-category-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    {/* Shop Top Area Start */}
                    <div className="shop-top-bar">
                      {/* Left Side start */}
                      <div className="shop-tab nav mb-res-sm-15">
                        <a className="active" href="#shop-1" data-toggle="tab">
                          <i className="fa fa-th show_grid" />
                        </a>
                        <a href="#shop-2" data-toggle="tab">
                          <i className="fa fa-list-ul" />
                        </a>
                        {/* <p>There Are 17 Products.</p> */}
                      </div>
                      {/* Left Side End */}
                      {/* Right Side Start */}
                      <div className="select-shoing-wrap">
                        <div className="shot-product">
                          <p>Sort By:</p>
                        </div>
                        <div className="shop-select">
                          <select>
                            <option value>Sort by newness</option>
                            <option value>A to Z</option>
                            <option value> Z to A</option>
                            <option value>In stock</option>
                          </select>
                        </div>
                      </div>
                      {/* Right Side End */}
                    </div>
                    {/* Shop Top Area End */}
                    {/* Shop Bottom Area Start */}
                    <div className="shop-bottom-area mt-35">
                      {/* Shop Tab Content Start */}
                      <div className="tab-content jump">
                        {/* Tab One Start */}
                        <div id="shop-1" className="tab-pane active">
                          <div className="row">
                            <div className="col-md-4 col-sm-6">
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
                                <ul className="product-flag">
                                  <li className="new">New</li>
                                </ul>
                                <div className="product-decs">
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Juicy Fresh mango</a></h2>
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
                            </div>
                            <div className="col-md-4 col-sm-6">
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Mighty Mango Juice</a></h2>
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
                            <div className="col-md-4 col-sm-6">
                              <article className="list-product">
                                <div className="img-block">
                                  <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-3.jpg" alt />
                                    {/* <img class="second-img" src="assets/images/product-image/organic/product-4.jpg" alt="" /> */}
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
                                  <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                  <h2><a href="single-product.html" className="product-link">California Almonds</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                  <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                  <h2><a href="single-product.html" className="product-link">Fresh Walnuts</a></h2>
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
                            <div className="col-md-4 col-sm-6">
                              <article className="list-product">
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Fresh strawberries</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                <ul className="product-flag">
                                  <li className="new">New</li>
                                </ul>
                                <div className="product-decs">
                                  <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNAR</span></a>
                                  <h2><a href="single-product.html" className="product-link">Juicy Oranges</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                <ul className="product-flag">
                                  <li className="new">New</li>
                                </ul>
                                <div className="product-decs">
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Salted Cashews</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Juicy oranges</a></h2>
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
                            <div className="col-md-4 col-sm-6">
                              <article className="list-product">
                                <div className="img-block">
                                  <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-11.jpg" alt />
                                    <img className="second-img" src="assets/images/product-image/organic/product-12.jpg" alt />
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link" /></h2>
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
                                </div> --&gt;
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
                            </div> --&gt;
                    <div className="col-md-4 col-sm-6">
                              <article className="list-product">
                                <div className="img-block">
                                  <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-13.jpg" alt />
                                    {/* <img class="second-img" src="assets/images/product-image/organic/product-3.jpg" alt="" /> */}
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Rough cuts chips</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                <ul className="product-flag">
                                  <li className="new">New</li>
                                </ul>
                                <div className="product-decs">
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Fresh Burger</a></h2>
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
                            </div>
                            <div className="col-md-4 col-sm-6">
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Juicy Fruit juice</a></h2>
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
                            <div className="col-md-4 col-sm-6">
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
                                <ul className="product-flag">
                                  <li className="new">New</li>
                                </ul>
                                <div className="product-decs">
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">Juicy Mangoes</a></h2>
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
                            </div>
                            <div className="col-md-4 col-sm-6">
                              <article className="list-product">
                                <div className="img-block">
                                  <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-2.jpg" alt />
                                    {/* <img class="second-img" src="assets/images/product-image/organic/product-15.jpg" alt="" /> */}
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
                                  <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                  <h2><a href="single-product.html" className="product-link">New Balance</a></h2>
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
                            <div className="col-md-4 col-sm-6">
                              <article className="list-product">
                                <div className="img-block">
                                  <a href="single-product.html" className="thumbnail">
                                    <img className="first-img" src="assets/images/product-image/organic/product-3.jpg" alt />
                                    {/* <img class="second-img" src="assets/images/product-image/organic/product-4.jpg" alt="" /> */}
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
                                  <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                  <h2><a href="single-product.html" className="product-link">Fresh New Calfornia Almonds</a></h2>
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
                          </div>
                        </div>
                        {/* Tab One End */}
                        {/* Tab Two Start */}
                        <div id="shop-2" className="tab-pane">
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-7.jpg" alt />
                                          {/* <img class="second-img" src="assets/images/product-image/organic/product-8.jpg" alt="" /> */}
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Fila Locker Room Varsity Jacket</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Create a cool and sporty look with the FILA® Locker Room Varsity Jacket.</p>
                                          <p>Comfortable cotton-blend fabrication.</p>
                                          <p>Classic varsity jacket features brand details throughout.</p>
                                          <p>Flat knit collar.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>299 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Juicy Couture Tricot Logo Stripe Jacket</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Freshen up your look with the Juicy Couture™ Tricot Logo Stripe Jacket.</p>
                                          <p>Polyester fabrication flaunts stripe and brand logo detail at sleeves.</p>
                                          <p>Stand collar.</p>
                                          <p>Front-zipper closure.</p>
                                          <p>100% polyester.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>300 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-19.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-20.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                        <h2><a href="single-product.html" className="product-link">New Balance Fresh Foam LAZR v1 Sport</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>The New Balance® Fresh Foam LAZR v1 Sport running shoe gives you total focus on the road with its precision-engineered design.</p>
                                          <p>Predecessor: None.</p>
                                          <p>Support Type: Neutral.</p>
                                          <p>Flat knit collar.</p>
                                          <p>Cushioning: Minimal feel with extreme flexibility.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>300 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                      <ul className="product-flag">
                                        <li className="new">New</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Juicy Couture Solid Sleeve Puffer Jacket</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Stay toasty with this Juicy Couture™ Solid Sleeve Puffer Jacket!</p>
                                          <p>Stand collar.</p>
                                          <p>Long sleeves.</p>
                                          <p>100% polyester;</p>
                                          <p>Lining: 100% polyester;</p>
                                          <p>Filling: 100% polyester.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>299 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-23.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">New Balance Fresh Foam Kaymin</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Increase your distance with the superior cushioning of the Fresh Foam Kaymin running shoe from New Balance®.</p>
                                          <p>Predecessor: None.</p>
                                          <p>Support Type: Neutral.</p>
                                          <p>Cushioning: High energizing cushioning.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>298 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Water and Wind Resistant Insulated Jacket</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Stay ready for a change in weather with the IZOD® Water and Wind Resistant Insulated Jacket.</p>
                                          <p>Water-resistant jacket keeps you warm and dry.</p>
                                          <p>Stand collar features an attached hood.</p>
                                          <p>Front-zip closure.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>291 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-16.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-17.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                        <h2><a href="single-product.html" className="product-link">Trans-Weight Hooded Wind and Water Resistant Shell</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star-half" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€11.90</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Keep the elements away and warmth priority number one in this Nautica® Trans-Weight Hooded Wind and Water Resistant Shell.</p>
                                          <p>Hooded collar with a high collar for maximum coverage.</p>
                                          <p>Long sleeves with banded collars.</p>
                                          <p>Zip front closure.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>299 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Madden by Steve Madden Cale 6</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price">€19.90</li>
                                            <li className="current-price">€10.12</li>
                                            <li className="discount-price">-15%</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>No one can deny your sleek style with these handsome Madden by Steve Madden® Cale 6 oxfords.</p>
                                          <p>Man-made upper features a plain toe.</p>
                                          <p>Lace-up closure.</p>
                                          <p>Man-made lining.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>299 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-15.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-22.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Calvin Klein Jeans Reflective Logo Full Zip</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€29.00</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Calvin Klein® Jeans hoodie with reflective logo detailing at the sleeves.</p>
                                          <p>Sweatshirt crafted in a soft-knit fabric for superior comfort.</p>
                                          <p>Drawstring hood.</p>
                                          <p>Long sleeves.</p>
                                          <p>Full-zip front.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>300 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">New Balance Arishi Sport v1</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€29.00</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Break old records and make new goals in the New Balance® Arishi Sport v1.</p>
                                          <p>Predecessor: None.</p>
                                          <p>Support Type: Neutral.</p>
                                          <p>Cushioning: High energizing cushioning.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>899 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-3.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-4.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Brixton Patrol All Terrain Anorak Jacket</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€29.00</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Whether you're exploring the woods or the city, the Brixton™ Patrol All Terrain Anorak Jacket has got you covered.</p>
                                          <p>Camo jacket crafted from 4.5 oz nylon ripstop with two-way stretch, and a water-repellent coating.</p>
                                          <p>Drawstring hood.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>899 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                        <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quilted Terry Track Jacket</a></h2>
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
                                            <li className="current-price">€34.12</li>
                                            <li className="discount-price">-5%</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Score extra points when it comes to your sporty look with the Juicy Couture™ Juicy Quilted Terry Track Jacket.</p>
                                          <p>Soft terry construction in a quilted design.</p>
                                          <p>Front zipper closure.</p>
                                          <p>61% cotton, 39% polyester;</p>
                                          <p>Lining: 58% cotton, 42% polyester.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>1189 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-11.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-12.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                        <h2><a href="single-product.html" className="product-link">Originals Kaval Windbreaker Winter Jacket</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket.</p>
                                          <p>Part of the Kaval Collection.</p>
                                          <p>Regular fit is eased, but not sloppy, and perfect for any activity.</p>
                                          <p>Plain-woven jacket specifically constructed for freedom of movement.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>299 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">New Luxury Men's Slim Fit Shirt Short Sleeve...</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€29.00</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Break old records and make new goals in the New Balance® Arishi Sport v1.</p>
                                          <p>Predecessor: None.</p>
                                          <p>Support Type: Neutral.</p>
                                          <p>Cushioning: High energizing cushioning.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>397 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap mb-30px scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-4.jpg" alt />
                                          <img className="second-img" src="assets/images/product-image/organic/product-4.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Brixton Patrol All Terrain Anorak Jacket 2</a></h2>
                                        <div className="rating-product">
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                          <i className="ion-android-star" />
                                        </div>
                                        <div className="pricing-meta">
                                          <ul>
                                            <li className="old-price not-cut">€29.00</li>
                                          </ul>
                                        </div>
                                        <div className="product-intro-info">
                                          <p>Whether you're exploring the woods or the city, the Brixton™ Patrol All Terrain Anorak Jacket has got you covered.</p>
                                          <p>Camo jacket crafted from 4.5 oz nylon ripstop with two-way stretch, and a water-repellent coating.</p>
                                          <p>Drawstring hood.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>400 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="shop-list-wrap scroll-zoom">
                            <div className="row list-product m-0px">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                    <div className="left-img">
                                      <div className="img-block">
                                        <a href="single-product.html" className="thumbnail">
                                          <img className="first-img" src="assets/images/product-image/organic/product-15.jpg" alt />
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
                                    </div>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <div className="product-desc-wrap">
                                      <div className="product-decs">
                                        <a className="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                        <h2><a href="single-product.html" className="product-link">Juicy Couture Juicy Quilted Terry Track Jacket 2</a></h2>
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
                                        <div className="product-intro-info">
                                          <p>Score extra points when it comes to your sporty look with the Juicy Couture™ Juicy Quilted Terry Track Jacket.</p>
                                          <p>Soft terry construction in a quilted design.</p>
                                          <p>Front zipper closure.</p>
                                          <p>61% cotton, 39% polyester;</p>
                                          <p>Lining: 58% cotton, 42% polyester.</p>
                                        </div>
                                        <div className="in-stock">Availability: <span>199 In Stock</span></div>
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Tab Two End */}
                      </div>
                      {/* Shop Tab Content End */}
                      {/*  Pagination Area Start */}
                      <div className="pro-pagination-style text-center">
                        <ul>
                          <li>
                            <a className="prev" href="#"><i className="ion-ios-arrow-left" /></a>
                          </li>
                          <li><a className="active" href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li>
                            <a className="next" href="#"><i className="ion-ios-arrow-right" /></a>
                          </li>
                        </ul>
                      </div>
                      {/*  Pagination Area End */}
                    </div>
                    {/* Shop Bottom Area End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Shop Category Area End */}
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



      </div>
    );

  }
}
export default Shop;
