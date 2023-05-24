import React from 'react'
import Breadcrum from '../Components/Breadcrum'

import p1 from '../Images/portfolio-1.jpg'
import p2 from '../Images/portfolio-2.jpg'
import p3 from '../Images/portfolio-3.jpg'
import p4 from '../Images/portfolio-4.jpg'
import p5 from '../Images/portfolio-5.jpg'
import p6 from '../Images/portfolio-6.jpg'
import p8 from '../Images/portfolio-8.jpg'
import p9 from '../Images/portfolio-9.jpg'

const PortfolioPage = () => {
  return (
    <div>
      
      <Breadcrum pageName={'Portfolio'}/>
      <section className="portfolio spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="portfolio__item portfolio__item__medium set-bg"
                data-setbg="img/portfolio/portfolio-1.jpg"
                style={{ backgroundImage: `url(${p1})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item set-bg"
                data-setbg="img/portfolio/portfolio-2.jpg"
                style={{ backgroundImage: `URL(${p2})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item portfolio__item__large set-bg"
                data-setbg="img/portfolio/portfolio-3.jpg"
                style={{ backgroundImage: `url(${p3})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="portfolio__item set-bg"
                data-setbg="img/portfolio/portfolio-4.jpg"
                style={{ backgroundImage: `url(${p4})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item portfolio__item__large set-bg"
                data-setbg="img/portfolio/portfolio-5.jpg"
                style={{ backgroundImage: `url(${p5})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item portfolio__item__large set-bg"
                data-setbg="img/portfolio/portfolio-6.jpg"
                style={{ backgroundImage: `url(${p6})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="portfolio__item portfolio__item__large set-bg"
                data-setbg="img/portfolio/portfolio-7.jpg"
                style={{ backgroundImage: `url(${p1})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item portfolio__item__medium set-bg"
                data-setbg="img/portfolio/portfolio-8.jpg"
                style={{ backgroundImage: `url(${p8})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
              <div
                className="portfolio__item set-bg"
                data-setbg="img/portfolio/portfolio-9.jpg"
                style={{ backgroundImage: `url(${p9})` }}
              >
                <div className="portfolio__item__text">
                  <h4>Flower Day</h4>
                  <span>Decoration</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="view__all view__all--portfolio">
                <a href="#">Load more project</a>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default PortfolioPage