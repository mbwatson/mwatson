import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const icons = {
  close: <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>,
  launch: <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />,
  // www
  email: <Fragment>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>,
  github: <path d="m11.999 0c-6.6266 0-11.999 5.5087-11.999 12.304 0 5.4361 3.4381 10.047 8.2069 11.675 0.60038 0.11263 0.81921-0.26737 0.81921-0.59365 0-0.29156-0.010431-1.0658-0.016706-2.0922-3.3379 0.74325-4.0422-1.6496-4.0422-1.6496-0.54588-1.4208-1.3327-1.7992-1.3327-1.7992-1.0896-0.76362 0.082492-0.7485 0.082492-0.7485 1.2045 0.08761 1.838 1.2682 1.838 1.2682 1.0704 1.88 2.809 1.3369 3.4926 1.0227 0.10901-0.79533 0.41843-1.3377 0.76176-1.6451-2.6646-0.31042-5.4663-1.3664-5.4663-6.0809 0-1.343 0.46779-2.4412 1.2354-3.3015-0.12383-0.31121-0.53556-1.562 0.11715-3.2562 0 0 1.0078-0.33082 3.3003 1.2614 0.95697-0.27266 1.9839-0.40936 3.0042-0.4139 1.0188 0.00416 2.0458 0.14132 3.0042 0.4139 2.2911-1.5922 3.2967-1.2614 3.2967-1.2614 0.65492 1.6942 0.24309 2.945 0.11924 3.2562 0.7691 0.8603 1.2339 1.9585 1.2339 3.3015 0 4.7267-2.806 5.7668-5.4795 6.0711 0.43094 0.37992 0.81479 1.1307 0.81479 2.2788 0 1.6443-0.01463 2.9714-0.01463 3.3747 0 0.32931 0.21584 0.71226 0.82511 0.59218 4.7648-1.6307 8.2001-6.2389 8.2001-11.673 0-6.7956-5.3733-12.304-12.001-12.304"/>,
  link: <Fragment>
          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
        </Fragment>,
}

export const Icon = ({ icon, size, fill, style, ...rest }) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width={ `${ size }px` } height={ `${ size }px` }
      viewBox="0 0 24 24"
      fill={ fill }
      style={{ ...style, transition: 'all 250ms' }}
      { ...rest }
    >
      { icons[icon] }
    </svg>
  )
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)),
  size: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 24,
  fill: '#333',
}
