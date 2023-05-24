import React, { useState } from "react";
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png.webp'

import {FaBars} from 'react-icons/fa'

import search from '../Images/search.png.webp'
import heart from '../Images/heart.png'
import bag from '../Images/bag.png'


const NavbarOne = () => {
  const [data, setdata] = useState(false);
  const demo = () => {
    setdata(!data);
  };

  function btn_data() {

    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  return (
      <div>
      {data ?


                                          /*------ttoggle-navbar-content----------------*/

        <div className="offcanvas-menu-wrapper active">
          <div className="offcanvas__search__option active">
            <Link to='SearchComponents'>
              <img className="search-switch" src={search} alt="" />
            </Link>
          </div>
          <div className="offcanvas__widget">
            <ul>
              <li>
                <Link to="#">
                  <img src={heart} alt="" />
                </Link>{" "}
                <span>(05)</span>
              </li>
              <li>
                <Link to="#">
                  <img src={bag} alt="" />
                </Link>{" "}
                <span>(01)</span>
              </li>
            </ul>
            <div className="price">$ 65.0</div>
          </div>
          <div className="offcanvas__logo">
            <Link to="Home">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div id="mobile-menu-wrap">
            <div className="slicknav_menu">
              <Link
                to="#"
                aria-haspopup="true"
                role="button"
                tabIndex={0}
                className="slicknav_btn slicknav_open"
                style={{ outline: "none" }}
              >
                
              </Link>
              <nav className="slicknav_nav" aria-hidden="false" role="menu" style={{}}>
                <ul>
                  <li className="active">
                    <Link to="/" >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="about" onClick={btn_data}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="services" onClick={btn_data}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="shop" onClick={btn_data}>
                      Shop
                    </Link>
                  </li>
                  <li className="slicknav_collapsed slicknav_parent" >
                    <Link
                      a="#"
                      role="menuitem"
                      aria-haspopup="true"
                      tabIndex={-1}
                      className="slicknav_item slicknav_row"
                      style={{ outline: "none" }}
                    />
                    <Link to="#">Pages</Link>
                    <span className="slicknav_arrow">►</span>
                    <ul
                      className="dropdown slicknav_hidden"
                      role="menu"
                      aria-hidden="true"
                      style={{ display: "none" }}
                    >
                      <li>
                        <Link to="cart"  onClick={btn_data} >
                          Cart
                        </Link>
                      </li>
                      <li>
                        <Link to="checkout"  onClick={btn_data} >
                          Checkout
                        </Link>
                      </li>
                      <li>
                        <Link to="Wishlist"    onClick={btn_data} >
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link to="portfolio"   onClick={btn_data} >
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link to="shopdetails"   onClick={btn_data} >
                          Shop Details
                        </Link>
                      </li>
                      <li>
                        <Link to="blogdetails"   onClick={btn_data} >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="blog"  onClick={btn_data} >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="contact"  onClick={btn_data} >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> : null}


{/* ---------------------- Navbar-section ----------------------- */}


      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <Link to=''>
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="header__options">
                <nav className="header__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to="">Home</Link>
                    </li>
                    <li>
                      <Link to="about">About</Link>
                    </li>
                    <li>
                      <Link to="services">Services</Link>
                    </li>
                    <li>
                      <Link to="shop">Shop</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="cart">Cart</Link>
                        </li>
                        <li>
                          <Link to="checkout">Checkout</Link>
                        </li>
                        <li>
                          <Link to="Wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link to="shopdetails">Shop Details</Link>
                        </li>
                        <li>
                          <Link to="blogdetails">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header__option__right">
                  <div className="header__option__right__search">
                    <Link to='SearchComponents'>
                      <img className="search-switch" src={search} alt="" />
                    </Link>
                  </div>
                  <div className="header__option__right__cart">
                    <ul>
                      <li>
                        <Link to="#">
                          <img src={heart} alt="" />
                        </Link>{" "}
                        <span>(05)</span>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={bag} alt="" />
                        </Link>{" "}
                        <span>(01)</span>
                      </li>
                    </ul>
                    <div className="price">$ 65.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open" onClick={demo} >

            <i className=""><FaBars /></i>

          </div>
        </div>
      </header>
    </div >
  )
}

export default NavbarOne






