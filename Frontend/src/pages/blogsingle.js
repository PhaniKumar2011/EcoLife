import React from 'react';
import {Link} from 'react-router-dom';

class Blogsingle extends React.Component {
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
                                                                <li><Link to="/shop">Shop Grid 3 Column</Link></li>
                                                                {/* <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li> */}
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                                                <li><Link to="/shoplist">Shop List</Link></li>
                                                                {/* <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                            <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li> */}
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
                                                        <li className="menu-dropdown position-static">
                                                            <a href="#">Blog List <i className="ion-ios-arrow-down" /></a>
                                                            <ul className="sub-menu sub-menu-2">
                                                                <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                                <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-dropdown position-static">
                                                            <a href="#">Blog Single <i className="ion-ios-arrow-down" /></a>
                                                            <ul className="sub-menu sub-menu-2">
                                                                <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
                                                                <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
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
                                                                <li><a href="index.html">Organic 1</a></li>
                                                                <li><a href="index-2.html">Organic 2</a></li>
                                                                <li><a href="index-3.html">Organic 3</a></li>
                                                                <li><a href="index-4.html">Organic 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Cosmetic</a>
                                                            <ul>
                                                                <li><Link to="/index2">Cosmetic 1</Link></li>
                                                                <li><a href="index-6.html">Cosmetic 2</a></li>
                                                                <li><a href="index-7.html">Cosmetic 3</a></li>
                                                                <li><a href="index-8.html">Cosmetic 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Digital</a>
                                                            <ul>
                                                                <li><Link to="/index3">Digital 1</Link></li>
                                                                <li><a href="index-10.html">Digital 2</a></li>
                                                                <li><a href="index-11.html">Digital 3</a></li>
                                                                <li><a href="index-12.html">Digital 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Furniture</a>
                                                            <ul>
                                                                <li><a href="index-13.html">Furniture 1</a></li>
                                                                <li><a href="index-14.html">Furniture 2</a></li>
                                                                <li><Link to="/index4">Furniture 3</Link></li>
                                                                <li><a href="index-16.html">Furniture 4</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Medical</a>
                                                            <ul>
                                                                <li><Link to="/index5">Medical 1</Link></li>
                                                                <li><a href="index-18.html">Medical 2</a></li>
                                                                <li><a href="index-19.html">Medical 3</a></li>
                                                                <li><a href="index-20.html">Medical 4</a></li>
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
                                                                <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                                                                <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                                                <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
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
                                                        <li>
                                                            <a href="#">Single Shop</a>
                                                            <ul>
                                                                <li><a href="single-product.html">Shop Single</a></li>
                                                                <li><a href="single-product-variable.html">Shop Variable</a></li>
                                                                <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                                <li><a href="single-product-group.html">Shop Group</a></li>
                                                                <li><a href="single-product-tabstyle-2.html">Shop Tab 2</a></li>
                                                                <li><a href="single-product-tabstyle-3.html">Shop Tab 3</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Single Shop</a>
                                                            <ul>
                                                                <li><a href="single-product-slider.html">Shop Slider</a></li>
                                                                <li><a href="single-product-gallery-left.html">Shop Gallery Left</a></li>
                                                                <li><a href="single-product-gallery-right.html">Shop Gallery Right</a></li>
                                                                <li><a href="single-product-sticky-left.html">Shop Sticky Left</a></li>
                                                                <li><a href="single-product-sticky-right.html">Shop Sticky Right</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Pages</a>
                                                    <ul>
                                                        <li><a href="about.html">About Page</a></li>
                                                        <li><a href="cart.html">Cart Page</a></li>
                                                        <li><a href="checkout.html">Checkout Page</a></li>
                                                        <li><a href="compare.html">Compare Page</a></li>
                                                        <li><a href="login.html">Login &amp; Regiter Page</a></li>
                                                        <li><a href="my-account.html">Account Page</a></li>
                                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Blog</a>
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
                                                <li><a href="contact.html">Contact Us</a></li>
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
                                        <h1 className="breadcrumb-hrading">Blog Post</h1>
                                        <ul className="breadcrumb-links">
                                            <li><a href="index.html">Home</a></li>
                                            <li>Single Blog Left Sidebar</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Breadcrumb Area End */}
                    {/* Shop Category Area End */}
                    <div className="shop-category-area single-blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9 order-lg-last col-md-12 order-md-first">
                                    <div className="blog-posts">
                                        <div className="single-blog-post blog-grid-post">
                                            <div className="blog-post-media">
                                                <div className="blog-image single-blog">
                                                    <a href="#"><img src="https://miro.medium.com/max/1000/0*NtHx74bTuIrwQbfd.jpg" alt="blog" /></a>
                                                </div>
                                            </div>
                                            <div className="blog-post-content-inner">
                                                <h4 className="blog-title"><a href="#">MedLife</a></h4>
                                                <ul className="blog-page-meta">
                                                    {/* <li>
                                          <a href="#"><i class="ion-person"></i> Admin</a>
                                      </li> */}
                                                    <li>
                                                        <a href="#"><i className="ion-calendar" /> 6 June,2021</a>
                                                    </li>
                                                </ul>
                                                <p>
                                                    Digital health, which includes digital care programs, is the convergence of digital technologies with health, healthcare, living, and society to enhance the efficiency of healthcare delivery to make medicine more personalized and precise.
                                                </p>
                                            </div>
                                            <div className="single-post-content">
                                                <p className="quate-speech">
                                                    With growth came log complexity for Medlife. “Besides the added categories, the flow for ordering medicines itself evolved into complex forms with the addition of multiple features such as subscriptions, express delivery, ordering medicines without a prescription, and substitution. Medlife needed to shore-up its application debugging game and decided to look for a cloud-based machine data analytics partner,” says Pranesh Vittal CG, Associate Director - Database &amp; DevOps, Medlife.
                                                </p>
                                                <p>
                                                    Riding on the rear of tech-drove innovations like telemedicine and preventive medical care, the Indian healthtech market is estimated to reach $21 billion in 2025. As India's masses expansion in affluence and awareness, they are requesting admittance to better medical care. This advancement in the Indian medical services conveyance framework is being driven by local healthtech startups. As indicated by a new RedSeer report, the Indian eHealth area is projected to develop by around 13x, to turn into a 16 billion dollar opportunity by  2025.
                                                </p>
                                                <p>
                                                    Digital medication items hold incredible guarantee to improve clinical estimation, conclusion, and treatment. While numerous ventures have accepted advanced interruption, the medical care industry presently can't seem to encounter the upgrades in results, access, and cost-adequacy since a long time ago guaranteed by the digital insurgency. Medical care falls behind different enterprises to some extent due to the administrative climate, which will in general lethargic advancement as wellbeing specialists endeavor to limit unfavorable results.
                                                    Creating successful computerized medication instruments is an escalated and testing measure that requires the interdisciplinary endeavors of a wide scope of specialists, from architects and ethicists to payers and suppliers. Large numbers of the difficulties are compounded by the multidisciplinary idea of this field. The progression of advanced medication slows down when constituent specialists communicate in various dialects and have various guidelines, encounters, and assumptions.
                                                </p>
                                            </div>
                                        </div>
                                        {/* single blog post */}
                                    </div>
                                    <div className="blog-single-tags-share d-sm-flex justify-content-between">
                                        <div className="blog-single-tags d-flex">
                                            <span className="title">Tags: </span>
                                            <ul className="tag-list">
                                                <li><a href="#">Medlife,</a></li>
                                                <li><a href="#">Health,</a></li>
                                                <li><a href="#">Masks</a></li>
                                            </ul>
                                        </div>
                                        {/* <div class="blog-single-share d-flex">
                              <span class="title">Share:</span>
                              <ul class="social">
                                  <li>
                                      <a href="#"><i class="ion-social-facebook"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i class="ion-social-twitter"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i class="ion-social-google"></i></a>
                                  </li>
                                  <li>
                                      <a href="#"><i class="ion-social-instagram"></i></a>
                                  </li>
                              </ul>
                          </div> */}
                                    </div>
                                    <div className="comment-area">
                                        <h2 className="comment-heading">3 Comments</h2>
                                        <div className="review-wrapper">
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src="assets/images/testimonial-image/1.png" alt />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>White Lewis</h4>
                                                                <span className="date">June 8, 2021 at 1:38 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="review-left">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>
                                                            That's true digital medication will play a major role in future. Everything is going digital these days.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-review child-review">
                                                <div className="review-img">
                                                    <img src="assets/images/testimonial-image/2.png" alt />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>White Lewis</h4>
                                                                <span className="date">June 9, 2021 at 1:38 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="review-left">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>Yes, there are lots of benefits of digital medlife as it eliminates the need for searching medicines from shop to shop. So it will definitely grow on large scale in near future.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-review">
                                                <div className="review-img">
                                                    <img src="assets/images/testimonial-image/1.png" alt />
                                                </div>
                                                <div className="review-content">
                                                    <div className="review-top-wrap">
                                                        <div className="review-left">
                                                            <div className="review-name">
                                                                <h4>White Lewis</h4>
                                                                <span className="date">February 16, 2020 at 1:38 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="review-left">
                                                            <a href="#">Reply</a>
                                                        </div>
                                                    </div>
                                                    <div className="review-bottom">
                                                        <p>
                                                            I wonder if it will increase competition among the offline and online medicine shops.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-comment-form">
                                        <h2 className="comment-heading">Leave a Reply</h2>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <label>Your Review:</label>
                                                    <textarea placeholder="Write a review" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="single-form">
                                                    <label>Name:</label>
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="single-form">
                                                    <label>Email:</label>
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="single-form">
                                                    <label>Website:</label>
                                                    <input type="email" placeholder="Website" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-form">
                                                    <input type="submit" defaultValue="Submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Sidebar Area Start */}
                                <div className="col-lg-3 order-lg-first col-md-12 order-md-last mb-res-md-60px mb-res-sm-60px">
                                    <div className="left-sidebar">
                                        {/* Sidebar single item */}
                                        <div className="sidebar-widget">
                                            <div className="main-heading">
                                                <h2>Search</h2>
                                            </div>
                                            <div className="search-widget">
                                                <form action="#">
                                                    <input placeholder="Search entire store here ..." type="text" />
                                                    <button type="submit"><i className="ion-ios-search-strong" /></button>
                                                </form>
                                            </div>
                                        </div>
                                        {/* Sidebar single item */}
                                        {/* Sidebar single item */}
                                        {/* Sidebar single item */}
                                        <div className="sidebar-widget mt-40">
                                            <div className="main-heading">
                                                <h2>Recent Post</h2>
                                            </div>
                                            <div className="recent-post-widget">
                                                <div className="recent-single-post d-flex">
                                                    <div className="thumb-side">
                                                        <a href="#"><img src="https://miro.medium.com/max/1000/0*NtHx74bTuIrwQbfd.jpg" alt /></a>
                                                    </div>
                                                    <div className="media-side">
                                                        <h5><a href="#">MediLife </a></h5>
                                                        <span className="date">June 6, 2021</span>
                                                    </div>
                                                </div>
                                                <div className="recent-single-post d-flex">
                                                    <div className="thumb-side">
                                                        <a href="#"><img src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt /></a>
                                                    </div>
                                                    <div className="media-side">
                                                        <h5><a href="#">Spark Electronics </a></h5>
                                                        <span className="date">June 4, 2021</span>
                                                    </div>
                                                </div>
                                                <div className="recent-single-post d-flex">
                                                    <div className="thumb-side">
                                                        <a href="#"><img src="assets/images/blog-image/blog-3.jpg" alt /></a>
                                                    </div>
                                                    <div className="media-side">
                                                        <h5><a href="#">Taste of sunshine </a></h5>
                                                        <span className="date">June 3, 2021</span>
                                                    </div>
                                                </div>
                                                <div className="recent-single-post d-flex">
                                                    <div className="thumb-side m-0px">
                                                        <a href="#"><img src="https://images.mygoodtimes.in/wp-content/uploads/2018/10/16103333/Main-Image-Ladys-Bag.jpg" alt /></a>
                                                    </div>
                                                    <div className="media-side">
                                                        <h5><a href="#">Fashion hub </a></h5>
                                                        <span className="date">June 2, 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Sidebar single item */}
                                        <div className="sidebar-widget mt-40">
                                            <div className="main-heading">
                                                <h2>Tag</h2>
                                            </div>
                                            <div className="sidebar-widget-tag">
                                                <ul>
                                                    <li><a href="#">Fresh Fruit</a></li>
                                                    <li><a href="#"> Electronics</a></li>
                                                    <li><a href="#">Health</a></li>
                                                    <li><a href="#"> Beauty and Fashion</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Sidebar single item */}
                                    </div>
                                </div>
                                {/* Sidebar Area End */}
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

        );
    }
}
export default Blogsingle;