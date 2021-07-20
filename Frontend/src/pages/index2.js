import React from 'react'

class Index2 extends React.Component{
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
                <ul className="res-xs-flex">
                  <li className="after-n">
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" />Compare (0)</a>
                  </li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" />Wishlist (0)</a>
                  </li>
                </ul>
                <div className="dropdown-navs">
                  <ul>
                    {/* Settings Start */}
                    <li className="dropdown xs-after-n">
                      <a className="angle-icon" href="#">Settings</a>
                      <ul className="dropdown-nav">
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="login.html">Login</a></li>
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
      <div className="header-navigation d-none d-lg-block">
        <div className="container">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-cosmatics.jpg" alt /></a>
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
                          <option value={111}>
                            Beauty &amp; Health
                          </option>
                          <option value={113}>
                            - - Makeup
                          </option>
                          <option value={117}>
                            - - - - Eyes
                          </option>
                          <option value={118}>
                            - - - - Lips
                          </option>
                          <option value={119}>
                            - - - - Face
                          </option>
                          <option value={120}>
                            - - - - Makeup Tools
                          </option>
                          <option value={114}>
                            - - Skin Care
                          </option>
                          <option value={121}>
                            - - - - Face
                          </option>
                          <option value={122}>
                            - - - - Eyes
                          </option>
                          <option value={123}>
                            - - - - Body
                          </option>
                          <option value={124}>
                            - - - - Skin Care Tools
                          </option>
                          <option value={115}>
                            - - Health Care
                          </option>
                          <option value={125}>
                            - - - - Massage &amp; Relaxation
                          </option>
                          <option value={126}>
                            - - - - Household Health Monitors
                          </option>
                          <option value={127}>
                            - - - - Chinese Medicine
                          </option>
                          <option value={128}>
                            - - - - Personal Health Care Items
                          </option>
                          <option value={116}>
                            - - Nail Art &amp; Tools
                          </option>
                          <option value={129}>
                            - - - - Gel Nail Polish
                          </option>
                          <option value={130}>
                            - - - - Nail Drills
                          </option>
                          <option value={131}>
                            - - - - Nail Dryers
                          </option>
                          <option value={132}>
                            - - - - Nail Glitter
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
          </div>
        </div>
      </div>
      {/*Header Bottom Account End */}
      {/* Menu Content Start */}
      <div className="header-buttom-nav sticky-nav">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left">
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
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-9.html">Digital 1</a></li>
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
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-17.html">Medical 1</a></li>
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
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href="#">Shop List</a></li>
                          <li><a href="shop-list.html">Shop List</a></li>
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
                      <li className="banner-wrapper">
                        <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-2.jpg" alt /></a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="about.html">About Page</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="compare.html">Compare Page</a></li>
                      <li><a href="login.html">Login &amp; Regiter Page</a></li>
                      <li><a href="my-account.html">Account Page</a></li>
                      <li><a href="wishlist.html">Wishlist Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Blog <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-dropdown position-static">
                        <a href="#">Blog Grid <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                          <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
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
                          <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
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
      {/* Menu Content End */}
      {/* Header Buttom Start */}
      <div className="header-navigation sticky-nav d-lg-none">
        <div className="container position-relative">
          <div className="row">
            {/* Logo Start */}
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <a href="index.html"><img src="assets/images/logo/logo-cosmatics.jpg" alt /></a>
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
                          <li><a href="index.html">Organic 1</a></li>
                          <li><a href="index-2.html">Organic 2</a></li>
                          <li><a href="index-3.html">Organic 3</a></li>
                          <li><a href="index-4.html">Organic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Cosmetic <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-5.html">Cosmetic 1</a></li>
                          <li><a href="index-6.html">Cosmetic 2</a></li>
                          <li><a href="index-7.html">Cosmetic 3</a></li>
                          <li><a href="index-8.html">Cosmetic 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Digital <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-9.html">Digital 1</a></li>
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
                          <li><a href="index-15.html">Furniture 3</a></li>
                          <li><a href="index-16.html">Furniture 4</a></li>
                        </ul>
                      </li>
                      <li className="menu-dropdown position-static">
                        <a href="#">Home Medical <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="index-17.html">Medical 1</a></li>
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
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title"><a href="#">Shop List</a></li>
                          <li><a href="shop-list.html">Shop List</a></li>
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
                      <li className="banner-wrapper">
                        <a href="single-product.html"><img src="assets/images/banner-image/banner-menu-2.jpg" alt /></a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Pages <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li><a href="about.html">About Page</a></li>
                      <li><a href="cart.html">Cart Page</a></li>
                      <li><a href="checkout.html">Checkout Page</a></li>
                      <li><a href="compare.html">Compare Page</a></li>
                      <li><a href="login.html">Login &amp; Regiter Page</a></li>
                      <li><a href="my-account.html">Account Page</a></li>
                      <li><a href="wishlist.html">Wishlist Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-dropdown">
                    <a href="#">Blog <i className="ion-ios-arrow-down" /></a>
                    <ul className="sub-menu">
                      <li className="menu-dropdown position-static">
                        <a href="#">Blog Grid <i className="ion-ios-arrow-down" /></a>
                        <ul className="sub-menu sub-menu-2">
                          <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                          <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
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
                          <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                          <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
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
                          <option value={111}>
                            Beauty &amp; Health
                          </option>
                          <option value={113}>
                            - - Makeup
                          </option>
                          <option value={117}>
                            - - - - Eyes
                          </option>
                          <option value={118}>
                            - - - - Lips
                          </option>
                          <option value={119}>
                            - - - - Face
                          </option>
                          <option value={120}>
                            - - - - Makeup Tools
                          </option>
                          <option value={114}>
                            - - Skin Care
                          </option>
                          <option value={121}>
                            - - - - Face
                          </option>
                          <option value={122}>
                            - - - - Eyes
                          </option>
                          <option value={123}>
                            - - - - Body
                          </option>
                          <option value={124}>
                            - - - - Skin Care Tools
                          </option>
                          <option value={115}>
                            - - Health Care
                          </option>
                          <option value={125}>
                            - - - - Massage &amp; Relaxation
                          </option>
                          <option value={126}>
                            - - - - Household Health Monitors
                          </option>
                          <option value={127}>
                            - - - - Chinese Medicine
                          </option>
                          <option value={128}>
                            - - - - Personal Health Care Items
                          </option>
                          <option value={116}>
                            - - Nail Art &amp; Tools
                          </option>
                          <option value={129}>
                            - - - - Gel Nail Polish
                          </option>
                          <option value={130}>
                            - - - - Nail Drills
                          </option>
                          <option value={131}>
                            - - - - Nail Dryers
                          </option>
                          <option value={132}>
                            - - - - Nail Glitter
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
                          <li><a href="shop-3-column.html">Shop Grid 3 Column</a></li>
                          <li><a href="shop-4-column.html">Shop Grid 4 Column</a></li>
                          <li><a href="shop-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                          <li><a href="shop-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Shop List</a>
                        <ul>
                          <li><a href="shop-list.html">Shop List</a></li>
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
                      <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                      <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                      <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                      <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                      <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
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
        <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-11.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">FRESH FRUIT-NATURAL</span>
              <h1 className="animated">
                Pro Skin Whitening <br />
                Soft Sponge Cake
              </h1>
              <a href="shop-4-column.html" className="shop-btn animated">SHOP NOW</a>
            </div>
          </div>
        </div>
        {/* Slider Single Item End */}
        {/* Slider Single Item Start */}
        <div className="slider-height-6 d-flex align-items-start justify-content-start bg-img" style={{backgroundImage: 'url(assets/images/slider-image/sample-12.jpg)'}}>
          <div className="container">
            <div className="slider-content-5 slider-animated-1 text-left">
              <span className="animated">MOROCCAN ARGAN OIL</span>
              <h1 className="animated">
                Argan Oil A Beauty<br />
                Secret Dating Back Over
              </h1>
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
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-res-xs-30">
            <div className="banner-wrapper mb-30px">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/18.jpg" alt /></a>
            </div>
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/19.jpg" alt /></a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="banner-wrapper mb-30px">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/20.jpg" alt /></a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="banner-wrapper mb-30px">
                  <a href="shop-4-column.html"><img src="assets/images/banner-image/21.jpg" alt /></a>
                </div>
              </div>
            </div>
            <div className="banner-wrapper">
              <a href="shop-4-column.html"><img src="assets/images/banner-image/22.jpg" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Banner Area End */}
    {/* Best Sells Area Start */}
    <section className="best-sells-area">
      <div className="container">
        {/* Section Title Start */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Best Sellers</h2>
              <p>Add bestselling products to weekly line up</p>
            </div>
          </div>
        </div>
        {/* Section Title End */}
        {/* Best Sell Slider Carousel Start */}
        <div className="best-sell-slider owl-carousel owl-nav-style">
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/1.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Nail Polish</a></h2>
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
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/2.jpg" alt />
                <img class="second-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
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
              <h2><a href="single-product.html" className="product-link">Fresh Foam </a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/3.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/4.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Brixton Foundation</a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/5.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/5.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Pink Clay Face Mask</a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/6.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/6.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">New Balance Creme</a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/7.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/8.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">New Make up Brush</a></h2>
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
                {/* <li className="cart"><a className="cart-btn" href cart.html>ADD TO CART /a> </li> */}
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/9.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/9.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">All new Branded Lipstick</a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/cosmatic/10.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs">
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
                      <div class="add-to-link">
                          <ul>
                              <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                              <li>
                                  <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                              </li>
                              <li>
                                  <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                              </li>
                          </ul>
                      </div>
                  </article> */}
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/cosmatic/11.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs">
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
                      <div class="add-to-link">
                          <ul>
                              <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                              <li>
                                  <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                              </li>
                              <li>
                                  <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                              </li>
                          </ul>
                      </div>
                  </article> */}
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/cosmatic/13.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/cosmatic/3.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs">
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
                      <div class="add-to-link">
                          <ul>
                              <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                              <li>
                                  <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                              </li>
                              <li>
                                  <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                              </li>
                          </ul>
                      </div>
                  </article> */}
          {/* Single Item */}
          <article className="list-product">
            <div className="img-block">
              <a href="single-product.html" className="thumbnail">
                <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt />
                <img className="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt />
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
              <h2><a href="single-product.html" className="product-link">Madden by Steve Madden Makeup kit 6</a></h2>
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
                <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                <li>
                  <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                </li>
                <li>
                  <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                </li>
              </ul>
            </div>
          </article>
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="img-block">
                          <a href="single-product.html" class="thumbnail">
                              <img class="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
                              <img class="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" />
                          </a>
                          <div class="quick-view">
                              <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                  <i class="ion-ios-search-strong"></i>
                              </a>
                          </div>
                      </div>
                      <ul class="product-flag">
                          <li class="new">New</li>
                      </ul>
                      <div class="product-decs">
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
                      <div class="add-to-link">
                          <ul>
                              <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                              <li>
                                  <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                              </li>
                              <li>
                                  <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                              </li>
                          </ul>
                      </div>
                  </article> */}
          {/* Single Item */}
        </div>
        {/* Best Sells Carousel End */}
      </div>
    </section>
    {/* Best Sells Slider End */}
    {/* Hot deal area Start */}
    <section className="hot-deal-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title">
              <h2>Hot Deals</h2>
              <p>Add hot products to weekly line up</p>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/16.jpg" alt />
                  <img class="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" />
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
                <h2><a href="single-product.html" className="product-link">Originals Kaval Nail polish.</a></h2>
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
                    <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              <div className="clockdiv">
                {/* <div class="title_countdown">Hurry Up! Offers ends in:</div> */}
                {/* <div data-countdown="2021/03/01"></div> */}
              </div>
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/11.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">Originals Branded New Lipstick.</a></h2>
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
                    <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>300 In Stock</span></div>
              {/* <div class="clockdiv">
                              <div class="title_countdown">Hurry Up! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
            </div>
          </article>
          {/* Single Item */}
          <article className="list-product">
            <div className="hot-item-inner">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">New Balance Fresh Eye roller</a></h2>
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
                    <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                    <li>
                      <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                    </li>
                    <li>
                      <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="in-stock">Availability: <span>299 In Stock</span></div>
              {/* <div class="clockdiv">
                              <div class="title_countdown">Hurry Up ! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
            </div>
          </article>
          {/* <article class="list-product">
                      <div class="hot-item-inner">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt="" />
                                  <!-- <img class="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" /> */}
          {/* </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <ul class="product-flag">
                              <li class="new">New</li>
                          </ul>
                      </div> */}
          {/* <div class="product-wrapper">
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
                              <div class="add-to-link">
                                  <ul>
                                      <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                                      <li>
                                          <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                      </li>
                                      <li>
                                          <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="in-stock">Availability: <span>299 In Stock</span></div>
                          <div class="clockdiv">
                              <div class="title_countdown">Hurry Up ! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
          {/* </div>
                  </article> */} --&gt;
          {/* Single Item */}
          {/* <article class="list-product">
                      <div class="hot-item-inner">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <ul class="product-flag">
                              <li class="new">New</li>
                          </ul>
                      </div>
                      <div class="product-wrapper">
                          <div class="product-decs">
                              <a class="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                              <h2><a href="single-product.html" class="product-link">Madden by Steve Madden Cale Makeup kit</a></h2>
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
                              <div class="add-to-link">
                                  <ul>
                                      <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                                      <li>
                                          <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                      </li>
                                      <li>
                                          <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="in-stock">Availability: <span>299 In Stock</span></div> */}
          {/* <div class="clockdiv">
                              <div class="title_countdown">Hurry Up! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
          {/* </div>
                  </article>

                  <article class="list-product">
                      <div class="hot-item-inner">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <ul class="product-flag">
                              <li class="new">New</li>
                          </ul>
                      </div> */}
          {/* <div class="product-wrapper">
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
                              <div class="add-to-link">
                                  <ul>
                                      <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                                      <li>
                                          <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                      </li>
                                      <li>
                                          <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="in-stock">Availability: <span>299 In Stock</span></div>
                          <!-- <div class="clockdiv">
                              <div class="title_countdown">Hurry Up! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
          {/* </div>
                  </article> */} --&gt;
          {/* <article class="list-product">
                      <div class="hot-item-inner">
                          <div class="img-block">
                              <a href="single-product.html" class="thumbnail">
                                  <img class="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                                  <img class="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt="" />
                              </a>
                              <div class="quick-view">
                                  <a class="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                      <i class="ion-ios-search-strong"></i>
                                  </a>
                              </div>
                          </div>
                          <ul class="product-flag">
                              <li class="new">New</li>
                          </ul>
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
                              <div class="add-to-link">
                                  <ul>
                                      <li class="cart"><a class="cart-btn" href="#">ADD TO CART </a></li>
                                      <li>
                                          <a href="wishlist.html"><i class="ion-android-favorite-outline"></i></a>
                                      </li>
                                      <li>
                                          <a href="compare.html"><i class="ion-ios-shuffle-strong"></i></a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="in-stock">Availability: <span>299 In Stock</span></div>
                          <div class="clockdiv">
                              <div class="title_countdown">Hurry Up! Offers ends in:</div>
                              <div data-countdown="2021/03/01"></div>
                          </div> */}
          {/* </div>
                  </article> */}
          {/* Single Item */}
        </div>
        {/* Hot Deal Slider 2 Start */}
      </div>
    </section>
    {/* Hot Deal Area End */}
    {/* Recent Add Product Area Start */}
    <section className="recent-add-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section Title */}
            <div className="section-title">
              <h2>New Arrivals</h2>
              <p>Add new products to weekly line up</p>
            </div>
            {/* Section Title */}
          </div>
        </div>
        {/* Recent Product slider Start */}
        <div className="recent-product-slider owl-carousel owl-nav-style">
          {/* Product Single Item */}
          <div className="product-inner-item">
            <article className="list-product mb-30px">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/16.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt />
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
                <h2><a href="single-product.html" className="product-link">Nail Paint</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">Eye roller</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/4.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/13.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">Brixton Makeup Box.</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/10.jpg" alt />
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
                <h2><a href="single-product.html" className="product-link">New Brand Nail Paint.</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/11.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/12.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">Maybeline Lip gloss</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/1.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/1.jpg" alt />
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
                <h2><a href="single-product.html" className="product-link">Multiuse Conceler</a></h2>
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
                  <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/14.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/14.jpg" alt />
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/17.jpg" alt />
                  {/* <img class="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt="" /> */}
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
                <h2><a href="single-product.html" className="product-link">Illuminator makeup</a></h2>
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
              <div className="add-to-link">
                <ul>
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/9.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/9.jpg" alt />
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
                <h2><a href="single-product.html" className="product-link">Branded New Lip Balm</a></h2>
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
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/2.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/15.jpg" alt />
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
              <div className="add-to-link">
                <ul>
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/18.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/18.jpg" alt />
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/19.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/18.jpg" alt />
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
              <div className="add-to-link">
                <ul>
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/16.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/16.jpg" alt />
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/15.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/2.jpg" alt />
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
              <div className="add-to-link">
                <ul>
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
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
                  <img className="first-img" src="assets/images/product-image/cosmatic/4.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/13.jpg" alt />
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
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
            <article className="list-product">
              <div className="img-block">
                <a href="single-product.html" className="thumbnail">
                  <img className="first-img" src="assets/images/product-image/cosmatic/10.jpg" alt />
                  <img className="second-img" src="assets/images/product-image/cosmatic/10.jpg" alt />
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
              <div className="add-to-link">
                <ul>
                  <li className="cart"><a className="cart-btn" href="cart.html">ADD TO CART </a></li>
                  <li>
                    <a href="wishlist.html"><i className="ion-android-favorite-outline" /></a>
                  </li>
                  <li>
                    <a href="compare.html"><i className="ion-ios-shuffle-strong" /></a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        {/* Recent Area Slider End */}
      </div>
    </section>
    {/* Recent product area end */}
    {/* Blog area Start */}
    <section className="blog-area mb-30px">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {/* Section title */}
            <div className="section-title">
              <h2>Latest Blogs</h2>
              <p>Present posts in a best way to highlight interesting moments of your blog.</p>
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
                <img src="assets/images/blog-image/blog-5.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Cosmetic</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is First Post For XipBlog</a></h4>
                <p className="blog-text">
                  {/* Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ..Lorem. */}
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-6.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">FASHION</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Secound Post For XipBlog</a></h4>
                <p className="blog-text">
                  {/* Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ... */}
                </p>
                <a className="read-more-btn" href="blog-single-left-sidebar.html"> Read More <i className="ion-android-arrow-dropright-circle" /></a>
              </div>
            </div>
          </article>
          {/* single item */}
          <article className="blog-post">
            <div className="blog-post-top">
              <div className="blog-img">
                <img src="assets/images/blog-image/blog-7.jpg" alt />
              </div>
            </div>
            <div className="blog-post-content d-flex">
              <div className="blog-post-content-cell">
                <a href="blog-grid-left-sidebar.html" className="blog-meta">Cosmetic</a>
                <h4 className="blog-post-heading"><a href="blog-single-left-sidebar.html">This is Thrid Post For XipBlog</a></h4>
                {/* <p class="blog-text">
                                  Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
                              </p> */}
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
              {/* <p class="blog-text">
                              Lorem Ipsum is simply dummy text of the printing and typeSettings industry. Lorem Ipsum has been the industrys ...
                          </p> */}
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
                <a href="index.html"><img src="assets/images/logo/logo-cosmatics.jpg" alt /></a>
              </div>
              {/* footer logo */}
              <div className="about-footer">
                {/* <p class="text-info">We are a team of designers and developers that create high quality HTML template</p> */}
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
                    <li>
                      <a href="technocollabs@gmail.com"><i className="ion-social-google" /></a>
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
            {/* <div class="col-md-6 col-lg-4">
                          <p class="copy-text">Copyright © <a href="https://hasthemes.com/"> HasThemes</a>. All Rights Reserved</p>
                      </div> */}
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
  {/*  Footer Bottom Area start */}
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        {/* <div class="col-md-6 col-lg-4">
                          <p class="copy-text">Copyright © <a href="https://hasthemes.com/"> HasThemes</a>. All Rights Reserved</p>
                      </div> */}
        {/* <div class="col-md-6 col-lg-8">
                          <img class="payment-img" src="assets/images/icons/payment.png" alt="" />
                      </div> */}
      </div>
    </div>
  </div>
  {/*  Footer Bottom Area End*/}
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
                  <img src="assets/images/product-image/cosmatic/1.jpg" alt />
                </div>
                <div id="pro-2" className="tab-pane fade">
                  <img src="assets/images/product-image/cosmatic/2.jpg" alt />
                </div>
                <div id="pro-3" className="tab-pane fade">
                  <img src="assets/images/product-image/cosmatic/3.jpg" alt />
                </div>
                <div id="pro-4" className="tab-pane fade">
                  <img src="assets/images/product-image/cosmatic/4.jpg" alt />
                </div>
              </div>
              {/* Thumbnail Large Image End */}
              {/* Thumbnail Image End */}
              <div className="quickview-wrap mt-15">
                <div className="quickview-slide-active owl-carousel nav owl-nav-style owl-nav-style-2" role="tablist">
                  <a className="active" data-toggle="tab" href="#pro-1"><img src="assets/images/product-image/cosmatic/1.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-2"><img src="assets/images/product-image/cosmatic/2.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-3"><img src="assets/images/product-image/cosmatic/3.jpg" alt /></a>
                  <a data-toggle="tab" href="#pro-4"><img src="assets/images/product-image/cosmatic/4.jpg" alt /></a>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="product-details-content quickview-content">
                <h2>Originals Kaval Windbr</h2>
                {/* <p class="reference">Reference:<span> demo_17</span></p> */}
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
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p> */}
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
                        <a href="technocollabs@gmail.com"><i className="ion-social-google" /></a>
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

export default Index2;
