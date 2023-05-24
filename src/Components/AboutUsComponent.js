import React from 'react'
import aboutv from '../Images/about-video.jpg.webp'
const AboutUsComponent = () => {
  return (
    <div>
        
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

    </div>
  )
}

export default AboutUsComponent