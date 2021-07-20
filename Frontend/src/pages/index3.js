import React from 'react';
import {Link} from 'react-router-dom';

class Index3 extends React.Component
{
    render()
    {
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
              <div className="dropdown-navs">
                <ul>
                  {/* Settings Start */}
                  <li className="dropdown after-n">
                    <a className="angle-icon" href="#">Settings</a>
                    <ul className="dropdown-nav">
                    <li><Link to="/myaccount">My Account</Link></li>
                      <li><Link to="/checkout">Checkout</Link></li>
                      <li><Link to ="/login">Login</Link></li>
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
              <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
            </div>
          </div>
          {/* Logo End */}
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
              {/*Contact info Start */}
              <div className="contact-link-wrap">
                <div className="contact-link">
                  <div className="phone">
                    <p>Call us:</p>
                    <a href="tel:(+800)345678">(+800)345678</a>
                  </div>
                </div>
                {/*Contact info End */}
                {/*Cart info Start */}
                <div className="cart-info d-flex">
                  <Link to="/compare" className="count-cart random" ></Link>
                  <Link to="/wishlist" className="count-cart heart" > </Link>
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
        </div>
      </div>
    </div>
    {/*Header Bottom Account End */}
    {/* Menu Content Start */}
    <div className="header-buttom-nav sticky-nav">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-left d-none d-lg-block">
            <div className="d-flex align-items-start justify-content-start">
              {/* Beauty Category */}
              <div className="beauty-category vertical-menu home-9">
                <h3 className="vertical-menu-heading vertical-menu-toggle">All Categories</h3>
                <ul className="vertical-menu-wrap open-menu-toggle">
                  <li className="menu-dropdown">
                    <a href="#">Electronics<i className="ion-ios-arrow-down" /></a>
                    <ul className="mega-menu-wrap">
                      <li>
                        <ul className="mb-20px">
                          <li className="mega-menu-title"><a href="#">Accessories &amp; Parts</a></li>
                          <li><a href="#">Cables &amp; Adapters</a></li>
                          <li><a href="#">Batteries</a></li>
                          <li><a href="#">Chargers</a></li>
                          <li><a href="#">Bags &amp; Cases</a></li>
                          <li><a href="#">Electronic Cigarettes</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul className="mb-20px">
                          <li className="mega-menu-title"><a href="#">Camera &amp; Photo</a></li>
                          <li><a href="#">Digital Cameras</a></li>
                          <li><a href="#">Camcorders</a></li>
                          <li><a href="#">Camera Drones</a></li>
                          <li><a href="#">Action Cameras</a></li>
                          <li><a href="#">Photo Studio Supplies</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul className="mb-20px">
                          <li className="mega-menu-title"><a href="#">Smart Electronics</a></li>
                          <li><a href="#">Wearable Devices</a></li>
                          <li><a href="#">Smart Home Appliances</a></li>
                          <li><a href="#">Smart Remote Controls</a></li>
                          <li><a href="#">Smart Watches</a></li>
                          <li><a href="#">Smart Wristbands</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href="#">Audio &amp; Video</a></li>
                          <li><a href="#">Televisions</a></li>
                          <li><a href="#">TV Receivers</a></li>
                          <li><a href="#">Projectors</a></li>
                          <li><a href="#">Audio Amplifier Boards</a></li>
                          <li><a href="#">TV Sticks</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href="#">Portable Audio &amp; Video</a></li>
                          <li><a href="#">Headphones</a></li>
                          <li><a href="#">Speakers</a></li>
                          <li><a href="#">MP3 Players</a></li>
                          <li><a href="#">VR/AR Devices</a></li>
                          <li><a href="#">Microphones</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Video Game<i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="#">Handheld Game Players</a></li>
                      <li><a href="#">Game Controllers</a></li>
                      <li><a href="#">Joysticks</a></li>
                      <li><a href="#">Stickers</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Televisions</a></li>
                  <li><a href="#">Digital Cameras</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Wearable Devices</a></li>
                  <li><a href="#">Smart Watches</a></li>
                  <li><a href="#">Game Controllers</a></li>
                  <li><a href="#"> Smart Home Appliances</a></li>
                  <li className="hidden"><a href="#">Projectors</a></li>
                  <li>
                    <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
                  </li>
                </ul>
              </div>
              {/* Beauty Category */}
              {/*Main Navigation Start */}
              <div className="main-navigation d-none d-lg-block">
                <ul>
                  <li className="menu-dropdown">
                    <a href="#">Home <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Organic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><Link to="/index1">Organic  </Link></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                        <li><Link to="/index2">Cosmetic </Link></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                        <li><Link to="/index3">Digital </Link></li>
                          <li><a href="index-10.html">Digital 2</a></li>
                          <li><a href="index-11.html">Digital 3</a></li>
                          <li><a href="index-12.html">Digital 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-13.html">Furniture 1</a></li>
                          <li><a href="index-14.html">Furniture 2</a></li>
                          <li><Link to="/index4">Furniture </Link></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                        <li><Link to="/index5">Medical </Link></li>
                          <li><a href="index-18.html">Medical 2</a></li>
                          <li><a href="index-19.html">Medical 3</a></li>
                          <li><a href="index-20.html">Medical 4</a></li>
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
                      <li>
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
                      </li>
                      <li className="w-100">
                        <ul className="banner-megamenu-wrapper d-flex">
                          <li className="banner-wrapper mr-30px">
                            <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-3.jpg" alt /></a>
                          </li>
                          <li className="banner-wrapper">
                            <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-4.jpg" alt /></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                    <li><Link to="/about">About Page</Link></li>
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
                  <li><a href="contact.html">Contact Us</a></li>
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
              <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
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
                <Link to="/compare" className="count-cart random d-xs-none" ></Link>
                <Link to="/wishlist" className="count-cart heart d-xs-none" ></Link>
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
            </div>
            {/*Cart info End */}
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
                        <li><Link to="/index1">Organic  </Link></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Cosmetic</a>
                      <ul>
                      <li><Link to="/index2">Cosmetic </Link></li>
                        <li><a href="index-6.html">Cosmetic 2</a></li>
                        <li><a href="index-7.html">Cosmetic 3</a></li>
                        <li><a href="index-8.html">Cosmetic 4</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Digital</a>
                      <ul>
                      <li><Link to="/index3">Digital </Link></li>
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
                        <li><Link to="/index4">Furniture </Link></li>
                        <li><a href="index-16.html">Furniture 4</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Medical</a>
                      <ul>
                      <li><Link to="/index5">Medical </Link></li>
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
                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
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
    {/* Beauty Category */}
    <div className="container d-lg-none">
      {/*=======  category menu  =======*/}
      <div className="hero-side-category">
        {/* Category Toggle Wrap */}
        <div className="category-toggle-wrap">
          {/* Category Toggle */}
          <button className="category-toggle"><i className="fa fa-bars" /> All Categories</button>
        </div>
        {/* Category Menu */}
        <nav className="category-menu">
          <ul>
            <li className="menu-item-has-children menu-item-has-children-1">
              <a href="#">Accessories &amp; Parts<i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-1">
                <li><a href="#">Cables &amp; Adapters</a></li>
                <li><a href="#">Batteries</a></li>
                <li><a href="#">Chargers</a></li>
                <li><a href="#">Bags &amp; Cases</a></li>
                <li><a href="#">Electronic Cigarettes</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item-has-children-2">
              <a href="#">Camera &amp; Photo<i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-2">
                <li><a href="#">Digital Cameras</a></li>
                <li><a href="#">Camcorders</a></li>
                <li><a href="#">Camera Drones</a></li>
                <li><a href="#">Action Cameras</a></li>
                <li><a href="#">Photo Studio Supplies</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item-has-children-3">
              <a href="#">Smart Electronics <i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-3">
                <li><a href="#">Wearable Devices</a></li>
                <li><a href="#">Smart Home Appliances</a></li>
                <li><a href="#">Smart Remote Controls</a></li>
                <li><a href="#">Smart Watches</a></li>
                <li><a href="#">Smart Wristbands</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item-has-children-4">
              <a href="#">Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-4">
                <li><a href="#">Televisions</a></li>
                <li><a href="#">TV Receivers</a></li>
                <li><a href="#">Projectors</a></li>
                <li><a href="#">Audio Amplifier Boards</a></li>
                <li><a href="#">TV Sticks</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item-has-children-5">
              <a href="#">Portable Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-5">
                <li><a href="#">Headphones</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">MP3 Players</a></li>
                <li><a href="#">VR/AR Devices</a></li>
                <li><a href="#">Microphones</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item-has-children-6">
              <a href="#">Video Game <i className="ion-ios-arrow-down" /></a>
              {/* category submenu */}
              <ul className="category-mega-menu category-mega-menu-6">
                <li><a href="#">Handheld Game Players</a></li>
                <li><a href="#">Game Controllers</a></li>
                <li><a href="#">Joysticks</a></li>
                <li><a href="#">Stickers</a></li>
              </ul>
            </li>
            <li><a href="#">Televisions</a></li>
            <li><a href="#">Digital Cameras</a></li>
            <li><a href="#">Headphones</a></li>
            <li><a href="#">Wearable Devices</a></li>
            <li><a href="#">Smart Watches</a></li>
            <li><a href="#">Game Controllers</a></li>
            <li><a href="#"> Smart Home Appliances</a></li>
            <li className="hidden"><a href="#">Projectors</a></li>
            <li>
              <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
            </li>
          </ul>
        </nav>
      </div>
      {/*=======  End of category menu =======*/}
    </div>
    {/* Beauty Category */}
  </header>
  {/* Header End */}
  {/* Slider Arae Start */}
  <div className="slider-area">
    <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
      {/* Slider Single Item Start */}
      <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-16.jpg)'}}>
        <div className="container">
          <div className="slider-content-5 slider-animated-1 text-left">
            <span className="animated">SOUNLINK SPEAKERS</span>
            <h1 className="animated">
              <strong> WIN Nedmi PULSE </strong> <br />
              Bluetooth Speakers
            </h1>
            <p className="animated">Big Sound. Portable Size.</p>
            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
          </div>
        </div>
      </div>
      {/* Slider Single Item End */}
      {/* Slider Single Item Start */}
      <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-17.jpg)'}}>
        <div className="container">
          <div className="slider-content-5 slider-animated-1 text-left">
            <span className="animated">NEW FROM MANASONIC</span>
            <h1 className="animated">
              <strong>KUMIX EC-45</strong> <br />
              Camera Seminar
            </h1>
            <p className="animated">Super Smooth 4k / Manasonic Sensor</p>
            <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
          </div>
        </div>
      </div>
      {/* Slider Single Item End */}
    </div>
  </div>
  {/* Slider Arae End */}
  {/* Banner Area Start */}
  <div className="banner-3-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/23.jpg" alt /></a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div className="banner-wrapper mb-30px">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/24.jpg" alt /></a>
          </div>
          <div className="banner-wrapper">
            <a href="shop-4-column.html"><img src="assets/images/banner-image/25.jpg" alt /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Banner Area End */}
  {/* Static Area Start */}
  <section className="static-area">
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
  {/* Best Sells Area Start */}
  <section className="best-sells-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title Start */}
          <div className="section-title">
            <h2>Best Sellers</h2>
            <p>Our most popular products based on sales. Updated hourly.</p>
          </div>
          {/* Section Title Start */}
        </div>
      </div>
      {/* Best Sell Slider Carousel Start */}
      <div className="best-sell-slider owl-carousel owl-nav-style">
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/1.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/1.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">WI-FI DOME CAMERA</a></h2>
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
              <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
              <li>
              <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
              </li>
              <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
              </li>
            </ul>
          </div>
        </article>
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/2.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">APPLE SMART WATCH</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/3.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">HOME SECURITY CAMERA</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/5.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/6.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">WIRELESS HEADPHONES</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/7.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">Samsung A32 (Blue, 6GB RAM, 128GB Storage)</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/9.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/10.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">Fujifilm Instax Mini 9 Instant Camera</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/11.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/11.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link"> Wi-Fi Pan/Tilt Smart Security Camera, Indoor CCTV, 360°</a></h2>
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
        {/* Single Item */}
        <article className="list-product">
          <div className="img-block">
            <a href="single-product.html" className="thumbnail">
              <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
              <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
            <h2><a href="single-product.html" className="product-link">Portable Music Player</a></h2>
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
      {/* Best Sell Slider Carousel End */}
    </div>
  </section>
  {/* Best Sell Area End */}
  {/* Category Area Start */}
  <section className="categorie-area mb-60px mt-30">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title mt-res-sx-30px mt-res-md-30px">
            <h2>Popular Categories</h2>
            <p>Our weekly featured famous categories</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Category Slider Start */}
      <div className="category-slider owl-carousel owl-nav-style">
        {/* Single item */}
        <div className="category-item">
          <div className="category-list mb-30px">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-1.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Home Audio</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
          <div className="category-list">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-2.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Security Cameras and Smart Technology</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </div>
        {/* Single item */}
        <div className="category-item">
          <div className="category-list mb-30px">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-3.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Computers &amp; Accessories</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
          <div className="category-list">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-4.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Game Zone</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </div>
        {/* Single item */}
        <div className="category-item">
          <div className="category-list mb-30px">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-5.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Mobiles &amp; Accessories</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
          <div className="category-list">
            <div className="category-thumb">
              <a href="shop-4-column.html">
                <img src="assets/images/product-image/electronic/thumb-6.jpg" alt />
              </a>
            </div>
            <div className="desc-listcategoreis">
              <div className="name_categories">
                <h4>Home Theater, TV &amp; Video</h4>
              </div>
              <span className="number_product">17 Products</span>
              <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </div>
        {/* Single item */}
        {/* Single item */}
      </div>
    </div>
  </section>
  {/* Category Area End  */}
  {/* Hot deal area Start */}
  <section className="hot-deal-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {/* Section Title */}
          <div className="section-title">
            <h2>Hot Deals</h2>
            <p>Find the best deals and offers</p>
          </div>
          {/* Section Title */}
        </div>
      </div>
      {/* Hot Deal Slider 2 Start */}
      <div className="hot-deal-2 owl-carousel owl-nav-style">
        {/* Single Item */}
        <article className="list-product">
          <div className="hot-item-inner">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
          <div className="product-wrapper">
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Samsung A32 (Blue, 6GB RAM, 128GB Storage)</a></h2>
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
            <div className="in-stock">Availability: <span>300 In Stock</span></div>
            <div className="clockdiv">
              <div className="title_countdown">Hurry Up! Offers ends in:</div>
              <div data-countdown="2021/03/01" />
            </div>
          </div>
        </article>
        {/* Single Item */}
        <article className="list-product">
          <div className="hot-item-inner">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
          <div className="product-wrapper">
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link"> Wi-Fi Pan/Tilt Smart Security Camera, Indoor CCTV, 360°</a></h2>
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
            <div className="in-stock">Availability: <span>300 In Stock</span></div>
            <div className="clockdiv">
              <div className="title_countdown">Hurry Up! Offers ends in:</div>
              <div data-countdown="2021/03/01" />
            </div>
          </div>
        </article>
        {/* Single Item */}
        <article className="list-product">
          <div className="hot-item-inner">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/1.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/1.jpg" alt />
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
          <div className="product-wrapper">
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">HOME SECURITY CAMERA</a></h2>
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
            <div className="in-stock">Availability: <span>299 In Stock</span></div>
            <div className="clockdiv">
              <div className="title_countdown">Hurry Up! Offers ends in:</div>
              <div data-countdown="2021/03/01" />
            </div>
          </div>
        </article>
        {/* Single Item */}
        <article className="list-product">
          <div className="hot-item-inner">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/10.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/11.jpg" alt />
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
          <div className="product-wrapper">
            <div className="product-decs">
              <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
              <h2><a href="single-product.html" className="product-link">Fujifilm Instax Mini 9 Instant Camera</a></h2>
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
            <div className="in-stock">Availability: <span>300 In Stock</span></div>
            <div className="clockdiv">
              <div className="title_countdown">Hurry Up! Offers ends in:</div>
              <div data-countdown="2021/03/01" />
            </div>
          </div>
        </article>
      </div>
      {/* Hot Deal Slider 2 Start */}
    </div>
  </section>
  {/* Hot Deal Area End */}
  {/* Category Tab Area Start */}
  <section className="category-tab-area sub-category-owl-nav mt-30">
    <div className="container">
      <div className="section-title">
        <h2>Smart Electronics</h2>
        {/* Nav tabs */}
        <ul className="nav nav-tabs sub-category mb-30px">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#feature">Wearable Devices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#onsale">Smart Home Appliances</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#bestseller">Smart Remote Controls</a>
          </li>
        </ul>
      </div>
      {/* Tab panes */}
      <div className="tab-content">
        {/* 1st tab start */}
        <div id="feature" className="tab-pane active">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/71MPdscEHHL._AC_SX522_.jpg" alt />
                        <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/71MPdscEHHL._AC_SX522_.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">Fitness Tracker</a></h2>
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
                </div>
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE" alt />
                        <img className="second-img" src="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE" alt />
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
                      <h2><a href="single-product.html" className="product-link">Amazon Echo Dot (3rd Gen)</a></h2>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage)</a></h2>
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
                {/* Product Single Item */}
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">Gaming Control</a></h2>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/41aoFzhqIIL._SL1080_.jpg" alt />
                        <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/41aoFzhqIIL._SL1080_.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">SMART LOCK</a></h2>
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 1st tab end */}
        {/* 2nd tab start */}
        <div id="onsale" className="tab-pane fade">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                {/* Product Single Item */}
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 2nd tab end */}
        {/* 3rd tab start */}
        <div id="bestseller" className="tab-pane fade">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                    <div className="add-to-link">
                      <ul>
                      <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                        <li>
                        <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>                        </li>
                        <li>
                        <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 3rd tab end */}
      </div>
    </div>
  </section>
  {/* Category Tab Area end */}
  {/* Category Tab Area Start */}
  <section className="category-tab-area sub-category-owl-nav mt-30">
    <div className="container">
      <div className="section-title">
        <h2>Portable Audio &amp; Video</h2>
        {/* Nav tabs */}
        <ul className="nav nav-tabs sub-category mb-30px">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#feature-2">Headphones</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#onsale-2">Speakers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#bestseller-2">MP3 Players</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#bestseller-3">Microphones</a>
          </li>
        </ul>
      </div>
      {/* Tab panes */}
      <div className="tab-content">
        {/* 1st tab start */}
        <div id="feature-2" className="tab-pane active">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">Portable wireless speaker</a></h2>
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
                </div>
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">JBL FLIP SPEAKER</a></h2>
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
                        <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>    </li>
                        <li>
                        <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
                {/* Product Single Item */}
                {/* Product Single Item */}
                {/* Product Single Item */}
                {/* Product Single Item */}
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/51V5I6C4ooL._SL1100_.jpg" alt />
                        <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/51V5I6C4ooL._SL1100_.jpg" alt />
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
                      <h2><a href="single-product.html" className="product-link">Bluetooth Earphones</a></h2>
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 1st tab end */}
        {/* 2nd tab start */}
        <div id="onsale-2" className="tab-pane fade">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 2nd tab end */}
        {/* 3rd tab start */}
        <div id="bestseller-2" className="tab-pane fade">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                    <div className="add-to-link">
                      <ul>
                        <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 3rd tab end */}
        {/* 4rd tab start */}
        <div id="bestseller-3" className="tab-pane fade">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
              <div className="banner-wrapper">
                <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
              </div>
            </div>
            {/* New Arrivals Area Start */}
            <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
              {/* New Product Slider Start */}
              <div className="new-product-slider owl-carousel owl-nav-style">
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                    <div className="add-to-link">
                      <ul>
                      <li className="cart"><Link classname="cart-btn" to="/cart">ADD TO CART </Link></li>
                        <li>
                        <Link to="/wishlist"><i className="ion-android-favorite-outline" /></Link>
                        </li>
                        <li>
                        <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>  </li>
                      </ul>
                    </div>
                  </article>
                </div>
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Single Item */}
                <div className="product-inner-item">
                  <article className="list-product mb-30px">
                    <div className="img-block">
                      <a href="single-product.html" className="thumbnail">
                        <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                        <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
              {/* Product Slider End */}
            </div>
          </div>
        </div>
        {/* 4rd tab end */}
      </div>
    </div>
  </section>
  {/* Category Tab Area end */}
  {/* Blog area Start */}
  <section className="blog-area mb-30px mt-30">
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
      <div className="blog-slider-active owl-carousel owl-nav-style">
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="https://cdn.mos.cms.futurecdn.net/jVENDS4AQgW2nnC6X9oKuQ-1024-80.jpg.webp" alt />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">The best Android phones in 2021</a></h4>
              <p className="blog-text">
                Those on a budget can get a good-enough Android phone for under $200. Step up to the $400 range, and the choices get considerably better, especially when it comes to camera quality...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="https://cdn.vox-cdn.com/thumbor/dzhWanJhP2nJuKInwQMZhK77GEY=/0x0:2040x1360/1820x1024/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66770460/VRG_4013_Best_Laptop_Grid.0.jpg" alt />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">The best laptops for you, from ultraportables to high-powered editing machines</a></h4>
              <p className="blog-text">
                The best laptop of 2021 can come with a variety of brands, prices, and features...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="https://media.pitchfork.com/photos/60c2753bcefa438adaeb6d42/2:1/w_2560%2Cc_limit/noisecancel%252520header%252520copy.png" alt />
            </div>
          </div>
          <div className="blog-post-content d-flex">
            <div className="blog-post-content-cell">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">HEADPHONES</a></h4>
              <p className="blog-text">
                The Best Noise-Cancelling Headphones for Every Budget...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
            </div>
          </div>
        </article>
        {/* single item */}
        <article className="blog-post">
          <div className="blog-post-top">
            <div className="blog-img">
              <img src="assets/images/blog-image/blog-8.jpg" alt />
            </div>
          </div>
          <div className="blog-post-content">
            <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
            <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Foruth Post For XipBlog</a></h4>
            <p className="blog-text">
              Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
            </p>
            <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
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
  {/* Mirrored from htmldemo.hasthemes.com/ecolife-preview/ecolife/index-9.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 06 Jun 2021 16:21:34 GMT */}
  {/* Added by HTTrack */}<meta httpEquiv="content-type" content="text/html;charset=UTF-8" />{/* /Added by HTTrack */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Ecolife - Multipurpose eCommerce HTML Template</title>
  {/* Favicon */}
  <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon/favicon.png" />
  {/* Google Fonts */}
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800&display=swap" rel="stylesheet" />
  {/* All CSS Flies   */}
  {/*===== Vendor CSS (Bootstrap & Icon Font) =====*/}
  {/* <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/ionicons.min.css" /> */}
  {/*===== Plugins CSS (All Plugins Files) =====*/}
  {/* <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css" />
  <link rel="stylesheet" href="assets/css/plugins/meanmenu.css" />
  <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
  <link rel="stylesheet" href="assets/css/plugins/owl-carousel.css" />
  <link rel="stylesheet" href="assets/css/plugins/slick.css" /> */}
  {/*===== Main Css Files =====*/}
  {/* <link rel="stylesheet" href="assets/css/style.css" /> */}
  {/* ===== Responsive Css Files ===== */}
  {/* <link rel="stylesheet" href="assets/css/responsive.css" /> */}
  {/*====== Use the minified version files listed below for better performance and remove the files listed above ======*/}
  <link rel="stylesheet" href="assets/css/vendor/plugins.min.css" />
  <link rel="stylesheet" href="assets/css/style.min.css" />
  <link rel="stylesheet" href="assets/css/responsive.min.css" />
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
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start */}
                    <li className="dropdown after-n">
                      <a className="angle-icon" href="#">Settings</a>
                      <ul className="dropdown-nav">
                        <li><Link to="/myaccount">My Account</Link></li>
                        <li><Link to="/checkout">Checkout</Link></li>
                        <li><Link to ="/login">Login</Link></li>
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
                <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
              </div>
            </div>
            {/* Logo End */}
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
                {/*Contact info Start */}
                <div className="contact-link-wrap">
                  <div className="contact-link">
                    <div className="phone">
                      <p>Call us:</p>
                      <a href="tel:(+800)345678">(+800)345678</a>
                    </div>
                  </div>
                  {/*Contact info End */}
                  {/*Cart info Start */}
                  <div className="cart-info d-flex">
                  <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                    <Link to="/wishlist" className="count-cart heart" ></Link> 
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
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Menu Content Start */}
      <div className="header-buttom-nav sticky-nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left d-none d-lg-block">
              <div className="d-flex align-items-start justify-content-start">
                {/* Beauty Category */}
                <div className="beauty-category vertical-menu home-9">
                  <h3 className="vertical-menu-heading vertical-menu-toggle">All Categories</h3>
                  <ul className="vertical-menu-wrap open-menu-toggle">
                    <li className="menu-dropdown">
                      <a href="#">Electronics<i className="ion-ios-arrow-down" /></a>
                      <ul className="mega-menu-wrap">
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Accessories &amp; Parts</a></li>
                            <li><a href="#">Cables &amp; Adapters</a></li>
                            <li><a href="#">Batteries</a></li>
                            <li><a href="#">Chargers</a></li>
                            <li><a href="#">Bags &amp; Cases</a></li>
                            <li><a href="#">Electronic Cigarettes</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Camera &amp; Photo</a></li>
                            <li><a href="#">Digital Cameras</a></li>
                            <li><a href="#">Camcorders</a></li>
                            <li><a href="#">Camera Drones</a></li>
                            <li><a href="#">Action Cameras</a></li>
                            <li><a href="#">Photo Studio Supplies</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul className="mb-20px">
                            <li className="mega-menu-title"><a href="#">Smart Electronics</a></li>
                            <li><a href="#">Wearable Devices</a></li>
                            <li><a href="#">Smart Home Appliances</a></li>
                            <li><a href="#">Smart Remote Controls</a></li>
                            <li><a href="#">Smart Watches</a></li>
                            <li><a href="#">Smart Wristbands</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Audio &amp; Video</a></li>
                            <li><a href="#">Televisions</a></li>
                            <li><a href="#">TV Receivers</a></li>
                            <li><a href="#">Projectors</a></li>
                            <li><a href="#">Audio Amplifier Boards</a></li>
                            <li><a href="#">TV Sticks</a></li>
                          </ul>
                        </li>
                        <li>
                          <ul>
                            <li className="mega-menu-title"><a href="#">Portable Audio &amp; Video</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">MP3 Players</a></li>
                            <li><a href="#">VR/AR Devices</a></li>
                            <li><a href="#">Microphones</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Video Game<i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li><a href="#">Handheld Game Players</a></li>
                        <li><a href="#">Game Controllers</a></li>
                        <li><a href="#">Joysticks</a></li>
                        <li><a href="#">Stickers</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Televisions</a></li>
                    <li><a href="#">Digital Cameras</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Wearable Devices</a></li>
                    <li><a href="#">Smart Watches</a></li>
                    <li><a href="#">Game Controllers</a></li>
                    <li><a href="#"> Smart Home Appliances</a></li>
                    <li className="hidden"><a href="#">Projectors</a></li>
                    <li>
                      <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
                    </li>
                  </ul>
                </div>
                {/* Beauty Category */}
                {/*Main Navigation Start */}
                <div className="main-navigation d-none d-lg-block">
                  <ul>
                    <li className="menu-dropdown">
                      <a href="#">Home <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Organic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index.html">Organic 1</a></li>
                            <li><a href="index-2.html">Organic 2</a></li>
                            <li><a href="index-3.html">Organic 3</a></li>
                            <li><Link to="/index1">Organic  </Link></li> </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                          <li><Link to="/index2">Cosmetic </Link></li>
                            <li><a href="index-6.html">Cosmetic 2</a></li>
                            <li><a href="index-7.html">Cosmetic 3</a></li>
                            <li><a href="index-8.html">Cosmetic 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                          <li><Link to="/index3">Digital </Link></li>
                            <li><a href="index-10.html">Digital 2</a></li>
                            <li><a href="index-11.html">Digital 3</a></li>
                            <li><a href="index-12.html">Digital 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Furniture <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                            <li><a href="index-13.html">Furniture 1</a></li>
                            <li><a href="index-14.html">Furniture 2</a></li>
                            <li><Link to="/index4">Furniture </Link></li>
                            <li><a href="index-16.html">Furniture 4</a></li>
                          </ul>
                        </li>
                        <li className="menu-dropdown position-static">
                          <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                          <ul className="sub-menu sub-menu-2">
                          <li><Link to="/index5">Medical </Link></li>
                            <li><a href="index-18.html">Medical 2</a></li>
                            <li><a href="index-19.html">Medical 3</a></li>
                            <li><a href="index-20.html">Medical 4</a></li>
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
                        <li>
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
                        </li>
                        <li className="w-100">
                          <ul className="banner-megamenu-wrapper d-flex">
                            <li className="banner-wrapper mr-30px">
                              <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-3.jpg" alt /></a>
                            </li>
                            <li className="banner-wrapper">
                              <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-4.jpg" alt /></a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-dropdown">
                      <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                      <ul className="sub-menu">
                      <li><Link to="/about">About Page</Link></li>
                
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
                    <li><a href="contact.html">Contact Us</a></li>
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
                <a href="index.html"><img src="assets/images/logo/logo-electronic.jpg" alt /></a>
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
                  <Link to="/compare" className="count-cart random d-xs-none" ></Link>
                  <Link to="/wishlist" className="count-cart heart d-xs-none" ></Link>
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
              </div>
              {/*Cart info End */}
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
                          <li><Link to="/index1">Organic  </Link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Cosmetic</a>
                        <ul>
                        <li><Link to="/index2">Cosmetic </Link></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Digital</a>
                        <ul>
                        <li><Link to="/index3">Digital </Link></li>
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
                          <li><Link to="/index4">Furniture </Link></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Home Medical</a>
                        <ul>
                        <li><Link to="/index5">Medical </Link></li>
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
                          <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a></li>
                          <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a></li>
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
      {/* Beauty Category */}
      <div className="container d-lg-none">
        {/*=======  category menu  =======*/}
        <div className="hero-side-category">
          {/* Category Toggle Wrap */}
          <div className="category-toggle-wrap">
            {/* Category Toggle */}
            <button className="category-toggle"><i className="fa fa-bars" /> All Categories</button>
          </div>
          {/* Category Menu */}
          <nav className="category-menu">
            <ul>
              <li className="menu-item-has-children menu-item-has-children-1">
                <a href="#">Accessories &amp; Parts<i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-1">
                  <li><a href="#">Cables &amp; Adapters</a></li>
                  <li><a href="#">Batteries</a></li>
                  <li><a href="#">Chargers</a></li>
                  <li><a href="#">Bags &amp; Cases</a></li>
                  <li><a href="#">Electronic Cigarettes</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-2">
                <a href="#">Camera &amp; Photo<i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-2">
                  <li><a href="#">Digital Cameras</a></li>
                  <li><a href="#">Camcorders</a></li>
                  <li><a href="#">Camera Drones</a></li>
                  <li><a href="#">Action Cameras</a></li>
                  <li><a href="#">Photo Studio Supplies</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-3">
                <a href="#">Smart Electronics <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-3">
                  <li><a href="#">Wearable Devices</a></li>
                  <li><a href="#">Smart Home Appliances</a></li>
                  <li><a href="#">Smart Remote Controls</a></li>
                  <li><a href="#">Smart Watches</a></li>
                  <li><a href="#">Smart Wristbands</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-4">
                <a href="#">Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-4">
                  <li><a href="#">Televisions</a></li>
                  <li><a href="#">TV Receivers</a></li>
                  <li><a href="#">Projectors</a></li>
                  <li><a href="#">Audio Amplifier Boards</a></li>
                  <li><a href="#">TV Sticks</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-5">
                <a href="#">Portable Audio &amp; Video <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-5">
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Speakers</a></li>
                  <li><a href="#">MP3 Players</a></li>
                  <li><a href="#">VR/AR Devices</a></li>
                  <li><a href="#">Microphones</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children menu-item-has-children-6">
                <a href="#">Video Game <i className="ion-ios-arrow-down" /></a>
                {/* category submenu */}
                <ul className="category-mega-menu category-mega-menu-6">
                  <li><a href="#">Handheld Game Players</a></li>
                  <li><a href="#">Game Controllers</a></li>
                  <li><a href="#">Joysticks</a></li>
                  <li><a href="#">Stickers</a></li>
                </ul>
              </li>
              <li><a href="#">Televisions</a></li>
              <li><a href="#">Digital Cameras</a></li>
              <li><a href="#">Headphones</a></li>
              <li><a href="#">Wearable Devices</a></li>
              <li><a href="#">Smart Watches</a></li>
              <li><a href="#">Game Controllers</a></li>
              <li><a href="#"> Smart Home Appliances</a></li>
              <li className="hidden"><a href="#">Projectors</a></li>
              <li>
                <a href="#" id="more-btn"><i className="ion-ios-plus-empty" aria-hidden="true" /> More Categories</a>
              </li>
            </ul>
          </nav>
        </div>
        {/*=======  End of category menu =======*/}
      </div>
      {/* Beauty Category */}
    </header>
    {/* Header End */}
    {/* Slider Arae Start */}
    <div className="slider-area">
      <div className="slider-active-3 owl-carousel slider-hm8 owl-dot-style">
        {/* Slider Single Item Start */}
        <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-16.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">SOUNLINK SPEAKERS</span>
              <h1 className="animated">
                <strong> WIN Nedmi PULSE </strong> <br />
                Bluetooth Speakers
              </h1>
              <p className="animated">Big Sound. Portable Size.</p>
              <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
        {/* Slider Single Item Start */}
        <div className="slider-height-9 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-17.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">NEW FROM MANASONIC</span>
              <h1 className="animated">
                <strong>KUMIX EC-45</strong> <br />
                Camera Seminar
              </h1>
              <p className="animated">Super Smooth 4k / Manasonic Sensor</p>
              <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
      </div>
    </div>
    {/* Slider Arae End */}
    {/* Banner Area Start */}
    <div className="banner-3-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30 mb-res-sm-30">
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/23.jpg" alt /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="banner-wrapper mb-30px">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/24.jpg" alt /></a>
            </div>
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/25.jpg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area End */}
    {/* Static Area Start */}
    <section className="static-area">
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
    {/* Best Sells Area Start */}
    <section className="best-sells-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2>Best Sellers</h2>
              <p>Our most popular products based on sales. Updated hourly.</p>
            </div>
            {/* Section Title Start */}
          </div>
        </div>
        {/* Best Sell Slider Carousel Start */}
        <div className="best-sell-slider owl-carousel owl-nav-style">
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/1.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/1.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">WI-FI DOME CAMERA</a></h2>
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
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                <Link to="/compare"><i className="ion-ios-shuffle-strong" /></Link>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/2.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">APPLE SMART WATCH</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/3.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">HOME SECURITY CAMERA</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/5.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/6.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">WIRELESS HEADPHONES</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/7.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Samsung A32 (Blue, 6GB RAM, 128GB Storage)</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/9.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/10.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Fujifilm Instax Mini 9 Instant Camera</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/11.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/11.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link"> Wi-Fi Pan/Tilt Smart Security Camera, Indoor CCTV, 360°</a></h2>
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
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Portable Music Player</a></h2>
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
        {/* Best Sell Slider Carousel End */}
      </div>
    </section>
    {/* Best Sell Area End */}
    {/* Category Area Start */}
    <section className="categorie-area mb-60px mt-30">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title mt-res-sx-30px mt-res-md-30px">
              <h2>Popular Categories</h2>
              <p>Our weekly featured famous categories</p>
            </div>
            {/* Section Title */}
          </div>
        </div>
        {/* Category Slider Start */}
        <div className="category-slider owl-carousel owl-nav-style">
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-1.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Home Audio</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-2.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Security Cameras and Smart Technology</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-3.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Computers &amp; Accessories</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-4.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Game Zone</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </div>
          {/* Single item */}
          <div className="category-item">
            <div className="category-list mb-30px">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-5.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Mobiles &amp; Accessories</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
            <div className="category-list">
              <div className="category-thumb">
                <a href="shop-4-column.html">
                  <img src="assets/images/product-image/electronic/thumb-6.jpg" alt />
                </a>
              </div>
              <div className="desc-listcategoreis">
                <div className="name_categories">
                  <h4>Home Theater, TV &amp; Video</h4>
                </div>
                <span className="number_product">17 Products</span>
                <a href="shop-4-column.html"> Shop Now <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </div>
          {/* Single item */}
          {/* Single item */}
        </div>
      </div>
    </section>
    {/* Category Area End  */}
    {/* Hot deal area Start */}
    <section className="hot-deal-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title">
              <h2>Hot Deals</h2>
              <p>Find the best deals and offers</p>
            </div>
            {/* Section Title */}
          </div>
        </div>
        {/* Hot Deal Slider 2 Start */}
        <div className="hot-deal-2 owl-carousel owl-nav-style">
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Samsung A32 (Blue, 6GB RAM, 128GB Storage)</a></h2>
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
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link"> Wi-Fi Pan/Tilt Smart Security Camera, Indoor CCTV, 360°</a></h2>
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
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/1.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/1.jpg" alt />
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
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">HOME SECURITY CAMERA</a></h2>
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
              <div className="in-stock">Availability: <span>299 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/electronic/10.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/electronic/11.jpg" alt />
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
            <div className="product-wrapper">
              <div className="product-decs">
                <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                <h2><a href="single-product.html" className="product-link">Fujifilm Instax Mini 9 Instant Camera</a></h2>
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
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                <div className="title_countdown">Hurry Up! Offers ends in:</div>
                <div data-countdown="2021/03/01" />
              </div>
            </div>
          </article>
        </div>
        {/* Hot Deal Slider 2 Start */}
      </div>
    </section>
    {/* Hot Deal Area End */}
    {/* Category Tab Area Start */}
    <section className="category-tab-area sub-category-owl-nav mt-30">
      <div className="container">
        <div className="section-title">
          <h2>Smart Electronics</h2>
          {/* Nav tabs */}
          <ul className="nav nav-tabs sub-category mb-30px">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#feature">Wearable Devices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#onsale">Smart Home Appliances</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bestseller">Smart Remote Controls</a>
            </li>
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content">
          {/* 1st tab start */}
          <div id="feature" className="tab-pane active">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/71MPdscEHHL._AC_SX522_.jpg" alt />
                          <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/71MPdscEHHL._AC_SX522_.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">Fitness Tracker</a></h2>
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
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE" alt />
                          <img className="second-img" src="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE" alt />
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
                        <h2><a href="single-product.html" className="product-link">Amazon Echo Dot (3rd Gen)</a></h2>
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage)</a></h2>
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
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">Gaming Control</a></h2>
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/41aoFzhqIIL._SL1080_.jpg" alt />
                          <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/41aoFzhqIIL._SL1080_.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">SMART LOCK</a></h2>
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 1st tab end */}
          {/* 2nd tab start */}
          <div id="onsale" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 2nd tab end */}
          {/* 3rd tab start */}
          <div id="bestseller" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/26.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 3rd tab end */}
        </div>
      </div>
    </section>
    {/* Category Tab Area end */}
    {/* Category Tab Area Start */}
    <section className="category-tab-area sub-category-owl-nav mt-30">
      <div className="container">
        <div className="section-title">
          <h2>Portable Audio &amp; Video</h2>
          {/* Nav tabs */}
          <ul className="nav nav-tabs sub-category mb-30px">
            <li className="nav-item">
              <a className="nav-link active" data-toggle="tab" href="#feature-2">Headphones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#onsale-2">Speakers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bestseller-2">MP3 Players</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#bestseller-3">Microphones</a>
            </li>
          </ul>
        </div>
        {/* Tab panes */}
        <div className="tab-content">
          {/* 1st tab start */}
          <div id="feature-2" className="tab-pane active">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">Portable wireless speaker</a></h2>
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
                  </div>
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">JBL FLIP SPEAKER</a></h2>
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
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="https://images-na.ssl-images-amazon.com/images/I/51V5I6C4ooL._SL1100_.jpg" alt />
                          <img className="second-img" src="https://images-na.ssl-images-amazon.com/images/I/51V5I6C4ooL._SL1100_.jpg" alt />
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
                        <h2><a href="single-product.html" className="product-link">Bluetooth Earphones</a></h2>
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 1st tab end */}
          {/* 2nd tab start */}
          <div id="onsale-2" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 2nd tab end */}
          {/* 3rd tab start */}
          <div id="bestseller-2" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 3rd tab end */}
          {/* 4rd tab start */}
          <div id="bestseller-3" className="tab-pane fade">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
                <div className="banner-wrapper">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/27.jpg" alt /></a>
                </div>
              </div>
              {/* New Arrivals Area Start */}
              <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 mt-res-sm-90 mt-res-sm-60 mt-res-sm-60">
                {/* New Product Slider Start */}
                <div className="new-product-slider owl-carousel owl-nav-style">
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/13.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/13.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/12.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/12.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/8.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/8.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/4.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/4.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/14.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/2.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                  {/* Product Single Item */}
                  <div className="product-inner-item">
                    <article className="list-product mb-30px">
                      <div className="img-block">
                        <a href="single-product.html" className="thumbnail">
                          <img className="first-img" src="assets/images/product-image/electronic/15.jpg" alt />
                          <img className="second-img" src="assets/images/product-image/electronic/15.jpg" alt />
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
                {/* Product Slider End */}
              </div>
            </div>
          </div>
          {/* 4rd tab end */}
        </div>
      </div>
    </section>
    {/* Category Tab Area end */}
    {/* Blog area Start */}
    <section className="blog-area mb-30px mt-30">
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
        <div className="blog-slider-active owl-carousel owl-nav-style">
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="https://cdn.mos.cms.futurecdn.net/jVENDS4AQgW2nnC6X9oKuQ-1024-80.jpg.webp" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">The best Android phones in 2021</a></h4>
                <p className="blog-text">
                  Those on a budget can get a good-enough Android phone for under $200. Step up to the $400 range, and the choices get considerably better, especially when it comes to camera quality...
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="https://cdn.vox-cdn.com/thumbor/dzhWanJhP2nJuKInwQMZhK77GEY=/0x0:2040x1360/1820x1024/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66770460/VRG_4013_Best_Laptop_Grid.0.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">The best laptops for you, from ultraportables to high-powered editing machines</a></h4>
                <p className="blog-text">
                  The best laptop of 2021 can come with a variety of brands, prices, and features...
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="https://media.pitchfork.com/photos/60c2753bcefa438adaeb6d42/2:1/w_2560%2Cc_limit/noisecancel%252520header%252520copy.png" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Digital</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">HEADPHONES</a></h4>
                <p className="blog-text">
                  The Best Noise-Cancelling Headphones for Every Budget...
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-8.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content">
              <a href="blog-grid-left-sidebar.html" className="blog-meta">Fashion</a>
              <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Foruth Post For XipBlog</a></h4>
              <p className="blog-text">
                Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
              </p>
              <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
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
                <a href="index.html"><img src="assets/images/logo/footer-logo-electronic.png" alt /></a>
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
                      <a href="#"><i className="ion-social-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-youtube" /></a>
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
            {/* footer single wedget */}
            <div className="col-md-6 col-lg-2 mt-res-sx-30px mt-res-md-30px">
              <div className="single-wedge">
                <h4 className="footer-herading">Information</h4>
                <div className="footer-links">
                  <ul>
                    <li><a href="#">Delivery</a></li>
                    <li><Link to="/about">About Page</Link></li>
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
                    <li><a href="#">New Products</a></li>
                    <li><a href="#">Best Sales</a></li>
                    <li><Link to ="/login">Login</Link></li>
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
                  <a href="#"><img src="assets/images/icons/app_store.png" alt /></a>
                  <a href="#"><img src="assets/images/icons/google_play.png" alt /></a>
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
                  <img src="assets/images/product-image/electronic/1.jpg" alt />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/2.jpg" alt />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/3.jpg" alt />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/electronic/4.jpg" alt />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/electronic/1.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/electronic/2.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/electronic/3.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/electronic/4.jpg" alt /></a>
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
                    <a href="#"> + Add To Cart</a>
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
                        <a href="#"><i className="ion-social-facebook" /></a>
                      </li>
                      <li>
                        <a href="#"><i className="ion-social-twitter" /></a>
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
        )
    }
  }
  export default Index3;
