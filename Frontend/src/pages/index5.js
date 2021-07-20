import React from 'react';
import { Link } from 'react-router-dom';

class Index5 extends React.Component {
    render() {
        return (
            <div>
  <div id="main">
    {/* Header Start */}
    <header className="main-header">
      {/* Header Top Start */}
      <div className="header-top-nav">
        <div className="container">
          <div className="row">
            {/*Left Start*/}
            <div className="col-lg-4 col-md-4">
              <div className="left-text">
                <p>Welcome to Ecolife store!</p>
              </div>
            </div>
            {/*Left End*/}
            {/*Right Start*/}
            <div className="col-lg-8 col-md-8 text-right">
              <div className="header-right-nav">
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start */}
                    <li className="dropdown after-n">
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
      <div className="header-navigation d-lg-block d-none">
        <div className="container">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-medical.jpg" alt /></a>
              </div>
            </div>
            {/* Logo End */}
            <div className="col-md-10 col-sm-10">
              {/*Header Bottom Account Start */}
              <div className="header_account_area home-6">
                {/*Seach Area Start */}
                <div className="header_account_list search_list">
                  <a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input placeholder="Search entire store here ..." type="text" />
                      <div className="search-category">
                        <select className="bootstrap-select" name="poscats">
                          <option value={0}>All categories</option>
                          <option value={68}>
                            Electronics
                          </option>
                          <option value={69}>
                            - - Accessories &amp; Parts
                          </option>
                          <option value={75}>
                            - - - - Cables &amp; Adapters
                          </option>
                          <option value={76}>
                            - - - - Batteries
                          </option>
                          <option value={77}>
                            - - - - Chargers
                          </option>
                          <option value={78}>
                            - - - - Bags &amp; Cases
                          </option>
                          <option value={79}>
                            - - - - Electronic Cigarettes
                          </option>
                          <option value={70}>
                            - - Audio &amp; Video
                          </option>
                          <option value={80}>
                            - - - - Televisions
                          </option>
                          <option value={81}>
                            - - - - TV Receivers
                          </option>
                          <option value={82}>
                            - - - - Projectors
                          </option>
                          <option value={83}>
                            - - - - Audio Amplifier Boards
                          </option>
                          <option value={84}>
                            - - - - TV Sticks
                          </option>
                          <option value={71}>
                            - - Camera &amp; Photo
                          </option>
                          <option value={85}>
                            - - - - Digital Cameras
                          </option>
                          <option value={86}>
                            - - - - Camcorders
                          </option>
                          <option value={87}>
                            - - - - Camera Drones
                          </option>
                          <option value={88}>
                            - - - - Action Cameras
                          </option>
                          <option value={89}>
                            - - - - Photo Studio Supplies
                          </option>
                          <option value={72}>
                            - - Portable Audio &amp; Video
                          </option>
                          <option value={90}>
                            - - - - Headphones
                          </option>
                          <option value={91}>
                            - - - - Speakers
                          </option>
                          <option value={92}>
                            - - - - MP3 Players
                          </option>
                          <option value={93}>
                            - - - - VR/AR Devices
                          </option>
                          <option value={94}>
                            - - - - Microphones
                          </option>
                          <option value={73}>
                            - - Smart Electronics
                          </option>
                          <option value={95}>
                            - - - - Wearable Devices
                          </option>
                          <option value={96}>
                            - - - - Smart Home Appliances
                          </option>
                          <option value={97}>
                            - - - - Smart Remote Controls
                          </option>
                          <option value={98}>
                            - - - - Smart Watches
                          </option>
                          <option value={99}>
                            - - - - Smart Wristbands
                          </option>
                          <option value={74}>
                            - - Video Games
                          </option>
                          <option value={100}>
                            - - - - Handheld Game Players
                          </option>
                          <option value={101}>
                            - - - - Game Controllers
                          </option>
                          <option value={102}>
                            - - - - Joysticks
                          </option>
                          <option value={103}>
                            - - - - Stickers
                          </option>
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Cart info Start */}
                <div className="cart-info-wrap">
                  <div className="cart-info d-flex home-9">
                    <a href="compare.html" className="count-cart random d-xs-none" />
                    <a href="wishlist.html" className="count-cart heart" />
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
                </div>
                {/*Cart info End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Menu Content Start */}
      <div className="header-buttom-nav sticky-nav border-t-1px">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="d-flex align-items-start justify-content-start">
                {/*Main Navigation Start */}
                <div className="main-navigation mt-0px d-none d-lg-block">
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
                            <li><Link to="/index2">Cosmetic</Link></li>
                            
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/index3">Digital</Link></li>
                            
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                           
                            <li><Link to="/index4">Furniture</Link></li>
                            
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><Link to="/index5">Medical</Link></li>
                            
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
                        <li className="banner-wrapper">
                          <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-7.jpg" alt /></a>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Content End */}
      {/* Header Buttom Start */}
      <div className="header-navigation sticky-nav d-lg-none">
        <div className="container position-relative">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-medical.jpg" alt /></a>
              </div>
            </div>
            {/* Logo End */}
            {/* Navigation Start */}
            <div className="col-md-10 col-sm-10">
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
                          <option value={68}>
                            Electronics
                          </option>
                          <option value={69}>
                            - - Accessories &amp; Parts
                          </option>
                          <option value={75}>
                            - - - - Cables &amp; Adapters
                          </option>
                          <option value={76}>
                            - - - - Batteries
                          </option>
                          <option value={77}>
                            - - - - Chargers
                          </option>
                          <option value={78}>
                            - - - - Bags &amp; Cases
                          </option>
                          <option value={79}>
                            - - - - Electronic Cigarettes
                          </option>
                          <option value={70}>
                            - - Audio &amp; Video
                          </option>
                          <option value={80}>
                            - - - - Televisions
                          </option>
                          <option value={81}>
                            - - - - TV Receivers
                          </option>
                          <option value={82}>
                            - - - - Projectors
                          </option>
                          <option value={83}>
                            - - - - Audio Amplifier Boards
                          </option>
                          <option value={84}>
                            - - - - TV Sticks
                          </option>
                          <option value={71}>
                            - - Camera &amp; Photo
                          </option>
                          <option value={85}>
                            - - - - Digital Cameras
                          </option>
                          <option value={86}>
                            - - - - Camcorders
                          </option>
                          <option value={87}>
                            - - - - Camera Drones
                          </option>
                          <option value={88}>
                            - - - - Action Cameras
                          </option>
                          <option value={89}>
                            - - - - Photo Studio Supplies
                          </option>
                          <option value={72}>
                            - - Portable Audio &amp; Video
                          </option>
                          <option value={90}>
                            - - - - Headphones
                          </option>
                          <option value={91}>
                            - - - - Speakers
                          </option>
                          <option value={92}>
                            - - - - MP3 Players
                          </option>
                          <option value={93}>
                            - - - - VR/AR Devices
                          </option>
                          <option value={94}>
                            - - - - Microphones
                          </option>
                          <option value={73}>
                            - - Smart Electronics
                          </option>
                          <option value={95}>
                            - - - - Wearable Devices
                          </option>
                          <option value={96}>
                            - - - - Smart Home Appliances
                          </option>
                          <option value={97}>
                            - - - - Smart Remote Controls
                          </option>
                          <option value={98}>
                            - - - - Smart Watches
                          </option>
                          <option value={99}>
                            - - - - Smart Wristbands
                          </option>
                          <option value={74}>
                            - - Video Games
                          </option>
                          <option value={100}>
                            - - - - Handheld Game Players
                          </option>
                          <option value={101}>
                            - - - - Game Controllers
                          </option>
                          <option value={102}>
                            - - - - Joysticks
                          </option>
                          <option value={103}>
                            - - - - Stickers
                          </option>
                        </select>
                      </div>
                      <button type="submit"><i className="ion-ios-search-strong" /></button>
                    </form>
                  </div>
                </div>
                {/*Seach Area End */}
                {/*Cart info Start */}
                <div className="cart-info home-9 d-flex">
                  <a href="compare.html" className="count-cart random d-xs-none" />
                  <a href="wishlist.html" className="count-cart heart d-xs-none" />
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
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Cosmetic</a>
                        <ul>
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Digital</a>
                        <ul>
                          <li><a href="index-9.html">Digital 1</a></li>
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
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Medical</a>
                        <ul>
                          <li><a href="index-17.html">Medical 1</a></li>
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
                          
                        </ul>
                      </li>
                      <li>
                        <a href="#">Shop List</a>
                        <ul>
                          <li><Link to="/shoplist">Shop List</Link></li>
                          
                        </ul>
                      </li>
                      <li>
                           <ul>
                                 <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                  <li><Link to="/shoplist">Shop Tab 3</Link></li>
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
    {/* Slider Arae Start */}
    <div className="slider-area">
      <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
        {/* Slider Single Item Start */}
        <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-32.jpg)'}}>
          <div className="container">
            <div className="slider-content-16 slider-animated-1 text-left">
              <h1 className="animated">
                DISPOSABLE <br />
                <strong>MEDICAL MASK</strong>
              </h1>
              <p className="animated">Capacity 100m Pcs/ Day</p>
              {/*<a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>*/}
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
        {/* Slider Single Item Start */}
        <div className="slider-height-10 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-33.jpg)'}}>
          <div className="container">
            <div className="slider-content-16 slider-animated-1 text-left">
              <h1 className="animated">
                DISPOSABLE<br />
                <strong>NITRILE GLOVES</strong>
              </h1>
              <p className="animated">Hardy 7 mil Heavy Duty Nitrile Gloves</p>
              {/*<a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>*/}
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
      </div>
    </div>
    {/* Slider Arae End */}
    {/* Static Area Start */}
    <section className="static-area mt-60px mb-60px">
      <div className="container">
        <div className="static-area-wrap">
          <div className="row">
            {/* Static Single Item Start */}
            <div className="col-lg-3 col-xs-12 col-md-6 col-sm-6">
              <div className="single-static pb-res-md-0 pb-res-sm-0 pb-res-xs-0">
                <img src="assets/images/icons/static-icons-5.png" alt className="img-responsive" />
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
                <img src="assets/images/icons/static-icons-6.png" alt className="img-responsive" />
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
                <img src="assets/images/icons/static-icons-7.png" alt className="img-responsive" />
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
                <img src="assets/images/icons/static-icons-8.png" alt className="img-responsive" />
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
    {/* Best Sells Area Start */}
    <section className="best-sells-area mb-30px">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>New Arrivals</h2>
            </div>
          </div>
        </div>
        {/* Section Title End */}
        {/* Best Sell Slider Carousel Start */}
        <div className="best-sell-slider-2 owl-carousel owl-nav-style owl-nav-style-5">
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/1.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/1.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Beurer Hearing amp</a></h2>
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
            <div className="add-to-link-btn">
              <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/2.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/2.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">NatureBell Hyaluronic Acid</a></h2>
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
            <div className="add-to-link-btn">
              <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/3.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/3.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">whey protein</a></h2>
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
            <div className="add-to-link-btn">
              <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/5.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/5.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Omega fish oil</a></h2>
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
            <div className="add-to-link-btn">
            <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/6.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/6.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Probiotic Forte</a></h2>
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
            <div className="add-to-link-btn">
              <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/7.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/7.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Energy shot</a></h2>
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
            <div className="add-to-link-btn">
            <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/8.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/8.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Keto slimming capsule</a></h2>
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
            <div className="add-to-link-btn">
            <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/medical/1.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/medical/1.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                  <i class="ion-android-favorite-outline"></i>
                              </a>
                              <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                  <i class="ion-ios-shuffle-strong"></i>
                              </a>
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs text-center">
                          <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" class="product-link">New Luxury Men's Slim Fit Shi...</a></h2>
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
                      <div class="add-to-link-btn">
                          <a href="#"> Add to cart</a>
                      </div>
                  </article> */}
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/medical/2.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/medical/2.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                  <i class="ion-android-favorite-outline"></i>
                              </a>
                              <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                  <i class="ion-ios-shuffle-strong"></i>
                              </a>
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs text-center">
                          <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" class="product-link">Originals Kaval Windbreaker...</a></h2>
                          <div class="rating-product">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                          </div>
                          <div class="pricing-meta">
                              <ul>
                                  <li class="old-price">€23.90</li>
                                  <li class="current-price">€21.51</li>
                                  <li class="discount-price">-10%</li>
                              </ul>
                          </div>
                      </div>
                      <div class="add-to-link-btn">
                          <a href="#"> Add to cart</a>
                      </div>
                  </article> */}
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/medical/3.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/medical/3.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                  <i class="ion-android-favorite-outline"></i>
                              </a>
                              <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                  <i class="ion-ios-shuffle-strong"></i>
                              </a>
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs text-center">
                          <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" class="product-link">Brixton Patrol All Terrain Anor...</a></h2>
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
                      <div class="add-to-link-btn">
                          <a href="#"> Add to cart</a>
                      </div>
                  </article> */}
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/medical/4.jpg" alt />
                <img className="second-img" src="assets/images/product-image/medical/4.jpg" alt />
              </a>
              <div className="quick-view">
                <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                  <i className="ion-android-favorite-outline" />
                </a>
                <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                  <i className="ion-ios-shuffle-strong" />
                </a>
                <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                  <i className="ion-ios-search-strong" />
                </a>
              </div>
            </div>
            <ul className="product-flag">
              <li className="new">New</li>
            </ul>
            <div className="product-decs text-center">
              <a className="inner-link" href="shop-4-column.html"><span /></a>
              <h2><a href="single-product.html" className="product-link">Hemp fish oil</a></h2>
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
            <div className="add-to-link-btn">
            <Link classname="cart-btn" to="/cart"> Add to cart</Link>
            </div>
          </article>
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/medical/5.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/medical/6.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                  <i class="ion-android-favorite-outline"></i>
                              </a>
                              <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                  <i class="ion-ios-shuffle-strong"></i>
                              </a>
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs text-center">
                          <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                          <h2><a href="single-product.html" class="product-link">Juicy Couture Juicy Quilted Ter..</a></h2>
                          <div class="rating-product">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                          </div>
                          <div class="pricing-meta">
                              <ul>
                                  <li class="old-price">€35.90</li>
                                  <li class="current-price">€34.11</li>
                                  <li class="discount-price">-5%</li>
                              </ul>
                          </div>
                      </div>
                      <div class="add-to-link-btn">
                          <a href="#"> Add to cart</a>
                      </div>
                  </article> */}
          {/* Single Item */}
        </div>
        {/* Best Sells Carousel End */}
      </div>
    </section>
    {/* Best Sells Slider End */}
    {/* Banner Area Start */}
    <div className="banner-3-area mt-30px">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/47.jpg" alt /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="banner-wrapper mb-30px">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/48.jpg" alt /></a>
            </div>
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/49.jpg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area End */}
    {/* Hot deal area Start */}
    <section className="hot-deal-area">
      <div className="container">
        <div className="row">
          {/* New Arrivals Area Start */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-8 mb-res-xs-30 mb-res-sm-30 mb-res-md-30">
            <div className="row">
              <div className="col-md-12">
                {/* Section Title */}
                <div className="section-title ml-0px">
                  <h2>New Arrivals</h2>
                </div>
                {/* Section Title */}
              </div>
            </div>
            {/* Hot Deal Slider 2 Start */}
            <div className="hot-deal-3 owl-carousel owl-nav-style owl-nav-style-5">
              {/* Single Item */}
              <article className="list-product">
                <div className="hot-item-inner">
                  <div className="img-block d-flex">
                    <div className="nav-container">
                      <div className="slider-nav">
                        <div>
                          <img src="assets/images/product-image/medical/9.jpg" />
                        </div>
                        <div>
                          <img src="assets/images/product-image/medical/10.jpg" />
                        </div>
                        <div>
                          <img src="assets/images/product-image/medical/12.jpg" />
                        </div>
                        <div>
                          <img src="assets/images/product-image/medical/2.jpg" />
                        </div>
                        <div>
                          <img src="assets/images/product-image/medical/3.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="main-container">
                      <div className="slider slider-main">
                        <div>
                          <a href="#">
                            <img src="assets/images/product-image/medical/9.jpg" />
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img src="assets/images/product-image/medical/10.jpg" />
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img src="assets/images/product-image/medical/12.jpg" />
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img src="assets/images/product-image/medical/2.jpg" />
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img src="assets/images/product-image/medical/3.jpg" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                    <ul className="product-flag">
                      <li className="new">New</li>
                    </ul>
                  </div>
                </div>
                <div className="product-wrapper">
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                    <h2><a href="single-product.html" className="product-link">EasyCare thermometer</a></h2>
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
                  <div className="clockdiv">
                    <div className="title_countdown">Hurry Up! Offers ends in:</div>
                    <div data-countdown="2021/07/01" />
                  </div>
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                  <div className="in-stock text-center">Availability: <span>300 In Stock</span></div>
                </div>
              </article>
              {/* Single Item */}
              {/* <article class="list-product">
                              <div class="hot-item-inner">
                                  <div class="img-block d-flex">
                                      <div class="nav-container">
                                          <div class="slider-nav">
                                              <div>
                                                  <img src="assets/images/product-image/medical/9.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/10.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/12.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/2.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/3.jpg" />
                                              </div>
                                          </div>
                                      </div>
                                      <div class="main-container">
                                          <div class="slider slider-main">
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/9.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/10.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/12.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/2.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/3.jpg" />
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="quick-view">
                                          <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                              <i class="ion-android-favorite-outline"></i>
                                          </a>
                                          <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                              <i class="ion-ios-shuffle-strong"></i>
                                          </a>
                                          <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                              <i class="ion-ios-search-strong"></i>
                                          </a>
                                      </div>
                                      <ul class="product-flag">
                                          <li class="new">New</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="product-wrapper">
                                  <div class="product-decs">
                                      <a class="inner-link" href="shop-4-column.html"><span></span></a>
                                      <h2><a href="single-product.html" class="product-link">Omega fish oil</a></h2>
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
                                              <li class="current-price">€34.21</li>
                                              <li class="discount-price">-5%</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="clockdiv">
                                      <div class="title_countdown">Hurry Up! Offers ends in:</div>
                                      <div data-countdown="2021/03/01"></div>
                                  </div>
                                  <div class="add-to-link-btn">
                                      <a href="#"> Add to cart</a>
                                  </div>
                                  <div class="in-stock text-center">Availability: <span>300 In Stock</span></div>
                              </div>
                          </article> */}
              {/* Single Item */}
              {/* <article class="list-product">
                              <div class="hot-item-inner">
                                  <div class="img-block d-flex">
                                      <div class="nav-container">
                                          <div class="slider-nav">
                                              <div>
                                                  <img src="assets/images/product-image/medical/9.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/10.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/12.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/2.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/3.jpg" />
                                              </div>
                                          </div>
                                      </div>
                                      <div class="main-container">
                                          <div class="slider slider-main">
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/9.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/10.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/12.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/2.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/3.jpg" />
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="quick-view">
                                          <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                              <i class="ion-android-favorite-outline"></i>
                                          </a>
                                          <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                              <i class="ion-ios-shuffle-strong"></i>
                                          </a>
                                          <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                              <i class="ion-ios-search-strong"></i>
                                          </a>
                                      </div>
                                      <ul class="product-flag">
                                          <li class="new">New</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="product-wrapper">
                                  <div class="product-decs">
                                      <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                      <h2><a href="single-product.html" class="product-link">New Balance Fresh Foam Kaymin</a></h2>
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
                                              <li class="current-price">€34.21</li>
                                              <li class="discount-price">-5%</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="clockdiv">
                                      <div class="title_countdown">Hurry Up! Offers ends in:</div>
                                      <div data-countdown="2021/03/01"></div>
                                  </div>
                                  <div class="add-to-link-btn">
                                      <a href="#"> Add to cart</a>
                                  </div>
                                  <div class="in-stock text-center">Availability: <span>300 In Stock</span></div>
                              </div>
                          </article> */}
              {/* Single Item */}
              {/* <article class="list-product">
                              <div class="hot-item-inner">
                                  <div class="img-block d-flex">
                                      <div class="nav-container">
                                          <div class="slider-nav">
                                              <div>
                                                  <img src="assets/images/product-image/medical/9.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/10.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/12.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/2.jpg" />
                                              </div>
                                              <div>
                                                  <img src="assets/images/product-image/medical/3.jpg" />
                                              </div>
                                          </div>
                                      </div>
                                      <div class="main-container">
                                          <div class="slider slider-main">
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/9.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/10.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/12.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/2.jpg" />
                                                  </a>
                                              </div>
                                              <div>
                                                  <a href="#">
                                                      <img src="assets/images/product-image/medical/3.jpg" />
                                                  </a>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="quick-view">
                                          <a class="quick_view" href="wishlist.html" title="Add to wishlist">
                                              <i class="ion-android-favorite-outline"></i>
                                          </a>
                                          <a class="quick_view mlr-10px" href="compare.html" title="Add to compare">
                                              <i class="ion-ios-shuffle-strong"></i>
                                          </a>
                                          <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                              <i class="ion-ios-search-strong"></i>
                                          </a>
                                      </div>
                                      <ul class="product-flag">
                                          <li class="new">New</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="product-wrapper">
                                  <div class="product-decs">
                                      <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                      <h2><a href="single-product.html" class="product-link">Madden by Steve Madden Cale 6</a></h2>
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
                                              <li class="current-price">€34.21</li>
                                              <li class="discount-price">-5%</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="clockdiv">
                                      <div class="title_countdown">Hurry Up! Offers ends in:</div>
                                      <div data-countdown="2021/03/01"></div>
                                  </div>
                                  <div class="add-to-link-btn">
                                      <a href="#"> Add to cart</a>
                                  </div>
                                  <div class="in-stock text-center">Availability: <span>300 In Stock</span></div>
                              </div>
                          </article> */}
              {/* Single Item */}
            </div>
            {/* Hot Deal Slider 2 Start */}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-4 mb-res-xs-30 mb-res-sm-30 mb-res-md-30">
            <div className="row">
              <div className="col-md-12">
                {/* Section Title */}
                <div className="section-title">
                  <h2>Best Sellers</h2>
                </div>
                {/* Section Title End*/}
              </div>
            </div>
            {/* Hot Deal Slider Start */}
            <div className="category-product-2 owl-carousel responsive-owl-nav-style owl-nav-style owl-nav-style-5">
              {/* Single Item */}
              <div className="feature-slider-item">
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/5.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/6.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Omega fish oil</a></h2>
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
                      <img className="first-img" src="assets/images/product-image/medical/7.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/8.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Energy shot</a></h2>
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
                      <img className="first-img" src="assets/images/product-image/medical/9.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/10.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">EasyCare thermometer</a></h2>
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
                      <img className="first-img" src="assets/images/product-image/medical/1.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/1.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Beurer Hearing amp</a></h2>
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
                      <img className="first-img" src="assets/images/product-image/medical/2.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/14.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">NatureBell Hyaluroic acid</a></h2>
                    <div className="rating-product">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price not-cut">€10.90</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/3.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/4.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Boditronic</a></h2>
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
              </div>
              {/* Single Item */}
              <div className="feature-slider-item">
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/8.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/8.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Keto Slimming capsule</a></h2>
                    <div className="rating-product">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </div>
                    <div className="pricing-meta">
                      <ul>
                        <li className="old-price">€20.90</li>
                        <li className="current-price">€15.51</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="list-product">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      {/* <img class="first-img" src="assets/images/product-image/medical/9.jpg" alt="" /> */}
                      <img className="first-img" src="assets/images/product-image/medical/10.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Face mask</a></h2>
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
                      <img className="first-img" src="assets/images/product-image/medical/4.jpg" alt />
                      {/* <img class="second-img" src="assets/images/product-image/medical/10.jpg" alt="" /> */}
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <div className="product-decs">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Hemp fish oil</a></h2>
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
              </div>
              {/* Single Item */}
            </div>
            {/* Hot Deal Slider End */}
          </div>
        </div>
      </div>
    </section>
    {/* Hot Deal Area End */}
    {/* Banner Area 2 Start */}
    <div className="banner-area-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-inner">
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"><img src="assets/images/banner-image/50.jpg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area 2 End */}
    {/* Hot deal area Start */}
    <section className="hot-deal-area mt-30px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title">
              <h2>Herbs &amp; Botanicals</h2>
            </div>
            {/* Section Title End*/}
          </div>
        </div>
        <div className="banner-inner-area d-flex">
          <div className="banner-left">
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/56.jpg" alt /></a>
            </div>
          </div>
          {/* New Arrivals Area Start */}
          <div className="banner-right">
            {/* New Product Slider Start */}
            <div className="new-product-slider-2 owl-carousel owl-nav-style owl-nav-style-5">
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/1.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/1.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Beurer Hearing amp</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/2.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/2.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">NatureBell Hyaloraunic acid</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/3.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/3.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Boditronics</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/4.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/4.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Hemp fish oil</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/5.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/5.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Hemp fish oil</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/6.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/6.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Brobiotic Forte</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
              {/* Product Single Item */}
              <div className="product-inner-item">
                <article className="list-product mb-30px">
                  <div className="img-block">
                    <a href="single-product.html" className="thumbnail">
                      <img className="first-img" src="assets/images/product-image/medical/7.jpg" alt />
                      <img className="second-img" src="assets/images/product-image/medical/7.jpg" alt />
                    </a>
                    <div className="quick-view">
                      <a className="quick_view" href="wishlist.html" title="Add to wishlist">
                        <i className="ion-android-favorite-outline" />
                      </a>
                      <a className="quick_view mlr-10px" href="compare.html" title="Add to compare">
                        <i className="ion-ios-shuffle-strong" />
                      </a>
                      <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                        <i className="ion-ios-search-strong" />
                      </a>
                    </div>
                  </div>
                  <ul className="product-flag">
                    <li className="new">New</li>
                  </ul>
                  <div className="product-decs text-center">
                    <a className="inner-link" href="shop-4-column.html"><span /></a>
                    <h2><a href="single-product.html" className="product-link">Energy shot</a></h2>
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
                  <div className="add-to-link-btn">
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </article>
              </div>
            </div>
            {/* Product Slider End */}
          </div>
        </div>
      </div>
    </section>
    {/* Hot Deal Area End */}
    {/* Blog area Start */}
    <section className="blog-area mb-30px mt-30px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section title */}
            <div className="section-title">
              <h2>Latest Blogs</h2>
            </div>
            {/* Section title */}
          </div>
        </div>
        {/* Blog Slider Start */}
        <div className="blog-slider-active owl-carousel owl-nav-style owl-nav-style-5">
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top blog-post-top-2">
              <div className="blog-img">
                <a href="#"><img src="https://miro.medium.com/max/1000/0*NtHx74bTuIrwQbfd.jpg" alt /></a>
              </div>
              <div className="blog-inner-content">
                {/* <a href="#" class="blog-meta-2">Digital</a> */}
                <h4 className="blog-post-heading-2"><a href="#">Medilife</a></h4>
              </div>
            </div>
            <div className="post-content">
              <a className="read-more" href="blog-grid-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top blog-post-top-2">
              <div className="blog-img">
                <a href="#"><img src="https://flyingfurnitureoutlet.com/wp-content/uploads/2020/08/blue-and-gray-elegant-living-room-XEMGR2R1.jpg" alt /></a>
              </div>
              <div className="blog-inner-content">
                {/* <a href="#" class="blog-meta-2">Digital</a> */}
                <h4 className="blog-post-heading-2"><a href="#">Furniture</a></h4>
              </div>
            </div>
            <div className="post-content">
              <a className="read-more" href="blog-grid-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top blog-post-top-2">
              <div className="blog-img">
                <a href="#"><img src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt /></a>
              </div>
              <div className="blog-inner-content">
                {/* <a href="#" class="blog-meta-2">Digital</a> */}
                <h4 className="blog-post-heading-2"><a href="#">Electonics</a></h4>
              </div>
            </div>
            <div className="post-content">
              <a className="read-more" href="blog-grid-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top blog-post-top-2">
              <div className="blog-img">
                <a href="#"><img src="https://images.mygoodtimes.in/wp-content/uploads/2018/10/16103333/Main-Image-Ladys-Bag.jpg" alt /></a>
              </div>
              <div className="blog-inner-content">
                {/* <a href="#" class="blog-meta-2">Digital</a> */}
                <h4 className="blog-post-heading-2"><a href="#">Fashion</a></h4>
              </div>
            </div>
            <div className="post-content">
              <a className="read-more" href="blog-grid-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </article>
          {/* single item */}
        </div>
        {/* Blog Slider Start */}
      </div>
    </section>
    {/* Blog Area End */}
    {/* Brand area start */}
    <div className="brand-area">
      <div className="container">
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
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="#">Secure Payment</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
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
                    <li><a href="#new_arrival">New Products</a></li>
                    <li><a href="#">Best Sales</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="my-account.html">My Account</a></li>
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
                  <Link classname="cart-btn" to="/cart"> Add to cart</Link>
                  </div>
                </div>
                <div className="pro-details-wish-com">
                  <div className="pro-details-wishlist">
                    <a href="#"><i className="ion-android-favorite-outline" />Add to wishlist</a>
                  </div>
                  <div className="pro-details-compare">
                    <a href="#"><i className="ion-ios-shuffle-strong" />Add to compare</a>
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

        );
    }
}
export default Index5;