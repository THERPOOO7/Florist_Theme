import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import ButtonHover from '../Components/ButtonHover'

import sp1 from '../Images/Sproduct-1.jpg'
import sp2 from '../Images/Sproduct-2.jpg'
import sp3 from '../Images/Sproduct-3.jpg'
import sp4 from '../Images/Sproduct-4.jpg'

import pd1 from '../Images/product-details-1.jpg'
import th1 from '../Images/thumb-1.jpg'
import th2 from '../Images/thumb-2.jpg'
import th3 from '../Images/thumb-3.jpg'
import th4 from '../Images/thumb-4.jpg'
import th5 from '../Images/thumb-5.jpg'
import th6 from '../Images/thumb-6.jpg'

import bag from '../Images/bag-little.png'
import heart from '../Images/heart-little.png'

const ShopDetailsPage = () => {
  return (
    <div>
      <Breadcrum pageName={"Shop Detail"}/>
      <section className="product-details spad">
        <div className="container">
          <div className="product__details__content">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details__pic">
                  <div className="product__details__pic__item">
                    <img
                      src={pd1}
                      alt=""
                      className="product__details__big__pic"
                    />
                  </div>
                  <div
                    className="product__details__thumb nice-scroll"
                    tabIndex={1}
                    style={{ overflowY: "hidden", outline: "none" }}
                  >
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-2.jpg"
                        src={th1}
                        alt=""
                      />
                    </div>
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-3.jpg"
                        src={th2}
                        alt=""
                      />
                    </div>
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-4.jpg"
                        src={th3}
                        alt=""
                      />
                    </div>
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-5.jpg"
                        src={th4}
                        alt=""
                      />
                    </div>
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-6.jpg"
                        src={th5}
                        alt=""
                      />
                    </div>
                    <div className="pt__item">
                      <img
                        data-imgbigurl="img/product/details/product-details-1.jpg"
                        src={th6}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details__text">
                  <div className="product__details__title">
                    <span>Succulent</span>
                    <h3>Fly Me To The Moon</h3>
                    <ul>
                      <li>
                        <div className="rating">
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                          <i className="fa fa-star-o" />
                        </div>
                      </li>
                      <li>03 reviews</li>
                      <li>Write a review</li>
                    </ul>
                  </div>
                  <div className="product__details__price">$34.00</div>
                  <ul className="product__details__widget">
                    <li>
                      Categories: <span>Succulent</span>
                    </li>
                    <li>
                      Product code: <span>PM 101</span>
                    </li>
                    <li>
                      Reward points: <span>30</span>
                    </li>
                    <li>
                      Availability: <span>In Stock</span>
                    </li>
                  </ul>
                  <div className="product__details__btns">
                    <div className="quantity">
                      <div className="pro-qty">
                        <span className="dec qtybtn">-</span>
                        <input type="text" defaultValue={1} />
                        <span className="inc qtybtn">+</span>
                      </div>
                    </div>
                    <a href="#" className="add_btn">
                      Add To Cart{" "}
                      <span>
                        <img src={bag} alt="" />
                      </span>
                    </a>
                    <a href="#" className="heart_btn">
                      <img src={heart} alt="" />
                    </a>
                  </div>
                  <div className="product__details__desc">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-2"
                          role="tab"
                        >
                          Shipping &amp; Returns
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-3"
                          role="tab"
                        >
                          Reviews ( 03 )
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane active" id="tabs-1" role="tabpanel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                          commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                      </div>
                      <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                          commodo viverra maecenas accumsan.
                        </p>
                      </div>
                      <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          incididunt ut labore et dolore magna aliqua. Quis ipsum
                          suspendisse ultrices gravida. Risus commodo viverra maecenas
                          accumsan lacus vel facilisis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="related__products">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>Related products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="d-col">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-1.jpg"
                    style={{ backgroundImage: `url(${sp1})` }}
                  >
                    <div className="label">New</div>
                   <ButtonHover/>
                   
                  </div>
                  <div className="product__item__text">
                    <h5>
                      <a href="#">Fly Me To The Moon</a>
                    </h5>
                    <div className="price">$27.50</div>
                    <a href="#" className="cart-btn">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-col">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-2.jpg"
                    style={{ backgroundImage: `url(${sp2})` }}
                  >
                    <ButtonHover/>

                  </div>
                  <div className="product__item__text">
                    <h5>
                      <a href="#">Fly Me To The Moon</a>
                    </h5>
                    <div className="price">$27.50</div>
                    <a href="#" className="cart-btn">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-col">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-3.jpg"
                    style={{ backgroundImage: `url(${sp2})` }}
                  >
                    <div className="label">Sale</div>
                    <ButtonHover/>

                  </div>
                  <div className="product__item__text">
                    <h5>
                      <a href="#">Fly Me To The Moon</a>
                    </h5>
                    <div className="price">$27.50</div>
                    <a href="#" className="cart-btn">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-col">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-4.jpg"
                    style={{ backgroundImage: `url(${sp3})` }}
                  >
                    <ButtonHover/>

                  </div>
                  <div className="product__item__text">
                    <h5>
                      <a href="#">Fly Me To The Moon</a>
                    </h5>
                    <div className="price">$27.50</div>
                    <a href="#" className="cart-btn">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-col">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/product/product-5.jpg"
                    style={{ backgroundImage: `url(${sp4})` }}
                  >
                    <ButtonHover/>

                  </div>
                  <div className="product__item__text">
                    <h5>
                      <a href="#">Fly Me To The Moon</a>
                    </h5>
                    <div className="price">$27.50</div>
                    <a href="#" className="cart-btn">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ShopDetailsPage