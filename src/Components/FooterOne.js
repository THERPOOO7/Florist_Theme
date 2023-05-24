import React from 'react'
import logo from '../Images/logo.png.webp'
import { Link } from 'react-router-dom'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import InstaComponent from './InstaComponent'

const FooterOne = () => {
  return (
    <div>
      <InstaComponent/>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <div className="footer__logo">
                  <Link to="#">
                    <img
                      data-cfsrc="img/logo.png"
                      alt=""
                      src={logo}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="footer__top__text">
                  <p>
                    The floristry business has a significant market in the corporate
                    and social event world, as flowers
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3">
                <div className="footer__top__social">
                  <Link to="#">
                    <FaFacebookF/>
                  </Link>
                  <Link to="#">
                    <FaTwitter/>
                  </Link>
                  <Link to="#">
                    <FaInstagram/>
                  </Link>
                  <Link to="#">
                  <FaLinkedinIn/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__options">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <div className="footer__widget">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <Link to="about">About us</Link>
                    </li>
                    <li>
                      <Link to="services">Servcies</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3">
                <div className="footer__widget">
                  <h4>Account</h4>
                  <ul>
                    <li>
                      <Link to="#">My cart</Link>
                    </li>
                    <li>
                      <Link to="#">Wisslist</Link>
                    </li>
                    <li>
                      <Link to="#">Login/Register</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer__newslatter">
                  <h4>Newletter</h4>
                  <p>
                    Subcribe to our newsletter to get more free tips. No Spam,
                    Promise.
                  </p>
                  <form action="#">
                    <input type="text" placeholder="Eamil" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer__widget footer__widget--address">
                  <h4>Get in touch</h4>
                  <ul>
                    <li>69 North Cleveland Street, Memphis,USA.</li>
                    <li>(123) 8111 9210 - (012) 1111 6868</li>
                    <li>Florisr@supportthem.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <div className="row">
              <div className="col-lg-12 text-center">
                <p>
                  Copyright ©2023 All rights reserved | This template is made with{" "}
                  <i className="fa fa-heart color-danger" aria-hidden="true" /> by{" "}
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
    </div>
  )
}

export default FooterOne









