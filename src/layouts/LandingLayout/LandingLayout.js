import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import 'react-mdl/extra/css/material.cyan-orange.min.css'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// LandingLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function LandingLayout ({ children }) {
  return (
    <div className='page-container'>
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.element
}

export default LandingLayout
