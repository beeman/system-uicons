import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
const ArrowDownCircle = forwardRef(
  ({ color = 'currentColor', size = 21, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 21 21"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <g
          fill="none"
          fill-rule="evenodd"
          stroke="#2a2e3b"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="matrix(0 1 -1 0 20 2)"
        >
          <circle cx="8.5" cy="8.5" r="8"></circle>
          <path
            d="m11.621 6.379v4.242h-4.242"
            transform="matrix(.70710678 .70710678 .70710678 -.70710678 -3.227683 7.792317)"
          ></path>
          <path d="m8.5 4.5v8" transform="matrix(0 1 -1 0 17 0)"></path>
        </g>
      </svg>
    )
  }
)
ArrowDownCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
ArrowDownCircle.displayName = 'ArrowDownCircle'
export default ArrowDownCircle
