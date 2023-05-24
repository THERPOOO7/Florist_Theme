import React from 'react'
import { Link } from 'react-router-dom'


import product1 from '../Images/product-1.jpg'
import product2 from '../Images/product-2.jpg'
import product3 from '../Images/product-3.jpg'
import product4 from '../Images/product-4.jpg'
import product5 from '../Images/product-5.jpg'
import product6 from '../Images/product-6.jpg'
import product7 from '../Images/product-7.jpg'
import product8 from '../Images/product-8.jpg'
import product9 from '../Images/product-9.jpg'
import product10 from '../Images/product-10.jpg'

import ButtonHover from './ButtonHover'

const ArraivlSection = () => {
  return (
      
      <div>
          <section className="arrival spad">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="section-title">
                              <span>Our flower</span>
                              <h2>New Arrivals</h2>
                          </div>
                          <div className="filter__controls">
                              <ul>
                                  <li className="active mixitup-control-active" data-filter="*">
                                      All
                                  </li>
                                  <li data-filter=".bouquet" className="">
                                      Bouquet
                                  </li>
                                  <li data-filter=".flower-box" className="">
                                      Flower box
                                  </li>
                                  <li data-filter=".flower-shelf" className="">
                                      Flower shelf
                                  </li>
                                  <li data-filter=".basket">Basket of flower</li>
                                  <li data-filter=".gift">Gift combos</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="row product__filter" id="MixItUpF3EF5E" style={{}}>
                      <div className="d-col mix bouquet" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-1.jpg"
                                  style={{ backgroundImage: `url(${product1})` }}
                              >
                                  <div className="label">New</div>

                                  <ButtonHover />

                              </div>

                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix flower-box" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-2.jpg"
                                  style={{ backgroundImage: `url(${product2})` }}
                              >

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix flower-shelf" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-3.jpg"
                                  style={{ backgroundImage: `url(${product3})` }}
                              >
                                  <div className="label">Sale</div>

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix basket" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-4.jpg"
                                  style={{ backgroundImage:`url(${product4})` }}
                              >

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix gift" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-5.jpg"
                                  style={{ backgroundImage: `url(${product5})` }}
                              >

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix bouquet" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-6.jpg"
                                  style={{ backgroundImage: `url(${product6})`}}
                              >
<ButtonHover />
                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix flower-box" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-7.jpg"
                                  style={{ backgroundImage: `url(${product7})` }}
                              >
                                  <div className="label">Out Of Stock</div>

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix flower-shelf" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-8.jpg"
                                  style={{ backgroundImage: `url(${product8})` }}
                              >
                                  <div className="label">New</div>

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix basket" style={{}}>
                          <div className="product__item">
                              <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-9.jpg"
                                  style={{ backgroundImage: `url(${product9})` }}
                              >

                                  <ButtonHover />

                              </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                      <div className="d-col mix gift" style={{}}>
                          <div className="product__item">
                                <div
                                  className="product__item__pic set-bg"
                                  data-setbg="img/product/product-10.jpg"
                                  style={{ backgroundImage: `url(${product10})` }}
                                >
                                  <div className="label">New</div> 

                                    <ButtonHover />

                                </div>
                              <div className="product__item__text">
                                  <h5>
                                      <Link to="#">Fly Me To The Moon</Link>
                                  </h5>
                                  <div className="price">$27.50</div>
                                  <Link to="#" className="cart-btn">
                                      Add to cart
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <div className="view__all">
                              <Link to="#">View all products</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

    </div>
  )
}

export default ArraivlSection