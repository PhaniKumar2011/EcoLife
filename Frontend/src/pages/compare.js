import React from 'react';
import {Link} from 'react-router-dom';

  class Compare extends React.Component{
  render(){ 
  return(
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
                    <li><Link to="/myaccount">Account Page</Link></li>
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
                        <li><a href="index.html">Organic 1</a></li>
                        <li><a href="index-2.html">Organic 2</a></li>
                        <li><a href="index-3.html">Organic 3</a></li>
                        <li><Link to="/index1">Organic </Link></li>
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
                  <li><Link to="/cart">Cart Page</Link></li>
                    <li><Link to="/checkout">Checkout Page</Link></li>
                    <li><Link to="/compare">Compare Page</Link></li>
                    <li><Link to="/login">Login &amp; Regiter Page</Link></li>
                    <li><Link to="/myaccount">Account Page</Link></li>
                    <li><Link to="/wishlist">Wishlist Page</Link></li> </ul>
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
            <h1 className="breadcrumb-hrading">Compare Page</h1>
            <ul className="breadcrumb-links">
              <li><a href="index.html">Home</a></li>
              <li>Compare</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Area End */}
  {/* Compare area start */}
  <div className="compare-area mtb-60px">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <form action="#">
            {/* Compare Table */}
            <div className="compare-table table-responsive">
              <table className="table mb-0">
                <tbody>
                  <tr>
                    <td className="first-column">Product</td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/10.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Camera</a>
                      <a href="#" className="title">Zeon Zen 4 Pro</a>
                    </td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/9.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Doren</a>
                      <a href="#" className="title">Aquet Doren D 420</a>
                    </td>
                    <td className="product-image-title">
                      <a href="#" className="image"><img src="assets/images/product-image/electronic/4.jpg" alt="Compare Product" /></a>
                      <a href="#" className="category">Games</a>
                      <a href="#" className="title">Game Station X 22</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Description</td>
                    <td className="pro-desc">
                      <p>Camera Zeon Zen 4 Pro. ₹ 400.0; ₹ 300.0; -25 %. -. +. Add to Cart. Share. Camera Zeon Zen 4 Pro. Description Product Details Reviews (2). Camera Zeon Zen ...</p>
                    </td>
                    <td className="pro-desc">
                      <p>Gold Aquet Doren D 420 · Compare Product Ring Game Station X 22. Description. Samsome Note Book Pro 5 is an the best Laptop on this budgeted. </p>
                    </td>
                    <td className="pro-desc">
                      <p>HIGH RESOLUTION VIEWFINDER AND LCD DISPLAY: High resolution (2,360K dot) OLED Live View Finder and rear touch enabled 3 inch tilt/swivel LCD display (1,040 dot) are clear even in bright sunlight</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="first-column">Price</td>
                    <td className="pro-price">$295</td>
                    <td className="pro-price">$275</td>
                    <td className="pro-price">$395</td>
                  </tr>
                  <tr>
                    <td className="first-column">Color</td>
                    <td className="pro-color">Brown</td>
                    <td className="pro-color">Black</td>
                    <td className="pro-color">White</td>
                  </tr>
                  <tr>
                    <td className="first-column">Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                    <td className="pro-stock">In Stock</td>
                  </tr>
                  <tr>
                    <td className="first-column">Add to cart</td>
                    <td className="pro-addtocart">
                      <Link to="/cart" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></Link>
                    </td>
                    <td className="pro-addtocart">
                    <Link to="/cart" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></Link>
                    </td>
                    <td className="pro-addtocart">
                    <Link to="/cart" className="add-to-cart" tabIndex={0}><span>ADD TO CART</span></Link>
                    </td>
                  </tr>
                  {/* <tr>
                                          <td class="first-column">Delete</td>
                                          <td class="pro-remove">
                                              <button><i class="ion-trash-b"></i></button>
                                          </td>
                                          <td class="pro-remove">
                                              <button><i class="ion-trash-b"></i></button>
                                          </td>
                                          <td class="pro-remove">
                                              <button><i class="ion-trash-b"></i></button>
                                          </td>
                                      </tr> */}
                  <tr>
                    <td className="first-column">Rating</td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                    </td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star-outline" />
                    </td>
                    <td className="pro-ratting">
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star" />
                      <i className="ion-android-star-half" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Compare area end */}
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
                  <li><Link to ="/login">Login</Link></li>
                  <li><Link to="/myaccount">Account Page</Link></li>
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
  )

  }}

  export default Compare;


