import React from 'react'
import { Link } from 'react-router-dom'
import AboutUsComponent from '../Components/AboutUsComponent'
import Breadcrum from '../Components/Breadcrum'

import team1 from '../Images/team-1.jpg.webp'
import team2 from '../Images/team-2.jpg.webp'
import team3 from '../Images/team-3.jpg.webp'
import team4 from '../Images/team-4.jpg.webp'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa' 


const About = () => {
  return (
    <div>

      <Breadcrum  pageName={"Services"}/>

      <AboutUsComponent/>


      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <span>Our services</span>
                <h2>Florist’s services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services__item">
                <div className="services__item__icon">
                  <img  
                    data-cfsrc="img/services/services-1.png"
                    alt=""
                    src="https://preview.colorlib.com/theme/florist/img/services/services-1.png" />
                </div>
                            
                <h4>Custom orders</h4>
                <p>
                  Flower helps you perfectly express how important your significant.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services__item">
                <div className="services__item__icon">
                  <img data-cfsrc={"img/services/services-2.png"}
                    alt=""
                    src="https://preview.colorlib.com/theme/florist/img/services/services-2.png" />
                </div>
                <h4>Event decoration</h4>
                <p>
                  Flower helps you perfectly express how important your significant.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services__item">
                <div className="services__item__icon">
                  <img data-cfsrc="img/services/services-3.png"
                    alt=""
                    src="https://preview.colorlib.com/theme/florist/img/services/services-3.png" />
                </div>
                <h4>Green landscape</h4>
                <p>
                  Flower helps you perfectly express how important your significant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="team spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6">
              <div className="section-title">
                <span>Our Team Member</span>
                <h2>Flower Experts</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="team__btn">
                <a href="#" className="primary-btn border-btn">
                  Meet our team
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item">
                <div className="team__item__pic">
                  <img src={team1} alt="" />
                </div>
                <div className="team__item__text">
                  <h4>Richard Osborne</h4>
                  <span>Manager</span>
                  <div className="team__item__social">
                    <Link to="#">
                      <i className="fa "><FaFacebookF/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaTwitter/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaInstagram/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "> <FaLinkedinIn/></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item">
                <div className="team__item__pic">
                  <img src={team2} alt="" />
                </div>
                <div className="team__item__text">
                  <h4>Richard Osborne</h4>
                  <span>Manager</span>
                  <div className="team__item__social">
                    <Link to="#">
                      <i className="fa "><FaFacebookF/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaTwitter/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaInstagram/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "> <FaLinkedinIn/></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item">
                <div className="team__item__pic">
                  <img src={team3} alt="" />
                </div>
                <div className="team__item__text">
                  <h4>Richard Osborne</h4>
                  <span>Manager</span>
                  <div className="team__item__social">
                    <Link to="#">
                      <i className="fa "><FaFacebookF/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaTwitter/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaInstagram/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "> <FaLinkedinIn/></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="team__item">
                <div className="team__item__pic">
                  <img src={team4} alt="" />
                </div>
                <div className="team__item__text">
                  <h4>Richard Osborne</h4>
                  <span>Manager</span>
                  <div className="team__item__social">
                    <Link to="#">
                      <i className="fa "><FaFacebookF/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaTwitter/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "><FaInstagram/></i>
                    </Link>
                    <Link to="#">
                      <i className="fa "> <FaLinkedinIn/></i>
                    </Link>
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

export default About



