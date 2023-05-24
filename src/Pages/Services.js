import React from 'react'

import sv1 from '../Images/services-video.jpg.webp'
import Breadcrum from '../Components/Breadcrum'

const Services = () => {
  return (
    <div>
      {/* -----------------Props passing ------------------ */}
    <Breadcrum  pageName={"Services"}/>
      {/* ------------------------------------------------- */}

      <section className="services-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="services__sidebar__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      <div className="services__item">
                        <div className="services__item__icon">
                          <img
                            data-cfsrc="img/services/services-1.png"
                            alt=""
                            src="https://preview.colorlib.com/theme/florist/img/services/services-1.png"
                          />
                        </div>
                        <h4>Custom orders</h4>
                        <p>
                          Flower helps you perfectly express how important your
                          significant.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      <div className="services__item">
                        <div className="services__item__icon">
                          <img
                            data-cfsrc={"img/services/services-2.png"}
                            alt=""
                            src="https://preview.colorlib.com/theme/florist/img/services/services-2.png"
                          />
                        </div>
                        <h4>Event decoration</h4>
                        <p>
                          Flower helps you perfectly express how important your
                          significant.
                        </p>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      <div className="services__item">
                        <div className="services__item__icon">
                          <img
                            data-cfsrc="img/services/services-3.png"
                            alt=""
                            src="https://preview.colorlib.com/theme/florist/img/services/services-3.png"
                          />
                        </div>
                        <h4>Green landscape</h4>
                        <p>
                          Flower helps you perfectly express how important your
                          significant.
                        </p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="services__tab__content">
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="services__tab__details">
                      <div
                        className="services__tab__video set-bg"
                        data-setbg="img/services/services-video.jpg"
                        style={{
                          backgroundImage: `url(${sv1})`
                        }}
                      >
                        <a href="#" className="play-btn">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <div className="services__tab__details__title">
                        <h2>Custom order</h2>
                        <span>From $60 - $300</span>
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Free initial consulting. For retail and office tenants
                                who are interested in a weekly delivery program floral
                                design plan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Birthday Blooms. Red White &amp; Bloom will offer a
                                free arrangement to each office manager for a
                                commercial account on his or her birthday.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Priority delivery program. Red White &amp; Bloom will
                                work with each commercial customer to determine a
                                weekly delivery schedule.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Referral Program. Red White &amp; Bloom will offer a
                                one-time 25% discount to each commercial customer for
                                every additional.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="services__tab__details__desc">
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="services__tab__details__form">
                        <h4>Get a quote</h4>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Phone" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <select style={{ display: "none" }}>
                                <option value="">Type services</option>
                              </select>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">Type services</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    Type services
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea placeholder="Message" defaultValue={""} />
                              <button type="submit" className="site-btn">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="services__tab__details">
                      <div
                        className="services__tab__video set-bg"
                        data-setbg="img/services/services-video.jpg"
                        style={{
                          backgroundImage: 'url("img/services/services-video.jpg")'
                        }}
                      >
                        <a href="#" className="play-btn">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <div className="services__tab__details__title">
                        <h2>Event decoration</h2>
                        <span>From $60 - $300</span>
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Free initial consulting. For retail and office tenants
                                who are interested in a weekly delivery program floral
                                design plan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Birthday Blooms. Red White &amp; Bloom will offer a
                                free arrangement to each office manager for a
                                commercial account on his or her birthday.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Priority delivery program. Red White &amp; Bloom will
                                work with each commercial customer to determine a
                                weekly delivery schedule.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Referral Program. Red White &amp; Bloom will offer a
                                one-time 25% discount to each commercial customer for
                                every additional.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="services__tab__details__desc">
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="services__tab__details__form">
                        <h4>Get a quote</h4>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Phone" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <select style={{ display: "none" }}>
                                <option value="">Type services</option>
                              </select>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">Type services</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    Type services
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea placeholder="Message" defaultValue={""} />
                              <button type="submit" className="site-btn">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="services__tab__details">
                      <div
                        className="services__tab__video set-bg"
                        data-setbg="img/services/services-video.jpg"
                        style={{
                          backgroundImage: 'url("img/services/services-video.jpg")'
                        }}
                      >
                        <a href="#" className="play-btn">
                          <i className="fa fa-play" />
                        </a>
                      </div>
                      <div className="services__tab__details__title">
                        <h2>Green landscape</h2>
                        <span>From $60 - $300</span>
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Free initial consulting. For retail and office tenants
                                who are interested in a weekly delivery program floral
                                design plan.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Birthday Blooms. Red White &amp; Bloom will offer a
                                free arrangement to each office manager for a
                                commercial account on his or her birthday.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Priority delivery program. Red White &amp; Bloom will
                                work with each commercial customer to determine a
                                weekly delivery schedule.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="services__details__item">
                            <div className="services__details__item__icon">
                              <img
                                data-cfsrc="img/icon/icon.png"
                                alt=""
                                src="https://preview.colorlib.com/theme/florist/img/icon/icon.png"
                              />
                            </div>
                            <div className="services__details__item__text">
                              <p>
                                Referral Program. Red White &amp; Bloom will offer a
                                one-time 25% discount to each commercial customer for
                                every additional.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="services__tab__details__desc">
                        <p>
                          For Heather Henson, of Boreal Blooms in Cold Lake, Alberta,
                          Canada, growing flowers that can be dried and incorporated
                          into late fall and winter floral arrangements has been a
                          game-changer. During her growing season, this farmer-florist
                          relies on a vivid palette of annuals, perennials and
                          ornamental grasses to supply her studio.
                        </p>
                      </div>
                      <div className="services__tab__details__form">
                        <h4>Get a quote</h4>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Phone" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <input type="text" placeholder="Email" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <select style={{ display: "none" }}>
                                <option value="">Type services</option>
                              </select>
                              <div className="nice-select" tabIndex={0}>
                                <span className="current">Type services</span>
                                <ul className="list">
                                  <li data-value="" className="option selected">
                                    Type services
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea placeholder="Message" defaultValue={""} />
                              <button type="submit" className="site-btn">
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
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

export default Services
