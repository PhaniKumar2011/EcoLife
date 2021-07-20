import React from 'react';
import {Link} from 'react-router-dom';
class About extends React.Component {
    render() {
        return (
            <div>
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
                                                                <li><Link to="/shop">Shop Grid 3 Column</Link></li>
                            {/* <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li> */}
                                                            </ul>
                                                        </li>
                                                        
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
                                                            <a href="#">Blog Single <i className="ion-ios-arrow-down" /></a>
                                                            <ul className="sub-menu sub-menu-2">
                                                            <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
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
                                                               
                                                                <li><Link to="/">Organic</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Cosmetic</a>
                                                            <ul>
                                                            <li><Link to="/index2">Cosmetic</Link></li>
                                                                
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Digital</a>
                                                            <ul>
                                                            <li><Link to="/index3">Digital</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="#">Home Furniture</a>
                                                            <ul>
                                                            <li><Link to="/index4">Furniture 3</Link></li>
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
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                                    <li><Link to="/blogsingle">Blog Single Left Sidebar</Link></li>
                                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
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
                                        <h1 className="breadcrumb-hrading">About Page</h1>
                                        <ul className="breadcrumb-links">
                                            <li><a href="index.html">Home</a></li>
                                            <li>About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Breadcrumb Area End */}
                    {/* About Area Start */}
                    <section className="about-area">
                        <div className="container container-2">
                            <div className="row">
                                <div className="col-lg-6 mb-res-sm-50px">
                                    <div className="about-left-image">
                                        <img src="assets/images/feature-bg/1.jpg" alt className="img-responsive" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-content">
                                        <div className="about-title">
                                            <h2>Welcome To Ecolife</h2>
                                        </div>
                                        <p className="mb-30px">
                                            Welcome to Ecolife, your number one source for all things . We're dedicated to giving you the very best of service, with a focus on dependability, customer service and uniqueness.
              </p>
                                        <p>
                                            We now serve customers all over , and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the ecommerce industry. We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
              </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-60px">
                                <div className="col-md-4 mb-res-sm-30px">
                                    <div className="single-about">
                                        <h4>Our Company</h4>
                                        <p>
                                            We are multidisciplinary ecommerce online store .We work together to provide work and services that we are proud of and that we believe in.
                                            100% pure is a commitment to producing the purest , healthiest products . We strive to live with compassion and kindness.
              </p>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-res-sm-30px">
                                    <div className="single-about">
                                        <h4>Our Team</h4>
                                        <p>
                                            We are a team of like-minded individuals who not only bring our own professional experiences, innovative ideas, creativity and methodologies but can leverage each others’ talents and strengths. In this way, we can figure out solutions to the most complex of challenges and deliver practical yet impactful solutions to our clients.
              </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="single-about">
                                        <h4>Testimonial</h4>
                                        <p> </p><div className="testi-slider-wrapper">
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
                                        <p />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About Area End */}
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
                                                        (+91) 12345 678 <br />
                      
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
                                                   
                                                    <li><Link to="/about">About Us</Link></li>
                                                   
                                                   
                                                    
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
                                                    
                                                    
                                                </ul> <li><Link to="/login">Login &amp; Regiter Page</Link></li>
                        <li><Link to="/myaccount">Account Page</Link></li>
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
                                                    <a href="cart.html"> + Add To Cart</a>
                                                </div>
                                            </div>
                                            <div className="pro-details-wish-com">
                                                <div className="pro-details-wishlist">
                                                    <a href="wishlist.html"><i className="ion-android-favorite-outline" />Add to wishlist</a>
                                                </div>
                                                <div className="pro-details-compare">
                                                    <a href="compare.html"><i className="ion-ios-shuffle-strong" />Add to compare</a>
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
            </div>

        )
    }
}
export default About