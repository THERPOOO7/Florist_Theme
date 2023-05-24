import React from 'react'
import {Link} from 'react-router-dom'
import bc1 from '../Images/breadcrumb-bg.jpg.webp'

const Breadcrum = (props) => {
  return (
    <div>
        <div
        className="breadcrumb-option set-bg"
        data-setbg="img/breadcrumb-bg.jpg"
        style={{ backgroundImage: `url(${bc1})` }}
        >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>{props.pageName}</h2>
                <div className="breadcrumb__links">
                  <Link to="/">Home</Link>
                  <span>{props.pageName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrum