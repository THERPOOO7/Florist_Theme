import React from 'react'
import Breadcrum from '../Components/Breadcrum'

const Contact = () => {
  return (
    <div>
      
        <Breadcrum pageName={"Contact"}/>

      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact__widget">
                <h2>Get in touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et
                  dolore.
                </p>
                <ul>
                  <li>
                    <i className="fa fa-map-marker" /> 69 North Cleveland Street,
                    Memphis,USA.
                  </li>
                  <li>
                    <i className="fa fa-phone" /> (123) 8111 9210 - (012) 1111 6868
                  </li>
                  <li>
                    <i className="fa fa-envelope" /> Florisr@supportthem.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact__form">
                <h2>Contact us</h2>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <textarea placeholder="Message" defaultValue={""} />
                  <button type="submit" className="site-btn">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact__map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                  height={310}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Contact