import React from 'react'
import { Link } from 'react-router-dom'

import {BsSearch} from 'react-icons/bs'
import {BsBagDash} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'

const ButtonHover = () => {
  return (
    <div>

            <ul className="product__item__hover">
              <li>
                  <Link to="#">
                      <span className="icon_search"><BsSearch /></span>
                  </Link>
              </li>
              <li>
                  <Link to="#">
                      <span className="icon_bag_alt"><BsBagDash /></span>
                  </Link>
              </li>
              <li>
                  <Link to="#">
                      <span className="icon_heart_alt"><AiOutlineHeart /></span>
                  </Link>
              </li>
            </ul>

    </div>
  )
}

export default ButtonHover