import React from 'react';
import ProductDataService from "../services/products.js"
import {BrowserRouter as Router,Link} from "react-router-dom";

  import { useState, useEffect } from "react";
const Shop_category1 = props =>{
    const [products , setProducts] = useState([]);
  const [searchName, setSearchName ] = useState("");
 
  

    const [sortoption , togglesortop] = useState(false);
    const [sorttype, setSort] = useState(["Sort by newness"]);
    const[viewtype ,setView] = useState(["list"]);
    useEffect(()=>{setView("list")},[])
    const setviewtype =(viewtype)=>{
        setView(viewtype);
    }
    useEffect(()=>{setSort("Sort by newness")},[])
    const setsorttype=(sorttype)=>{
        setSort("Sort by newness")
    };
    useEffect(()=>{
        retrieveProducts();
        
      },[]);
      const retrieveProducts=()=>{
        ProductDataService.getAll().then(
          response=>{
            console.log(response.data);
            setProducts(response.data.products);
          }
        ).catch(e=>{
          console.log(e);
        });
      };
      const onChangeSearchName= e =>{
        const searchName=e.target.value;
        setSearchName(searchName);
      }
      const refreshList=()=>{
        retrieveProducts();
      }
      const find = (query,by)=>{
        ProductDataService.find(query,by)
        .then(response=>{
          console.log(response.data);
          setProducts(response.data.products)
        })
        .catch(e=>{
          console.log(e);
        });
      }
      const findByName=()=>{
        find(searchName,"name")
      };
    
    return(
        <div className="shop-category-area">
                <div className="container">
                    <div className="row">
                         <div className="col-lg-12 col-md-12"> 
{/*                             <!-- Shop Top Area Start -->
 */}                            <div className="shop-top-bar">
{/*                                 <!-- Left Side start -->
 */}                                <div className="shop-tab nav mb-res-sm-15">
                                    <a className={viewtype === "grid"?"active":""} href="#shop-1" onClick={()=>{setView("grid")}} data-toggle="tab">
                                        <i className="fa fa-th show_grid"></i>
                                    </a>
                                    <a className={ viewtype === "list"?"active":""} href="#shop-2" onClick={()=>{setView("list")}} data-toggle="tab">
                                        <i className="fa fa-list-ul"></i>
                                    </a>
                                    <p>There Are 17 Products.</p>
                                </div>
                               {/*  <!-- Left Side End -->
                                <!-- Right Side Start --> */}
                                <div className="select-shoing-wrap">
                                    <div className="shot-product">
                                        <p>Sort By:</p>
                                    </div>
                                    <div className="shop-select" style={{display:'none'}}>
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                    <div className={sortoption?"nice-select open":"nice-select"} onClick={()=>togglesortop(!sortoption)} tabindex="0">
                                        <span className="current">{sorttype}</span>
                                        <ul className="list">
                                            <li data-value="" className={ sorttype === "Sort by newness" ? "option selected focus": "option"} onClick={()=>setSort("Sort by newness")}>Sort by newness</li>
                                            <li data-value="" className={ sorttype === "A to Z"?"option selected focus": "option"} onClick={()=>setSort("A to Z")}>A to Z</li>
                                            <li data-value="" className={ sorttype === "Z to A"?"option selected focus": "option"} onClick={()=>setSort("Z to A")}> Z to A</li>
                                            <li data-value="" className={ sorttype === "In stock"?"option selected focus": "option"} onClick={()=>setSort("In stock")}>In stock</li>
                                        </ul>
                                    </div>
                                </div>
{/*                                 <!-- Right Side End -->
 */}                            </div>
{/*                             <!-- Shop Top Area End -->
 */}
{/*                             <!-- Shop Bottom Area Start -->
 */}                            <div className="shop-bottom-area mt-35">
{/*                                 <!-- Shop Tab Content Start -->
 */}                                <div className="tab-content jump">
{/*                                     <!-- Tab One Start -->
 */}                                    <div id="shop-1" className={viewtype === "grid"?"tab-pane active":"tab-pane"}>
                                        <div className="row">
                                        {products.map((product)=>{
                                            return(
                                            <div className="col-md-4 col-sm-6">
                                                <article className="list-product">
                                                    <div className="img-block">
                                                        <a href="single-product.html" className="thumbnail">
                                                            <img className="first-img" src={product.image} alt="" />
                                                           
                                                        </a>
                                                        <div className="quick-view">
                                                            <a className="quick_view" href="#" data-link-action="quickview" title="Quick view" data-toggle="modal" data-target="#exampleModal">
                                                                <i className="ion-ios-search-strong"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <ul className="product-flag">
                                                        <li className="new">New</li>
                                                    </ul>
                                                    <div className="product-decs">
                                                        <a className="inner-link" href="shop-4-column.html"><span>STUDIO DESIGN</span></a>
                                                        <h2><a href="single-product.html" className="product-link">{product.productname}</a></h2>
                                                        <div className="rating-product">
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                            <i className="ion-android-star"></i>
                                                        </div>
                                                        <div className="pricing-meta">
                                                            <ul>
                                                                <li className="old-price">€{product.oldprice}</li>
                                                                <li className="current-price">€{product.currentprice}</li>
                                                                <li className="discount-price">{product.discountprice}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="add-to-link">
                                                        <ul>
                                                            <li className="cart"><a className="cart-btn" href="#">ADD TO CART </a></li>
                                                            <li>
                                                                <a href="wishlist.html"><i className="ion-android-favorite-outline"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href="compare.html"><i className="ion-ios-shuffle-strong"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </article>
                                            </div>
                                            );})}   
                                        </div>
                                    </div>
                                 {/*    <!-- Tab One End -->
                                    <!-- Tab Two Start --> */}
                                <div id="shop-2" className={viewtype==="list"?"tab-pane active":"tab-pane"}>
                                   {/*  <div className="row"> */}
                                        {products.map((product)=>{
                                            return(
                                                <div class="shop-list-wrap scroll-zoom">
                                            <div class="row list-product m-0px">
                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                                            <div class="left-img">
                                                                <div class="img-block">
                                                                    <a href="single-product.html" class="thumbnail">
                                                                        <img class="first-img" src={product.image} alt="" />
                                                                        
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
                                                        </div>
                                                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                                            <div class="product-desc-wrap">
                                                                <div class="product-decs">
                                                                    <a class="inner-link" href="shop-4-column.html"><span>GRAPHIC CORNER</span></a>
                                                                    <h2><a href="single-product.html" class="product-link">{product.productname}</a></h2>
                                                                    <div class="rating-product">
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                        <i class="ion-android-star"></i>
                                                                    </div>
                                                                    <div class="pricing-meta">
                                                                        <ul>
                                                                            <li className="old-price">€{product.oldprice}</li>
                                                                           <li className="current-price">€{product.currentprice}</li>
                                                                           <li className="discount-price">{product.discountprice}</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="product-intro-info">
                                                                        <p>{product.about}</p>
                                                                    </div>
                                                                    <div className="in-stock">Availability: <span>{product.avail}</span></div>
                                                                    
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                
                                            );})}   
                                        </div>
                                    {/* </div> */}
                                </div>
                               {/*  <!-- Shop Tab Content End -->
                                <!--  Pagination Area Start --> */}
                                <div className="pro-pagination-style text-center">
                                    <ul>
                                        <li>
                                            <Link className="prev" href="#"><i className="ion-ios-arrow-left"></i></Link>
                                        </li>
                                        <li><Link className="active" href="#">1</Link></li>
                                        <li><Link href="#" onclick="alert('No more items to shows')">2</Link></li>
                                        <li>
                                            <Link className="next" href="#" onclick="alert('No more items to show')"><i className="ion-ios-arrow-right"></i></Link>
                                        </li>
                                    </ul>
                                </div>
{/*                                 <!--  Pagination Area End -->
 */}                            </div>
{/*                             <!-- Shop Bottom Area End -->
 */}                        </div>

                  </div>
                </div>
            </div>
    );
}


export default Shop_category1;