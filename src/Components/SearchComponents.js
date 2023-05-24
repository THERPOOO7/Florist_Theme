import React from 'react'
import { Link } from 'react-router-dom'
import {GrClose} from 'react-icons/gr'

const SearchComponents = () => {
  return (
    <div>

      <div className="search-model" style={{ display: "block" }}>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">
            <Link to= '/'><GrClose/>
            </Link>
          </div>
          <form className="search-model-form">
            <input type="text" id="search-input" placeholder="Search here....." />
          </form>
        </div>
      </div>

    </div>
  )
}

export default SearchComponents