import React,{ useRef, useState } from 'react'

import benefit1 from '../Images/benefit-1.png.webp'
import benefit2 from '../Images/benefit-2.png.webp'
import benefit3 from '../Images/benefit-3.png.webp'
import benefit4 from '../Images/benefit-4.png.webp'

import category1 from '../Images/categories-1.jpg.webp'
import category2 from '../Images/categories-2.jpg.webp'
import category3 from '../Images/categories-3.jpg.webp'
import category4 from '../Images/categories-4.jpg.webp'

import callbg from '../Images/call-bg.jpg.webp'

import aboutv from '../Images/about-video.jpg.webp'

import blog1 from '../Images/blog-1.jpg.webp'
import blog2 from '../Images/blog-2.jpg.webp'
import blog3 from '../Images/blog-3.jpg.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,Navigation } from "swiper";
import ArraivlSection from '../Components/ArraivlSection'

import InstaComponent from '../Components/InstaComponent'

  // import rightbg from '../Images/right-bg.png'
  // import leftbg from '../Images/left-bg.png'


const Home = () => {
  return (
    <div>

      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}

        className="mySwiper"
        
      >
          
        <div className="owl-stage-outer">
          <div
            className="owl-stage"
            style={{
              transform: "translate3d(-2652px, 0px, 0px)",
              transition: "all 0s ease 0s",
              width: 7956
            }}
          >
            <div
              className="owl-item animated owl-animated-in fadeIn cloned"
              style={{ width: 1326 }}
            >
              <SwiperSlide>
                <div className="hero__items set-bg">
                  <div className='img_slide1'>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="hero__text">
                            <span>Fresh Flower &amp; Gift Shop</span>
                            <h2>Making beautiful flowers a part of your life.</h2>
                            <a href="#" className="primary-btn">
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                </div>
                </div>
              </SwiperSlide>
            </div>

            <div className="owl-item animated owl-animated-in fadeIn cloned" style={{ width: 1326 }}>
              <SwiperSlide>
                <div className="hero__items set-bg">
                  <div className='img_slide2'>
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="hero__text">
                            <span>Fresh Flower &amp; Gift Shop</span>
                            <h2>Making beautiful flowers a part of your life.</h2>
                            <a href="#" className="primary-btn">
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>







              







      {/*
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots">
            <button role="button" className="owl-dot active">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
          </div>
        </div>
      </section> */}

{/* ------------------------------benefit_section--------------------------- */}

      <div className="benefits">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="benefits__item">
                <div className="benefits__item__icon">
                  <img src={benefit1} alt="" />
                </div>
                <div className="benefits__item__text">
                  <h4>100% Freshness</h4>
                  <p>Most people are unaware of the less common flower</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="benefits__item">
                <div className="benefits__item__icon">
                  <img src={benefit2} alt="" />
                </div>
                <div className="benefits__item__text">
                  <h4>Made by artist</h4>
                  <p>Most people are unaware of the less common flower</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="benefits__item">
                <div className="benefits__item__icon">
                  <img src={benefit3} alt="" />
                </div>
                <div className="benefits__item__text">
                  <h4>Own courier</h4>
                  <p>Most people are unaware of the less common flower</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="benefits__item">
                <div className="benefits__item__icon">
                  <img src={benefit4} alt="" />
                </div>
                <div className="benefits__item__text">
                  <h4>100% Freshness</h4>
                  <p>Most people are unaware of the less common flower</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* ------------------------------- Categories_section --------------------------------- */}

      <div className="categories">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="categories__item set-bg"
                data-setbg="img/categories/categories-1.jpg"
                style={{
                  backgroundImage: `url(${category1})`
                }}
              >
                <div className="categories__item__text">
                  <h4>Fresh Flower</h4>
                  <span>( 25 items )</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="categories__item set-bg"
                data-setbg="img/categories/categories-2.jpg"
                style={{ backgroundImage: `url(${category2})` }}
              >
                <div className="categories__item__text">
                  <h4>Succulent plants</h4>
                  <span>( 162 items )</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="categories__item set-bg"
                data-setbg="img/categories/categories-3.jpg"
                style={{ backgroundImage: `url(${category3})` }}
              >
                <img src=''></img>
                <div className="categories__item__text">
                  <h4>Cactus plants</h4>
                  <span>( 58 items )</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="categories__item set-bg"
                data-setbg="img/categories/categories-4.jpg"
                style={{ backgroundImage: `url(${category4})` }}
              >
                <div className="categories__item__text">
                  <h4>Funiture tree</h4>
                  <span>( 25 items )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* ----------------------------------about_us_section---------------------------------- */}


      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-title">
                <span>About us</span>
                <h2>We provide all kinds of fresh flower services</h2>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="about__top__text">
                <p>
                  For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
                  growing flowers that can be dried and incorporated into late fall
                  and winter floral arrangements has been a game-changer. During her
                  growing season, this farmer-florist relies on a vivid palette of
                  annuals, perennials and ornamental grasses to supply her studio.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div
                className="about__video set-bg"
                data-setbg="img/about/about-video.jpg"
                style={{ backgroundImage: `url(${aboutv})` }}
              >
                <a
                  href="https://www.youtube.com/watch?v=mk48xRzuNvA"
                  className="play-btn video-popup"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about__text">
                <span>Slow Flowers’ Floral Insights</span>
                <h2>Dried flowers are having a   <br /> renaissance</h2>
                <p>
                  This awareness has been stimulated by sustainable sourcing practices
                  and the desire on the part of North American flower growers to
                  “extend the season” beyond the last frost.
                </p>
                <a href="#" className="primary-btn">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* --------------------------- Arraival_section ----------------------------- */}


     <ArraivlSection/>


{/*---------------------------  -----------------------------*/}

      <section
        className="callto spad set-bg"
        data-setbg="img/call-bg.jpg"
        style={{ backgroundImage: `url(${callbg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="callto__text">
                <span>Custom flower</span>
                <h2>Let our flowers make your party more perfect.</h2>
                <a href="#" className="primary-btn">
                  Order Now
                </a>
                <a href="#" className="primary-btn white-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* ---------------------------- latest Blog section ----------------------------- */}


      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="section-title">
                <span>Latest posts</span>
                <h2>Florist tricks</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="latest__btn">
                <a href="#" className="primary-btn border-btn">
                  View all posts
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-1.jpg"
                    alt=""
                    src={blog1}
                  />
                </div>
                <div className="blog__item__text">
                  <div className="label">
                    <span>Trend news</span>
                  </div>
                  <h4>
                    <a href="#">
                      8 Romantic Gifts to Celebrate Your Wedding Anniversary
                    </a>
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times,
                    receiving a…
                  </p>
                  <span>MAY 22, 2020</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-2.jpg"
                    alt=""
                    src={blog2}
                  />
                </div>
                <div className="blog__item__text">
                  <div className="label">
                    <span>Tips &amp; Idea</span>
                  </div>
                  <h4>
                    <a href="#">Red Rose - Flower of love of Greek Mythology</a>
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times,
                    receiving a…
                  </p>
                  <span>MAY 22, 2020</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img
                    data-cfsrc="img/blog/blog-3.jpg"
                    alt=""
                    src={blog3}
                  />
                </div>
                <div className="blog__item__text">
                  <div className="label">
                    <span>DIY &amp; Crafts</span>
                  </div>
                  <h4>
                    <a href="#">
                      Beautiful Mandalas Made From Flowers by Kathy Klein
                    </a>
                  </h4>
                  <p>
                    Flowers have a language all their own. In Victorian times,
                    receiving a…
                  </p>
                  <span>MAY 22, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* -------------------------------testimonial-section---------------------------------- */}


      <div className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial__slider owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      // transform: "translate3d(-3420px, 0px, 0px)",
                      // transition: "all 0s ease 0s",
                      // width: 6840
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: 1140 }}>
                      <div className="testimonial__item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-7">
                            <div className="testimonial__text">
                              <img
                                data-cfsrc="img/testimonial/quote.png"
                                alt=""
                                src={"https://preview.colorlib.com/theme/florist/img/testimonial/quote.png"}
                              />
                              <p>
                                “I just wanted to say thank you for making such
                                gorgeous arrangements for our birthday celebration. I
                                couldn’t get over how perfect they were for the party.
                                You did a fantastic job, and I appreciate it very
                                much”
                              </p>
                              <h4>Alejandro Houston</h4>
                              <span>Businessman</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* <div className="owl-nav">
                  <button type="button" role="presentation" className="owl-prev">
                    <i className="fa fa-angle-left">
                      <i />
                    </i>
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <i className="fa fa-angle-right">
                      <i />
                    </i>
                  </button>   
                </div> */}
                {/* <div className="owl-dots">
                  <button role="button" className="owl-dot">
                    <span />
                  </button>
                  <button role="button" className="owl-dot active">
                    <span />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>



{/* ------------------------------------------------------------------------------------- */}
{/*-------------------------------------------------------------------------------------  */}
<InstaComponent/>

    </div>
  )
}
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

export default Home