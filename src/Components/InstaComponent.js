import React from 'react'
import { Link } from 'react-router-dom'
import insta1 from '../Images/insta-1.jpg.webp'
import insta2 from '../Images/insta-2.jpg.webp'
import insta3 from '../Images/insta-3.jpg.webp'
import insta4 from '../Images/insta-4.jpg.webp'
import insta5 from '../Images/insta-5.jpg.webp'

import {FaInstagram} from 'react-icons/fa'

const InstaComponent = () => {
  return (
    <div>
      <section>
      <div className="instagram">
        <div className="container-fluid">
          <div className="row m-0" >
            <div className="col-lg-12">
              <div className="instagram__post">
                <div
                  className="instagram__post__item set-bg"
                  data-setbg="img/instagram/insta-1.jpg"
                  style={{ backgroundImage: `url(${insta1})` }}
                >
                  <div className="instagram__post__item__hover">
                    <i className="fa"><FaInstagram/></i>
                    <h6>
                      Follow us <Link to="#">@florist</Link>
                    </h6>
                  </div>
                </div>
                <div
                  className="instagram__post__item set-bg"
                  data-setbg="img/instagram/insta-2.jpg"
                  style={{ backgroundImage: `url(${insta2})` }}
                >
                  <div className="instagram__post__item__hover">
                    <i className="fa"><FaInstagram/></i>
                    <h6>
                      Follow us <Link to="#">@florist</Link>
                    </h6>
                  </div>
                </div>
                <div
                  className="instagram__post__item set-bg"
                  data-setbg="img/instagram/insta-3.jpg"
                  style={{ backgroundImage: `url(${insta3})` }}
                >
                  <div className="instagram__post__item__hover">
                    <i className="fa " ><FaInstagram/></i>
                    <h6>
                      Follow us <Link to="#">@florist</Link>
                    </h6>
                  </div>
                </div>
                <div
                  className="instagram__post__item set-bg"
                  data-setbg="img/instagram/insta-4.jpg"
                  style={{ backgroundImage: `url(${insta4})` }}
                >
                  <div className="instagram__post__item__hover">
                    <i className="fa" ><FaInstagram/></i>
                    <h6>
                      Follow us <Link to="#">@florist</Link>
                    </h6>
                  </div>
                </div>
                <div
                  className="instagram__post__item set-bg"
                  data-setbg="img/instagram/insta-5.jpg"
                  style={{ backgroundImage: `url(${insta5})` }}
                >
                  <div className="instagram__post__item__hover">
                    <i className="fa"><FaInstagram/></i>
                    <h6>
                      Follow us <Link to="#">@florist</Link>
                    </h6>
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

export default InstaComponent